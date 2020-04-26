# Raw Domain Prices
This Project mission is to provide public information on the Raw/Actual/At-Cost/Real domain extension prices. 
Visit the pricing table here: https://docs.google.com/spreadsheets/d/1ir4dNM_BYajBzBMELzd4PDIkuNW4eB1y7p271JIwW5I/edit?usp=sharing

Might be useful for:
- To make sure you are not overcharged by your Domain Registry.
- To know how much Domain Registry is marking up prices.
- To know which domain extension is most cost effective
- etc

Domain price are so obsecured, I can hardly find what is the real price of a domain. 
Domain registry make it worse by sometimes using bait-and-switch strategy offering cheap 1st year registration, then jacking up the price beyond the real price.
It's time for us to really know (or atleast approximate) how much we should be paying for.

# Mechanism
- It scrap pricing information from this repo: `https://github.com/judge2020/Actual-Domain-Prices/` which is compiled by @judge2020 from Cloudflare API
- it scrap pricing information from : `https://domaincostclub.com/pricing.dhtml`
- it use Google Spreadsheet to present the tabular data. 
- It use Google Spreadhseet capability to use Google App Script, as backend/engine to scrap the data. 
    - So I can trigger it easily from GSheet, without any dedicated backend.
    - Yes I aim to be as backendless as possible, leveraging any off-the-shelf popular free online service, like Google App Script.
- Due to its scraping nature, it may break someday if the data source introduce significant changes.

# Other
- The Google App Script based script is available as: `scrapPrices.js` in the repo.
    - If you want to use it on your own GSheet, here's the step:
        - Create new Google Spreadhseet
        - Click on toolbar `tools > script editor`
        - Paste the script, save.
        - Refresh your browser tab that open the Gsheet.
        - You now will find on toolbar `extra menu > Scrap Domain Prices`
        - You may be asked for permission to execute it. Allow it.
- The scraped pricing data is exported as `.csv` in the repo (although not realtime updated, please visit the GSheet URL for most updated one)

# Credits
- This project is inspired and built on top of: https://github.com/judge2020/Actual-Domain-Prices/
- DomainCostClub public pricing
- Google App Script & Google Spreadhseet

# TODO
- create simple Html/web frontend interface to easily sort/search the table.

# Embedded Raw Domain Extension Price Table

>**Note**: this might not be updated in real time, please visit [the GSheet](https://docs.google.com/spreadsheets/d/1ir4dNM_BYajBzBMELzd4PDIkuNW4eB1y7p271JIwW5I/edit?usp=sharing) for more recent data

|Domain Extension|Yearly Price (USD)|Price Source      |
|----------------|------------------|------------------|
|.abogado        |25.00             |DomainCostClub.com|
|.ac             |32.88             |DomainCostClub.com|
|.academy        |20.00             |Cloudflare Domain |
|.academy        |21.50             |DomainCostClub.com|
|.accountant     |1.98              |DomainCostClub.com|
|.accountants    |66.00             |Cloudflare Domain |
|.accountants    |66.00             |DomainCostClub.com|
|.actor          |25.00             |Cloudflare Domain |
|.actor          |26.50             |DomainCostClub.com|
|.adult          |75.00             |DomainCostClub.com|
|.agency         |13.00             |Cloudflare Domain |
|.agency         |14.00             |DomainCostClub.com|
|.ai             |68.31             |DomainCostClub.com|
|.airforce       |21.50             |DomainCostClub.com|
|.apartments     |33.00             |Cloudflare Domain |
|.apartments     |35.50             |DomainCostClub.com|
|.app            |12.00             |DomainCostClub.com|
|.archi          |47.25             |DomainCostClub.com|
|.army           |21.50             |DomainCostClub.com|
|.art            |9.00              |DomainCostClub.com|
|.associates     |20.00             |Cloudflare Domain |
|.associates     |21.50             |DomainCostClub.com|
|.attorney       |35.50             |DomainCostClub.com|
|.auction        |20.00             |Cloudflare Domain |
|.auction        |21.50             |DomainCostClub.com|
|.audio          |100.00            |DomainCostClub.com|
|.auto           |2.00              |DomainCostClub.com|
|.autos          |50.00             |DomainCostClub.com|
|.baby           |50.00             |DomainCostClub.com|
|.band           |15.00             |Cloudflare Domain |
|.band           |16.00             |DomainCostClub.com|
|.bar            |50.00             |Cloudflare Domain |
|.bar            |50.00             |DomainCostClub.com|
|.bargains       |20.00             |Cloudflare Domain |
|.bargains       |21.00             |DomainCostClub.com|
|.bayern         |22.73             |DomainCostClub.com|
|.beer           |20.00             |DomainCostClub.com|
|.best           |15.00             |DomainCostClub.com|
|.bet            |10.99             |Cloudflare Domain |
|.bet            |11.99             |DomainCostClub.com|
|.bid            |1.98              |DomainCostClub.com|
|.bike           |20.00             |Cloudflare Domain |
|.bike           |21.50             |DomainCostClub.com|
|.bingo          |33.00             |Cloudflare Domain |
|.bingo          |35.50             |DomainCostClub.com|
|.bio            |47.25             |DomainCostClub.com|
|.biz            |12.63             |DomainCostClub.com|
|.black          |34.99             |Cloudflare Domain |
|.black          |36.75             |DomainCostClub.com|
|.blackfriday    |100.00            |DomainCostClub.com|
|.blog           |20.00             |DomainCostClub.com|
|.blue           |10.99             |Cloudflare Domain |
|.blue           |11.99             |DomainCostClub.com|
|.boats          |25.00             |DomainCostClub.com|
|.bond           |700.00            |DomainCostClub.com|
|.boston         |10.00             |DomainCostClub.com|
|.boutique       |20.00             |Cloudflare Domain |
|.boutique       |21.50             |DomainCostClub.com|
|.builders       |20.00             |Cloudflare Domain |
|.builders       |21.50             |DomainCostClub.com|
|.business       |5.00              |Cloudflare Domain |
|.business       |5.50              |DomainCostClub.com|
|.buzz           |25.00             |DomainCostClub.com|
|.bz             |16.00             |DomainCostClub.com|
|.cab            |20.00             |Cloudflare Domain |
|.cab            |21.50             |DomainCostClub.com|
|.cafe           |20.00             |Cloudflare Domain |
|.cafe           |21.50             |DomainCostClub.com|
|.cam            |14.00             |DomainCostClub.com|
|.camera         |33.00             |Cloudflare Domain |
|.camera         |35.50             |DomainCostClub.com|
|.camp           |33.00             |Cloudflare Domain |
|.camp           |36.00             |DomainCostClub.com|
|.capital        |33.00             |Cloudflare Domain |
|.capital        |35.50             |DomainCostClub.com|
|.car            |2.00              |DomainCostClub.com|
|.cards          |20.00             |Cloudflare Domain |
|.cards          |21.50             |DomainCostClub.com|
|.care           |20.00             |Cloudflare Domain |
|.care           |21.50             |DomainCostClub.com|
|.careers        |33.00             |Cloudflare Domain |
|.careers        |35.50             |DomainCostClub.com|
|.cars           |2.00              |DomainCostClub.com|
|.casa           |7.50              |DomainCostClub.com|
|.cash           |20.00             |Cloudflare Domain |
|.cash           |21.50             |DomainCostClub.com|
|.casino         |99.00             |Cloudflare Domain |
|.casino         |99.00             |DomainCostClub.com|
|.catering       |20.00             |Cloudflare Domain |
|.catering       |21.50             |DomainCostClub.com|
|.cc             |8.00              |DomainCostClub.com|
|.center         |13.00             |Cloudflare Domain |
|.center         |14.00             |DomainCostClub.com|
|.ceo            |70.00             |Cloudflare Domain |
|.ceo            |70.00             |DomainCostClub.com|
|.charity        |21.50             |DomainCostClub.com|
|.chat           |20.00             |Cloudflare Domain |
|.chat           |21.50             |DomainCostClub.com|
|.cheap          |20.00             |Cloudflare Domain |
|.cheap          |21.00             |DomainCostClub.com|
|.christmas      |30.00             |DomainCostClub.com|
|.church         |20.00             |Cloudflare Domain |
|.church         |21.50             |DomainCostClub.com|
|.city           |13.00             |Cloudflare Domain |
|.city           |14.00             |DomainCostClub.com|
|.claims         |33.00             |Cloudflare Domain |
|.claims         |35.00             |DomainCostClub.com|
|.cleaning       |33.00             |Cloudflare Domain |
|.cleaning       |35.50             |DomainCostClub.com|
|.click          |7.00              |DomainCostClub.com|
|.clinic         |33.00             |Cloudflare Domain |
|.clinic         |35.50             |DomainCostClub.com|
|.clothing       |20.00             |Cloudflare Domain |
|.clothing       |21.50             |DomainCostClub.com|
|.club           |8.95              |DomainCostClub.com|
|.co             |27.33             |DomainCostClub.com|
|.coach          |33.00             |Cloudflare Domain |
|.coach          |35.50             |DomainCostClub.com|
|.codes          |33.00             |Cloudflare Domain |
|.codes          |35.50             |DomainCostClub.com|
|.coffee         |20.00             |Cloudflare Domain |
|.coffee         |21.50             |DomainCostClub.com|
|.college        |45.00             |Cloudflare Domain |
|.college        |45.00             |DomainCostClub.com|
|.com            |7.85              |Cloudflare Domain |
|.com            |7.85              |DomainCostClub.com|
|.community      |20.00             |Cloudflare Domain |
|.community      |21.50             |DomainCostClub.com|
|.company        |5.00              |Cloudflare Domain |
|.company        |5.50              |DomainCostClub.com|
|.computer       |20.00             |Cloudflare Domain |
|.computer       |21.50             |DomainCostClub.com|
|.condos         |33.00             |Cloudflare Domain |
|.condos         |35.00             |DomainCostClub.com|
|.construction   |20.00             |Cloudflare Domain |
|.construction   |21.50             |DomainCostClub.com|
|.consulting     |20.00             |Cloudflare Domain |
|.consulting     |21.50             |DomainCostClub.com|
|.contractors    |20.00             |Cloudflare Domain |
|.contractors    |21.50             |DomainCostClub.com|
|.cooking        |20.00             |DomainCostClub.com|
|.cool           |20.00             |Cloudflare Domain |
|.cool           |21.50             |DomainCostClub.com|
|.coupons        |33.00             |Cloudflare Domain |
|.coupons        |35.00             |DomainCostClub.com|
|.credit         |66.00             |Cloudflare Domain |
|.credit         |66.00             |DomainCostClub.com|
|.creditcard     |99.00             |Cloudflare Domain |
|.creditcard     |99.00             |DomainCostClub.com|
|.cricket        |9.98              |DomainCostClub.com|
|.cruises        |33.00             |Cloudflare Domain |
|.cruises        |35.00             |DomainCostClub.com|
|.cx             |22.00             |DomainCostClub.com|
|.dance          |15.00             |Cloudflare Domain |
|.dance          |16.00             |DomainCostClub.com|
|.date           |1.98              |DomainCostClub.com|
|.dating         |33.00             |Cloudflare Domain |
|.dating         |35.50             |DomainCostClub.com|
|.deals          |20.00             |Cloudflare Domain |
|.deals          |21.50             |DomainCostClub.com|
|.degree         |32.00             |DomainCostClub.com|
|.delivery       |33.00             |Cloudflare Domain |
|.delivery       |35.50             |DomainCostClub.com|
|.democrat       |20.00             |Cloudflare Domain |
|.democrat       |21.50             |DomainCostClub.com|
|.dental         |33.00             |Cloudflare Domain |
|.dental         |35.50             |DomainCostClub.com|
|.dentist        |35.50             |DomainCostClub.com|
|.desi           |12.00             |DomainCostClub.com|
|.design         |33.00             |Cloudflare Domain |
|.design         |33.00             |DomainCostClub.com|
|.dev            |10.00             |DomainCostClub.com|
|.diamonds       |33.00             |Cloudflare Domain |
|.diamonds       |35.50             |DomainCostClub.com|
|.diet           |100.00            |DomainCostClub.com|
|.digital        |20.00             |Cloudflare Domain |
|.digital        |21.50             |DomainCostClub.com|
|.direct         |20.00             |Cloudflare Domain |
|.direct         |21.50             |DomainCostClub.com|
|.directory      |13.00             |Cloudflare Domain |
|.directory      |14.00             |DomainCostClub.com|
|.discount       |20.00             |Cloudflare Domain |
|.discount       |21.50             |DomainCostClub.com|
|.doctor         |66.00             |Cloudflare Domain |
|.doctor         |66.00             |DomainCostClub.com|
|.dog            |33.00             |Cloudflare Domain |
|.dog            |35.50             |DomainCostClub.com|
|.domains        |20.00             |Cloudflare Domain |
|.domains        |21.50             |DomainCostClub.com|
|.download       |1.98              |DomainCostClub.com|
|.earth          |15.00             |DomainCostClub.com|
|.eco            |50.00             |DomainCostClub.com|
|.education      |13.00             |Cloudflare Domain |
|.education      |14.00             |DomainCostClub.com|
|.email          |13.00             |Cloudflare Domain |
|.email          |14.00             |DomainCostClub.com|
|.energy         |66.00             |Cloudflare Domain |
|.energy         |66.00             |DomainCostClub.com|
|.engineer       |21.50             |DomainCostClub.com|
|.engineering    |33.00             |Cloudflare Domain |
|.engineering    |35.50             |DomainCostClub.com|
|.enterprises    |20.00             |Cloudflare Domain |
|.enterprises    |21.50             |DomainCostClub.com|
|.equipment      |13.00             |Cloudflare Domain |
|.equipment      |14.00             |DomainCostClub.com|
|.estate         |20.00             |Cloudflare Domain |
|.estate         |21.50             |DomainCostClub.com|
|.eu             |5.76              |DomainCostClub.com|
|.events         |20.00             |Cloudflare Domain |
|.events         |21.50             |DomainCostClub.com|
|.exchange       |20.00             |Cloudflare Domain |
|.exchange       |21.50             |DomainCostClub.com|
|.expert         |33.00             |Cloudflare Domain |
|.expert         |35.50             |DomainCostClub.com|
|.exposed        |13.00             |Cloudflare Domain |
|.exposed        |14.00             |DomainCostClub.com|
|.express        |20.00             |Cloudflare Domain |
|.express        |21.50             |DomainCostClub.com|
|.fail           |20.00             |Cloudflare Domain |
|.fail           |21.50             |DomainCostClub.com|
|.faith          |1.98              |DomainCostClub.com|
|.family         |15.00             |Cloudflare Domain |
|.family         |16.00             |DomainCostClub.com|
|.fan            |26.50             |DomainCostClub.com|
|.fans           |50.00             |Cloudflare Domain |
|.fans           |8.00              |DomainCostClub.com|
|.farm           |20.00             |Cloudflare Domain |
|.farm           |21.50             |DomainCostClub.com|
|.fashion        |20.00             |DomainCostClub.com|
|.finance        |33.00             |Cloudflare Domain |
|.finance        |35.50             |DomainCostClub.com|
|.financial      |33.00             |Cloudflare Domain |
|.financial      |35.50             |DomainCostClub.com|
|.fish           |20.00             |Cloudflare Domain |
|.fish           |21.50             |DomainCostClub.com|
|.fishing        |20.00             |DomainCostClub.com|
|.fit            |20.00             |DomainCostClub.com|
|.fitness        |20.00             |Cloudflare Domain |
|.fitness        |21.50             |DomainCostClub.com|
|.flights        |33.00             |Cloudflare Domain |
|.flights        |35.50             |DomainCostClub.com|
|.florist        |20.00             |Cloudflare Domain |
|.florist        |21.50             |DomainCostClub.com|
|.flowers        |100.00            |DomainCostClub.com|
|.fm             |85.00             |DomainCostClub.com|
|.fo             |46.89             |DomainCostClub.com|
|.football       |13.00             |Cloudflare Domain |
|.football       |14.00             |DomainCostClub.com|
|.forsale        |20.00             |Cloudflare Domain |
|.forsale        |21.50             |DomainCostClub.com|
|.foundation     |20.00             |Cloudflare Domain |
|.foundation     |21.50             |DomainCostClub.com|
|.fun            |15.00             |Cloudflare Domain |
|.fun            |15.00             |DomainCostClub.com|
|.fund           |33.00             |Cloudflare Domain |
|.fund           |35.00             |DomainCostClub.com|
|.furniture      |33.00             |Cloudflare Domain |
|.furniture      |35.50             |DomainCostClub.com|
|.futbol         |8.00              |Cloudflare Domain |
|.futbol         |8.50              |DomainCostClub.com|
|.fyi            |13.00             |Cloudflare Domain |
|.fyi            |14.00             |DomainCostClub.com|
|.gallery        |13.00             |Cloudflare Domain |
|.gallery        |14.00             |DomainCostClub.com|
|.game           |300.00            |DomainCostClub.com|
|.games          |12.00             |Cloudflare Domain |
|.games          |13.00             |DomainCostClub.com|
|.garden         |20.00             |DomainCostClub.com|
|.gift           |13.33             |DomainCostClub.com|
|.gifts          |20.00             |Cloudflare Domain |
|.gifts          |21.50             |DomainCostClub.com|
|.gives          |21.50             |DomainCostClub.com|
|.glass          |33.00             |Cloudflare Domain |
|.glass          |35.50             |DomainCostClub.com|
|.global         |50.00             |DomainCostClub.com|
|.gmbh           |20.00             |Cloudflare Domain |
|.gmbh           |21.50             |DomainCostClub.com|
|.gold           |66.00             |Cloudflare Domain |
|.gold           |66.00             |DomainCostClub.com|
|.golf           |33.00             |Cloudflare Domain |
|.golf           |35.50             |DomainCostClub.com|
|.graphics       |13.00             |Cloudflare Domain |
|.graphics       |14.00             |DomainCostClub.com|
|.gratis         |13.00             |Cloudflare Domain |
|.gratis         |14.00             |DomainCostClub.com|
|.green          |50.00             |Cloudflare Domain |
|.green          |50.00             |DomainCostClub.com|
|.gripe          |20.00             |Cloudflare Domain |
|.gripe          |21.50             |DomainCostClub.com|
|.group          |13.00             |Cloudflare Domain |
|.group          |8.50              |DomainCostClub.com|
|.guide          |20.00             |Cloudflare Domain |
|.guide          |21.50             |DomainCostClub.com|
|.guitars        |100.00            |DomainCostClub.com|
|.guru           |20.00             |Cloudflare Domain |
|.guru           |21.50             |DomainCostClub.com|
|.haus           |20.00             |Cloudflare Domain |
|.haus           |21.50             |DomainCostClub.com|
|.healthcare     |33.00             |Cloudflare Domain |
|.healthcare     |35.50             |DomainCostClub.com|
|.help           |20.00             |DomainCostClub.com|
|.hiphop         |100.00            |DomainCostClub.com|
|.hockey         |33.00             |Cloudflare Domain |
|.hockey         |35.50             |DomainCostClub.com|
|.holdings       |33.00             |Cloudflare Domain |
|.holdings       |35.00             |DomainCostClub.com|
|.holiday        |33.00             |Cloudflare Domain |
|.holiday        |35.50             |DomainCostClub.com|
|.homes          |25.00             |DomainCostClub.com|
|.horse          |20.00             |DomainCostClub.com|
|.hospital       |33.00             |Cloudflare Domain |
|.host           |65.00             |Cloudflare Domain |
|.host           |65.00             |DomainCostClub.com|
|.hosting        |300.00            |DomainCostClub.com|
|.house          |20.00             |Cloudflare Domain |
|.house          |21.50             |DomainCostClub.com|
|.how            |20.00             |DomainCostClub.com|
|.icu            |5.00              |DomainCostClub.com|
|.id             |18.90             |DomainCostClub.com|
|.immo           |20.00             |Cloudflare Domain |
|.immo           |21.50             |DomainCostClub.com|
|.immobilien     |20.00             |Cloudflare Domain |
|.immobilien     |21.50             |DomainCostClub.com|
|.in             |8.33              |DomainCostClub.com|
|.inc            |2.00              |DomainCostClub.com|
|.industries     |20.00             |Cloudflare Domain |
|.industries     |21.50             |DomainCostClub.com|
|.info           |10.84             |Cloudflare Domain |
|.info           |11.92             |DomainCostClub.com|
|.ink            |19.00             |Cloudflare Domain |
|.ink            |19.00             |DomainCostClub.com|
|.institute      |13.00             |Cloudflare Domain |
|.institute      |14.00             |DomainCostClub.com|
|.insure         |33.00             |Cloudflare Domain |
|.insure         |35.50             |DomainCostClub.com|
|.international  |13.00             |Cloudflare Domain |
|.international  |14.00             |DomainCostClub.com|
|.investments    |66.00             |Cloudflare Domain |
|.investments    |66.00             |DomainCostClub.com|
|.io             |45.00             |Cloudflare Domain |
|.io             |33.88             |DomainCostClub.com|
|.irish          |10.00             |Cloudflare Domain |
|.irish          |10.50             |DomainCostClub.com|
|.ist            |12.00             |DomainCostClub.com|
|.istanbul       |15.00             |DomainCostClub.com|
|.jetzt          |13.00             |Cloudflare Domain |
|.jetzt          |14.00             |DomainCostClub.com|
|.jewelry        |33.00             |Cloudflare Domain |
|.jewelry        |35.50             |DomainCostClub.com|
|.juegos         |300.00            |DomainCostClub.com|
|.kaufen         |20.00             |Cloudflare Domain |
|.kaufen         |21.50             |DomainCostClub.com|
|.kim            |10.99             |Cloudflare Domain |
|.kim            |11.99             |DomainCostClub.com|
|.kitchen        |33.00             |Cloudflare Domain |
|.kitchen        |35.50             |DomainCostClub.com|
|.la             |31.00             |DomainCostClub.com|
|.land           |20.00             |Cloudflare Domain |
|.land           |21.50             |DomainCostClub.com|
|.law            |69.00             |DomainCostClub.com|
|.lawyer         |35.50             |DomainCostClub.com|
|.lease          |33.00             |Cloudflare Domain |
|.lease          |35.00             |DomainCostClub.com|
|.legal          |33.00             |Cloudflare Domain |
|.legal          |35.50             |DomainCostClub.com|
|.lgbt           |29.95             |Cloudflare Domain |
|.lgbt           |29.95             |DomainCostClub.com|
|.life           |20.00             |Cloudflare Domain |
|.life           |21.00             |DomainCostClub.com|
|.lighting       |13.00             |Cloudflare Domain |
|.lighting       |14.00             |DomainCostClub.com|
|.limited        |20.00             |Cloudflare Domain |
|.limited        |21.50             |DomainCostClub.com|
|.limo           |33.00             |Cloudflare Domain |
|.limo           |36.00             |DomainCostClub.com|
|.link           |7.00              |DomainCostClub.com|
|.live           |15.00             |Cloudflare Domain |
|.live           |16.00             |DomainCostClub.com|
|.loan           |1.98              |DomainCostClub.com|
|.loans          |66.00             |Cloudflare Domain |
|.loans          |66.00             |DomainCostClub.com|
|.lol            |20.00             |DomainCostClub.com|
|.london         |25.97             |DomainCostClub.com|
|.love           |20.00             |Cloudflare Domain |
|.love           |20.00             |DomainCostClub.com|
|.ltd            |13.00             |Cloudflare Domain |
|.ltd            |14.00             |DomainCostClub.com|
|.ltda           |28.00             |DomainCostClub.com|
|.luxe           |15.00             |DomainCostClub.com|
|.maison         |33.00             |Cloudflare Domain |
|.maison         |35.50             |DomainCostClub.com|
|.management     |13.00             |Cloudflare Domain |
|.management     |14.00             |DomainCostClub.com|
|.market         |21.00             |DomainCostClub.com|
|.marketing      |20.00             |Cloudflare Domain |
|.marketing      |21.50             |DomainCostClub.com|
|.mba            |20.00             |Cloudflare Domain |
|.mba            |21.50             |DomainCostClub.com|
|.me             |10.82             |DomainCostClub.com|
|.media          |20.00             |Cloudflare Domain |
|.media          |21.50             |DomainCostClub.com|
|.memorial       |33.00             |Cloudflare Domain |
|.memorial       |35.50             |DomainCostClub.com|
|.men            |1.98              |DomainCostClub.com|
|.miami          |12.00             |DomainCostClub.com|
|.mobi           |12.99             |Cloudflare Domain |
|.mobi           |14.25             |DomainCostClub.com|
|.moda           |20.00             |Cloudflare Domain |
|.moda           |21.50             |DomainCostClub.com|
|.mom            |25.00             |DomainCostClub.com|
|.money          |20.00             |Cloudflare Domain |
|.money          |21.50             |DomainCostClub.com|
|.monster        |8.56              |DomainCostClub.com|
|.mortgage       |32.00             |DomainCostClub.com|
|.motorcycles    |25.00             |DomainCostClub.com|
|.movie          |200.00            |Cloudflare Domain |
|.movie          |200.00            |DomainCostClub.com|
|.museum         |37.88             |DomainCostClub.com|
|.name           |6.60              |DomainCostClub.com|
|.navy           |21.50             |DomainCostClub.com|
|.net            |9.77              |Cloudflare Domain |
|.net            |9.77              |DomainCostClub.com|
|.network        |13.00             |Cloudflare Domain |
|.network        |14.00             |DomainCostClub.com|
|.news           |15.00             |Cloudflare Domain |
|.news           |16.00             |DomainCostClub.com|
|.ninja          |12.00             |Cloudflare Domain |
|.ninja          |13.00             |DomainCostClub.com|
|.nl             |5.45              |DomainCostClub.com|
|.nyc            |20.00             |DomainCostClub.com|
|.observer       |8.00              |DomainCostClub.com|
|.onl            |9.95              |DomainCostClub.com|
|.online         |25.00             |Cloudflare Domain |
|.online         |25.00             |DomainCostClub.com|
|.ooo            |19.99             |DomainCostClub.com|
|.org            |9.93              |Cloudflare Domain |
|.org            |9.93              |DomainCostClub.com|
|.organic        |50.00             |DomainCostClub.com|
|.page           |8.00              |DomainCostClub.com|
|.paris          |31.38             |DomainCostClub.com|
|.partners       |33.00             |Cloudflare Domain |
|.partners       |35.50             |DomainCostClub.com|
|.parts          |20.00             |Cloudflare Domain |
|.parts          |21.50             |DomainCostClub.com|
|.party          |1.98              |DomainCostClub.com|
|.pet            |10.99             |Cloudflare Domain |
|.pet            |11.99             |DomainCostClub.com|
|.photo          |20.00             |DomainCostClub.com|
|.photography    |13.00             |Cloudflare Domain |
|.photography    |14.00             |DomainCostClub.com|
|.photos         |13.00             |Cloudflare Domain |
|.photos         |14.00             |DomainCostClub.com|
|.pics           |20.00             |DomainCostClub.com|
|.pictures       |7.00              |Cloudflare Domain |
|.pictures       |7.50              |DomainCostClub.com|
|.pink           |10.99             |Cloudflare Domain |
|.pink           |11.99             |DomainCostClub.com|
|.pizza          |33.00             |Cloudflare Domain |
|.pizza          |36.00             |DomainCostClub.com|
|.plumbing       |33.00             |Cloudflare Domain |
|.plumbing       |35.50             |DomainCostClub.com|
|.plus           |20.00             |Cloudflare Domain |
|.plus           |21.50             |DomainCostClub.com|
|.poker          |36.75             |DomainCostClub.com|
|.porn           |75.00             |DomainCostClub.com|
|.press          |49.00             |Cloudflare Domain |
|.press          |49.00             |DomainCostClub.com|
|.pro            |10.99             |Cloudflare Domain |
|.pro            |12.09             |DomainCostClub.com|
|.productions    |20.00             |Cloudflare Domain |
|.productions    |21.50             |DomainCostClub.com|
|.promo          |10.99             |Cloudflare Domain |
|.promo          |11.99             |DomainCostClub.com|
|.properties     |20.00             |Cloudflare Domain |
|.properties     |21.50             |DomainCostClub.com|
|.property       |100.00            |DomainCostClub.com|
|.protection     |2.00              |DomainCostClub.com|
|.pub            |20.00             |Cloudflare Domain |
|.pub            |21.50             |DomainCostClub.com|
|.pw             |15.00             |DomainCostClub.com|
|.racing         |1.98              |DomainCostClub.com|
|.realestate     |68.00             |DomainCostClub.com|
|.realty         |272.00            |DomainCostClub.com|
|.recipes        |33.00             |Cloudflare Domain |
|.recipes        |35.00             |DomainCostClub.com|
|.red            |10.99             |Cloudflare Domain |
|.red            |11.99             |DomainCostClub.com|
|.rehab          |21.50             |DomainCostClub.com|
|.reise          |66.00             |Cloudflare Domain |
|.reise          |66.00             |DomainCostClub.com|
|.reisen         |13.00             |Cloudflare Domain |
|.reisen         |14.00             |DomainCostClub.com|
|.rent           |45.00             |Cloudflare Domain |
|.rent           |45.00             |DomainCostClub.com|
|.rentals        |20.00             |Cloudflare Domain |
|.rentals        |21.50             |DomainCostClub.com|
|.repair         |20.00             |Cloudflare Domain |
|.repair         |21.50             |DomainCostClub.com|
|.report         |13.00             |Cloudflare Domain |
|.report         |21.50             |DomainCostClub.com|
|.republican     |20.00             |Cloudflare Domain |
|.republican     |21.50             |DomainCostClub.com|
|.rest           |25.00             |Cloudflare Domain |
|.rest           |25.00             |DomainCostClub.com|
|.restaurant     |33.00             |Cloudflare Domain |
|.restaurant     |35.50             |DomainCostClub.com|
|.review         |1.98              |DomainCostClub.com|
|.reviews        |15.00             |Cloudflare Domain |
|.reviews        |16.00             |DomainCostClub.com|
|.rich           |1.00              |DomainCostClub.com|
|.rip            |12.00             |Cloudflare Domain |
|.rip            |13.00             |DomainCostClub.com|
|.rocks          |8.00              |Cloudflare Domain |
|.rocks          |8.50              |DomainCostClub.com|
|.rodeo          |5.00              |DomainCostClub.com|
|.run            |13.00             |Cloudflare Domain |
|.run            |14.00             |DomainCostClub.com|
|.saarland       |16.23             |DomainCostClub.com|
|.sale           |20.00             |Cloudflare Domain |
|.sale           |21.50             |DomainCostClub.com|
|.salon          |33.00             |Cloudflare Domain |
|.salon          |36.00             |DomainCostClub.com|
|.sarl           |20.00             |Cloudflare Domain |
|.sarl           |21.50             |DomainCostClub.com|
|.school         |20.00             |Cloudflare Domain |
|.school         |21.50             |DomainCostClub.com|
|.schule         |13.00             |Cloudflare Domain |
|.schule         |14.00             |DomainCostClub.com|
|.science        |1.98              |DomainCostClub.com|
|.security       |2000.00           |Cloudflare Domain |
|.security       |2.00              |DomainCostClub.com|
|.services       |20.00             |Cloudflare Domain |
|.services       |21.00             |DomainCostClub.com|
|.sex            |75.00             |DomainCostClub.com|
|.sexy           |25.00             |DomainCostClub.com|
|.sh             |32.88             |DomainCostClub.com|
|.shiksha        |11.55             |DomainCostClub.com|
|.shoes          |33.00             |Cloudflare Domain |
|.shoes          |35.50             |DomainCostClub.com|
|.shop           |25.92             |DomainCostClub.com|
|.shopping       |20.00             |Cloudflare Domain |
|.shopping       |21.00             |DomainCostClub.com|
|.show           |20.00             |Cloudflare Domain |
|.show           |21.50             |DomainCostClub.com|
|.si             |19.97             |DomainCostClub.com|
|.singles        |20.00             |Cloudflare Domain |
|.singles        |21.00             |DomainCostClub.com|
|.site           |20.00             |Cloudflare Domain |
|.site           |20.00             |DomainCostClub.com|
|.ski            |31.50             |DomainCostClub.com|
|.soccer         |13.00             |Cloudflare Domain |
|.soccer         |14.00             |DomainCostClub.com|
|.social         |20.00             |Cloudflare Domain |
|.social         |21.50             |DomainCostClub.com|
|.software       |21.50             |DomainCostClub.com|
|.solar          |33.00             |Cloudflare Domain |
|.solar          |35.50             |DomainCostClub.com|
|.solutions      |13.00             |Cloudflare Domain |
|.solutions      |14.00             |DomainCostClub.com|
|.soy            |18.00             |DomainCostClub.com|
|.space          |15.00             |Cloudflare Domain |
|.space          |15.00             |DomainCostClub.com|
|.srl            |26.00             |DomainCostClub.com|
|.st             |36.97             |DomainCostClub.com|
|.storage        |500.00            |Cloudflare Domain |
|.storage        |500.00            |DomainCostClub.com|
|.store          |40.00             |Cloudflare Domain |
|.store          |40.00             |DomainCostClub.com|
|.stream         |1.98              |DomainCostClub.com|
|.studio         |15.00             |Cloudflare Domain |
|.studio         |16.00             |DomainCostClub.com|
|.style          |20.00             |Cloudflare Domain |
|.style          |21.50             |DomainCostClub.com|
|.sucks          |199.00            |DomainCostClub.com|
|.supplies       |13.00             |Cloudflare Domain |
|.supplies       |14.00             |DomainCostClub.com|
|.supply         |13.00             |Cloudflare Domain |
|.supply         |14.00             |DomainCostClub.com|
|.support        |13.00             |Cloudflare Domain |
|.support        |14.00             |DomainCostClub.com|
|.surf           |20.00             |DomainCostClub.com|
|.surgery        |33.00             |Cloudflare Domain |
|.surgery        |35.50             |DomainCostClub.com|
|.systems        |13.00             |Cloudflare Domain |
|.systems        |14.00             |DomainCostClub.com|
|.tattoo         |30.00             |DomainCostClub.com|
|.tax            |33.00             |Cloudflare Domain |
|.tax            |35.50             |DomainCostClub.com|
|.taxi           |33.00             |Cloudflare Domain |
|.taxi           |35.50             |DomainCostClub.com|
|.team           |20.00             |Cloudflare Domain |
|.team           |21.50             |DomainCostClub.com|
|.tech           |35.00             |Cloudflare Domain |
|.tech           |35.00             |DomainCostClub.com|
|.technology     |13.00             |Cloudflare Domain |
|.technology     |14.00             |DomainCostClub.com|
|.tel            |9.00              |DomainCostClub.com|
|.tennis         |33.00             |Cloudflare Domain |
|.tennis         |35.50             |DomainCostClub.com|
|.theater        |33.00             |Cloudflare Domain |
|.theater        |35.50             |DomainCostClub.com|
|.theatre        |500.00            |Cloudflare Domain |
|.theatre        |500.00            |DomainCostClub.com|
|.tienda         |33.00             |Cloudflare Domain |
|.tienda         |35.50             |DomainCostClub.com|
|.tips           |13.00             |Cloudflare Domain |
|.tips           |14.00             |DomainCostClub.com|
|.tires          |66.00             |Cloudflare Domain |
|.tires          |66.00             |DomainCostClub.com|
|.today          |13.00             |Cloudflare Domain |
|.today          |14.00             |DomainCostClub.com|
|.tools          |20.00             |Cloudflare Domain |
|.tools          |21.50             |DomainCostClub.com|
|.top            |6.22              |DomainCostClub.com|
|.tours          |33.00             |Cloudflare Domain |
|.tours          |21.50             |DomainCostClub.com|
|.town           |20.00             |Cloudflare Domain |
|.town           |21.50             |DomainCostClub.com|
|.toys           |33.00             |Cloudflare Domain |
|.toys           |35.50             |DomainCostClub.com|
|.trade          |1.98              |DomainCostClub.com|
|.training       |20.00             |Cloudflare Domain |
|.training       |21.50             |DomainCostClub.com|
|.travel         |80.00             |DomainCostClub.com|
|.tube           |20.00             |DomainCostClub.com|
|.tv             |25.00             |DomainCostClub.com|
|.university     |33.00             |Cloudflare Domain |
|.university     |35.50             |DomainCostClub.com|
|.uno            |15.00             |DomainCostClub.com|
|.us             |6.50              |DomainCostClub.com|
|.vacations      |20.00             |Cloudflare Domain |
|.vacations      |21.50             |DomainCostClub.com|
|.vegas          |39.95             |DomainCostClub.com|
|.ventures       |33.00             |Cloudflare Domain |
|.ventures       |35.50             |DomainCostClub.com|
|.vet            |21.50             |DomainCostClub.com|
|.viajes         |33.00             |Cloudflare Domain |
|.viajes         |35.00             |DomainCostClub.com|
|.video          |15.00             |Cloudflare Domain |
|.video          |16.00             |DomainCostClub.com|
|.villas         |33.00             |Cloudflare Domain |
|.villas         |35.50             |DomainCostClub.com|
|.vin            |33.00             |Cloudflare Domain |
|.vin            |35.50             |DomainCostClub.com|
|.vip            |11.00             |DomainCostClub.com|
|.vision         |20.00             |Cloudflare Domain |
|.vision         |21.50             |DomainCostClub.com|
|.vodka          |20.00             |DomainCostClub.com|
|.vote           |50.00             |DomainCostClub.com|
|.voto           |50.00             |DomainCostClub.com|
|.voyage         |33.00             |Cloudflare Domain |
|.voyage         |35.50             |DomainCostClub.com|
|.watch          |20.00             |Cloudflare Domain |
|.watch          |21.50             |DomainCostClub.com|
|.webcam         |1.98              |DomainCostClub.com|
|.website        |15.00             |Cloudflare Domain |
|.website        |15.00             |DomainCostClub.com|
|.wedding        |20.00             |DomainCostClub.com|
|.wiki           |19.00             |Cloudflare Domain |
|.wiki           |19.00             |DomainCostClub.com|
|.win            |1.98              |DomainCostClub.com|
|.wine           |33.00             |Cloudflare Domain |
|.wine           |35.50             |DomainCostClub.com|
|.work           |6.00              |DomainCostClub.com|
|.works          |20.00             |Cloudflare Domain |
|.works          |21.50             |DomainCostClub.com|
|.world          |20.00             |Cloudflare Domain |
|.world          |21.00             |DomainCostClub.com|
|.ws             |19.00             |DomainCostClub.com|
|.wtf            |20.00             |Cloudflare Domain |
|.wtf            |21.50             |DomainCostClub.com|
|.xxx            |75.00             |DomainCostClub.com|
|.xyz            |8.00              |Cloudflare Domain |
|.xyz            |8.00              |DomainCostClub.com|
|.yachts         |25.00             |DomainCostClub.com|
|.yoga           |20.00             |DomainCostClub.com|
|.zone           |20.00             |Cloudflare Domain |
|.zone           |21.50             |DomainCostClub.com|
|.中文网            |78.00             |DomainCostClub.com|
|.在线             |200.00            |DomainCostClub.com|
|.移动             |10.99             |DomainCostClub.com|
|.购物             |269.00            |DomainCostClub.com|
