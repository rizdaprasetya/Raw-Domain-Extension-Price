/* 
 * Usage Instructions: 
 * Login to Cloudflare dashboard: https://dash.cloudflare.com/
 * Then open browser JS console, paste this JS code, then run it.
 * Wait a few second, until all output generated, and a CSV file should be auto downloaded on your browser.
 * You can also change some "config" variables, if you want.
 */
async function mainScript(config = {}) {
    // configurable config example/default
    let defaultConfig = {
      tldList: 
["academy","accountant","accountants","actor","agency","apartments","app","associates","attorney","auction","band","bar","bargains","beer","bet","bid","bike","bingo","biz","black","blog","blue","boo","boston","boutique","broker","builders","business","cab","cafe","camera","camp","capital","cards","care","careers","casa","cash","casino","catering","cc","center","ceo","chat","cheap","church","city","claims","cleaning","clinic","clothing","cloud","club","co","coach","codes","coffee","college","com","com.co","community","company","compare","computer","condos","construction","consulting","contact","contractors","cooking","cool","co.uk","coupons","credit","creditcard","cricket","cruises","dad","dance","date","dating","day","deals","degree","delivery","democrat","dental","dentist","design","dev","diamonds","digital","direct","directory","discount","doctor","dog","domains","download","education","email","energy","engineer","engineering","enterprises","equipment","esq","estate","events","exchange","expert","express","fail","faith","family","fans","farm","fashion","finance","financial","fish","fishing","fit","fitness","flights","florist","fm","foo","football","forex","forsale","foundation","fun","fund","furniture","futbol","fyi","gallery","games","garden","gifts","gives","glass","gmbh","gold","golf","graphics","gratis","green","gripe","group","guide","guru","haus","health","healthcare","hockey","holdings","holiday","horse","hospital","host","house","how","immo","immobilien","industries","info","ink","institute","insure","international","investments","io","irish","jetzt","jewelry","kaufen","kim","kitchen","land","lawyer","lease","legal","lgbt","life","lighting","limited","limo","live","loan","loans","love","ltd","luxe","maison","management","market","marketing","markets","mba",".me","media","memorial","men","me.uk","miami","mobi","moda","money","mortgage","mov","movie","net","net.co","network","new","news","nexus","ninja","nom.co","observer","online","org","org.uk","page","partners","parts","party","pet","phd","photography","photos","pictures","pink","pizza","place","plumbing","plus","press","pro","productions","prof","promo","properties","pub","racing","radio.fm","realty","recipes","red","rehab","reise","reisen","rent","rentals","repair","report","republican","rest","restaurant","review","reviews","rip","rocks","rodeo","rsvp","run","sale","salon","sarl","school","schule","science","security","select","services","shoes","shopping","show","singles","site","soccer","social","software","solar","solutions","soy","space","storage","store","stream","studio","style","supplies","supply","support","surf","surgery","systems","tax","taxi","team","tech","technology","tennis","theater","theatre","tienda","tips","tires","today","tools","tours","town","toys","trade","trading","training","tv","uk","university","us","vacations","ventures","vet","viajes","video","villas","vin","vip","vision","vodka","voyage","watch","webcam","website","wedding","wiki","win","wine","work","works","world","wtf","xyz","yoga","zone",]
      ,
      isDownloadAsCsv: true,
      isPrintDebugLog: true,
      tldCountPerSubRequest: 50,
      dummyDomainName: "forgivemeforthis4321",
    };
    let cfg = Object.assign(config, defaultConfig);
    // isDebugMode. 1 to print debug. 0 to disable.
    let dd = cfg.isPrintDebugLog;
  
    /* API Get current logged in Account details */
    let getAccountResp = await fetch("https://dash.cloudflare.com/api/v4/system/bootstrap", {
        "headers": {
          "x-cross-site-security": "dash"
        },
        "method": "GET",
      })
      .then(response => response.json());
    dd && console.log("getAccountResp:", getAccountResp);
    let cfAtokHeader = getAccountResp.result.data.atok;
    let cfUserId = getAccountResp.result.data.data.user.primary_account_tag;
  
    let tldSuffix = cfg.dummyDomainName;
    let rawTlds = cfg.tldList;
    // Chunk the tld array, so that each request doesn't send too much number of tlds
    let tldsDetail = [];
  
    let chunkRawTlds = chunkArray(rawTlds, cfg.tldCountPerSubRequest);
    for (const rawTlds of chunkRawTlds) {
      let tldsParam = rawTlds.map(tld => tldSuffix + "." + tld);
      let queryTldsPayload = JSON.stringify({
        "id": tldsParam
      });
  
      // delay a few miliseconds between request
      await new Promise(resolve => setTimeout(resolve, 500));
  
      /* API Get TLDs details */
      let getTldsChunkResp = await fetch("https://dash.cloudflare.com/api/v4/accounts/" + cfUserId + "/registrar/domains", {
          "headers": {
            "content-type": "application/json",
            "x-atok": cfAtokHeader,
            "x-cross-site-security": "dash"
          },
          "body": queryTldsPayload,
          "method": "POST",
        })
        .then(response => response.json());
      dd && console.log("getTldsChunkResp:", getTldsChunkResp);
      tldsDetail = [].concat(tldsDetail, getTldsChunkResp.result);
    }

    // filter out all TLD with `undefined` renewal_fee
    tldsDetail = tldsDetail.filter((tld)=>{ return tld.fees.renewal_fee !== undefined })
  
    let tldsPricingCsvOutput = "tld_name,renewal_price_usd,registration_price_usd\r\n";
  
    let tldsPricing = (tldsDetail).map((tld, idx) => {
      let tldPricing = {
        tld_name: ((tld.name).split('.'))[1],
        renewal_price_usd: tld.fees.renewal_fee,
        registration_price_usd: tld.fees.registration_fee
      };
      tldsPricingCsvOutput += (tldPricing.tld_name + "," + tldPricing.renewal_price_usd + "," + tldPricing.registration_price_usd + "\r\n");
      return tldPricing;
    });
    dd && console.log("tldsPricing:", tldsPricing);
    // print final output in CSV format
    console.log(tldsPricingCsvOutput);
  
    if (cfg.isDownloadAsCsv) {
      // Trigger browser download
      downloadAsCsvFile(tldsPricingCsvOutput, "cloudflare-domain-pricing-dump.csv")
    }
  
    // HELPER FUNCTIONS below
    function chunkArray(arr, size) {
      return arr.length > size ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)] : [arr];
    }
  
    function downloadAsCsvFile(outputString = "", filename = "out.csv") {
      let encodedUri = encodeURI(outputString);
      let link = document.createElement("a");
      link.setAttribute("href", "data:text/csv;charset=utf-8," + encodedUri);
      link.setAttribute("download", filename);
      document.body.appendChild(link); // Required for FF
      link.click()
    }
  }
  
  mainScript();