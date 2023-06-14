/** @OnlyCurrentDoc */

/**
 * !!! WARNING OUTDATED SCRIPT !!!
 * This script no longer used/works. 
 * Please check the `./scrap-cloudflare-domain-pricing/` folder on the main repo instead.
 * It just here for legacy reference.
 */

// global vars
var app = SpreadsheetApp.getActiveSpreadsheet();
var ui = SpreadsheetApp.getUi();
var sheet = app.getSheetByName('domain-price'); // main domain-price sheet

/**
* Register Custom Menu to UI
**/
function onOpen() {
  var customEntries = [ 
    {name: "Scrap Domain Prices", functionName: "scrapDomainPrices"},
    {name: "Backup Price Sheet", functionName: "duplicateCurrentSheetAsBackup"}
  ];
  app.addMenu("Extra Menu", customEntries);
}

/**
* Main Function
**/
function scrapDomainPrices(){
  //ui.alert('clicked');
  
  var priceSrcUrls = [
    'https://raw.githubusercontent.com/judge2020/Actual-Domain-Prices/master/README.md',
    'https://www.domaincostclub.com/pricing.dhtml'
  ];
  
  // Fetch all source URL
  var priceSrcs = priceSrcUrls.map(function(priceSrcUrl){
    // Have to use CORS proxy, somehow domainCostClub block request from Google app script :(
    var fetchOpt = {"headers":{"origin":"https://github.com"}};
    var responseObj = UrlFetchApp.fetch("https://cors-anywhere.herokuapp.com/"+priceSrcUrl, fetchOpt);
    return responseObj.getContentText();
  });
  
  // Extract using each source-compatible function
  var pricesArray = [
    extractPricesCfGithub(priceSrcs[0], true),
    extractPricesDCC(priceSrcs[1], true)
  ];

  var mergedPrices = mergeAndSortPrices(pricesArray);
  
  // backup current price sheet to new sheet
  duplicateCurrentSheetAsBackup();
  // write data to sheet, overwriting from 1 row
  sheet.getRange(2, 1, mergedPrices.length, mergedPrices[0].length).setValues(mergedPrices);
}

function duplicateCurrentSheetAsBackup(){
  var backupSheet = sheet.copyTo(app);
  backupSheet.setName(`backup-on-${(Math.floor(((new Date()).getTime()/1000)).toString())}`);
}

/**
* [NON GOOGLE APP SCRIPT COMPATIBLE]
* code below this line is compatible with regular NodeJS or Browser's frontend JS
* you can reuse below codes outside of Google App Script env
**/

var extractPricesCfGithub = function(mdStr, isReturnAsArray=0){
  /** 
  * The input value is HTTP GET response from url: 
  * https://raw.githubusercontent.com/judge2020/Actual-Domain-Prices/master/README.md
  * Credits to @judge2020 for compiling it from unlisted Cloudflare's API
  */
  
  // only process text after this keyword
  mdStr = (mdStr.split('|---|---|'))[1];
  // get any row from table that looks like this:
  // |<word>|<integer OR decimal>|
  // prefix & suffix excluded
  var pattern = /(?<=\|)\w+?\|[0-9]+([,.][0-9]+)?(?=\|)/gms;
  var priceRows = mdStr.match(pattern);
  var prices = priceRows.map(function(row){
    var priceSplit = row.split('|');
    return {
      "domain_extension": '.'+priceSplit[0],
      "renewal_price": parseFloat(priceSplit[1]),
      "source": "Cloudflare Domain"
    };
  });
  
  if(isReturnAsArray){
    return priceObjsToPriceArrays(prices)
  }
  return prices;
}

var extractPricesDCC = function(htmlStr, isReturnAsArray=0){
  /** 
  * The input value is HTTP GET response from url: 
  * https://www.domaincostclub.com/pricing.dhtml 
  * Credits to DomainCostClub for publishing the data
  */
  
  // only process text after this keyword
  htmlStr = (htmlStr.split('panel_type_members'))[1];
  // get any tr table row which contain pricing ($)
  var pattern = /<tr>.+?$.+?<\/tr>/gms;
  var priceRows = htmlStr.match(pattern);
  var prices = priceRows.map(function(row){
    var processedRow = row
      // remove whitespace
      .replace(/\s/g, "")
      // remove html closing tag
      .replace(/<\/.+?>/g,"")
      // remove tr tag open
      .replace('<tr>',"")
      // use remaining td tag as separator
      .split('<td>');
    if(processedRow.length<2){
      return null;
    }
    // clean up any html tag that might left within domain name
    if(processedRow[1].includes('<')){
      processedRow[1] = (processedRow[1].match(/(?<=>)\..+?(?=<)/))[0];
    }
    // clean up price & parse as float
    processedRow[3] = parseFloat(
      processedRow[3]
      //remove dollar sign
      .replace('$','')
      //remove comma, as it may cause incorrect parseFloat result
      .replace(',','')
    );
    
    return {
      "domain_extension": processedRow[1],
      "renewal_price": processedRow[3],
      "source": "DomainCostClub.com"
    }
  });
  // filter out null values
  var pricesWithoutNull = prices.filter(function(row){
    return row
  });
  
  if(isReturnAsArray){
    return priceObjsToPriceArrays(pricesWithoutNull)
  }
  return pricesWithoutNull;
};

// convert Price in JSON format to Array format
var priceObjsToPriceArrays = function(prices){
  return prices.map(function(price){
    return [
      price.domain_extension, 
      price.renewal_price,
      price.source
    ];
  })
};

// merge two array of prices, and sort based on 1st column
var mergeAndSortPrices = function(prices){
  var mergedPrices = Array.prototype.concat.apply([], prices);
  return mergedPrices.sort(function(x,y){
    if (x[0] < y[0]) {
      return -1;
    }
    if (x[0] > y[0]) {
      return 1;
    }
    return 0;
  });
};