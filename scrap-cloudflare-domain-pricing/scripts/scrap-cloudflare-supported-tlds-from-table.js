/*
Used to get list of all tld names from https://www.cloudflare.com/tld-policies/
print out as an JS array string.
Usage Instructions: 
Visit the URL, then open browser JS console, paste this JS code, then run it.
*/
function mainScript() {
    let output = '';
    let mainTldTable = document.querySelector('.table__container');
    let tldRowEls = Array.from(mainTldTable.querySelectorAll('.fw4.ma0.lh-copy'));
    let tldNames = tldRowEls.map(el => el.textContent);
    output+= "[";
    for (const tld of tldNames) {
      output += '"' + tld + '",';
    }
    output+= "]";
    console.log(output);
  }
  mainScript();