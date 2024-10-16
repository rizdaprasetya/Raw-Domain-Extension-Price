# Raw Domain Prices Data Dump
> [!CAUTION] 
> **The Pricing Information may no longer be Valid/Up-to-Date** \
> \
> Sadly, as of 16 October 2024, it **seems CF has patched their API endpoint** to no longer expose domain pricing :( \
> The script I used to update this repo no longer seems to work, not sure if I can update the info in this repo anymore. I'll need to try to find workarounds, but can't promise I can do it anytime soon.

This repository aims to provide visibility of information on raw/actual/at-cost domain extension prices. Visit the pricing table here:

- [Cloudflare TLDs domain pricing dump](./scrap-cloudflare-domain-pricing/cloudflare-domain-pricing-dump.csv) from Cloudflare registrar API. Updated (Apr 2024). Checkout [that folder](./scrap-cloudflare-domain-pricing/) to learn more.

This might be useful for:

- Ensuring we are not overcharged by domain registry service providers we are using.
- Roughly estimating how much domain registries mark up prices.
- Identifying which domain extension is the most cost-effective.
- And more.

Domain prices are so obscured; we can hardly find the real price of a domain. Domain registry service providers make it worse by sometimes using a bait-and-switch strategy, offering cheap first-year registration, then jacking up the price beyond the actual cost. It's time for us to really know (or at least approximate) how much we should be paying for.

# Embedded Raw Domain Extension Price Table Dump

> **Note**: This embedded table is manually [converted to markdown](https://www.convertcsv.com/csv-to-markdown.htm) format from [Cloudflare TLDs domain pricing dump](./scrap-cloudflare-domain-pricing/cloudflare-domain-pricing-dump.csv) and may forget to be updated to reflect the original file. Prices are in USD, for an annual period.

|tld_name     |renewal_price_usd|registration_price_usd|
|-------------|-----------------|----------------------|
|academy      |25               |25                    |
|accountant   |19.98            |19.98                 |
|accountants  |75               |75                    |
|actor        |29               |29                    |
|agency       |18               |18                    |
|apartments   |40               |40                    |
|app          |12               |12                    |
|associates   |26               |26                    |
|attorney     |40               |40                    |
|auction      |23               |23                    |
|band         |20               |20                    |
|bar          |50               |50                    |
|bargains     |23               |23                    |
|beer         |22               |22                    |
|bet          |17               |17                    |
|bid          |4.98             |3.98                  |
|bike         |25               |25                    |
|bingo        |38               |38                    |
|biz          |15               |15                    |
|black        |42.5             |42.5                  |
|blog         |20               |20                    |
|blue         |15               |15                    |
|boo          |8                |8                     |
|boston       |10               |10                    |
|boutique     |23               |23                    |
|broker       |22               |22                    |
|builders     |25               |25                    |
|business     |9                |9                     |
|cab          |21.5             |21.5                  |
|cafe         |28               |28                    |
|camera       |40               |40                    |
|camp         |38               |38                    |
|capital      |46               |46                    |
|cards        |25               |25                    |
|care         |27               |27                    |
|careers      |46               |46                    |
|casa         |7.5              |7.5                   |
|cash         |23               |23                    |
|casino       |110              |110                   |
|catering     |25               |25                    |
|cc           |8                |8                     |
|center       |17               |17                    |
|ceo          |70               |70                    |
|chat         |25               |25                    |
|cheap        |23               |23                    |
|church       |28               |28                    |
|city         |17               |17                    |
|claims       |46               |46                    |
|cleaning     |42               |42                    |
|clinic       |42               |42                    |
|clothing     |23               |23                    |
|cloud        |15               |15                    |
|club         |12               |12                    |
|co           |24               |24                    |
|coach        |42               |42                    |
|codes        |42               |42                    |
|coffee       |25               |25                    |
|college      |45               |45                    |
|com          |9.59             |9.59                  |
|com.co       |8                |8                     |
|community    |25               |25                    |
|company      |10               |10                    |
|compare      |22               |22                    |
|computer     |25               |25                    |
|condos       |38               |38                    |
|construction |25               |25                    |
|consulting   |30               |30                    |
|contact      |9                |9                     |
|contractors  |23               |23                    |
|cooking      |22               |22                    |
|cool         |25               |25                    |
|co.uk        |4.94             |4.94                  |
|coupons      |38               |38                    |
|credit       |75               |75                    |
|creditcard   |125              |125                   |
|cricket      |19.98            |19.98                 |
|cruises      |38               |38                    |
|dad          |10               |10                    |
|dance        |18               |18                    |
|date         |4.98             |3.98                  |
|dating       |42               |42                    |
|day          |8                |8                     |
|deals        |25               |25                    |
|degree       |32               |32                    |
|delivery     |38               |38                    |
|democrat     |23               |23                    |
|dental       |45               |45                    |
|dentist      |40               |40                    |
|design       |40               |40                    |
|dev          |10               |10                    |
|diamonds     |38               |38                    |
|digital      |27               |27                    |
|direct       |25               |25                    |
|directory    |17               |17                    |
|discount     |21.5             |21.5                  |
|doctor       |80               |80                    |
|dog          |41               |41                    |
|domains      |28               |28                    |
|download     |4.98             |3.98                  |
|education    |21.5             |21.5                  |
|email        |19               |19                    |
|energy       |75               |75                    |
|engineer     |25               |25                    |
|engineering  |42               |42                    |
|enterprises  |25               |25                    |
|equipment    |16               |16                    |
|esq          |20               |20                    |
|estate       |25               |25                    |
|events       |25               |25                    |
|exchange     |25               |25                    |
|expert       |42               |42                    |
|express      |25               |25                    |
|fail         |25               |25                    |
|faith        |9.98             |9.98                  |
|family       |23               |23                    |
|fans         |50               |50                    |
|farm         |25               |25                    |
|fashion      |22               |22                    |
|finance      |41               |41                    |
|financial    |38               |38                    |
|fish         |28               |28                    |
|fishing      |22               |22                    |
|fit          |22               |22                    |
|fitness      |25               |25                    |
|flights      |38               |38                    |
|florist      |23               |23                    |
|fm           |85               |85                    |
|foo          |10               |10                    |
|football     |17               |17                    |
|forex        |30               |30                    |
|forsale      |23               |23                    |
|foundation   |21.5             |21.5                  |
|fun          |25               |25                    |
|fund         |42               |42                    |
|furniture    |80               |80                    |
|futbol       |9                |9                     |
|fyi          |15               |15                    |
|gallery      |17               |17                    |
|games        |20               |20                    |
|garden       |22               |22                    |
|gifts        |23               |23                    |
|gives        |21.5             |21.5                  |
|glass        |41               |41                    |
|gmbh         |25               |25                    |
|gold         |75               |75                    |
|golf         |42               |42                    |
|graphics     |17               |17                    |
|gratis       |14               |14                    |
|green        |52.5             |52.5                  |
|gripe        |21.5             |21.5                  |
|group        |14               |14                    |
|guide        |25               |25                    |
|guru         |27               |27                    |
|haus         |21.5             |21.5                  |
|health       |50               |50                    |
|healthcare   |46               |46                    |
|hockey       |38               |38                    |
|holdings     |42               |42                    |
|holiday      |41               |41                    |
|horse        |22               |22                    |
|hospital     |41               |41                    |
|host         |65               |65                    |
|house        |28               |28                    |
|how          |20               |20                    |
|immo         |21.5             |21.5                  |
|immobilien   |21.5             |21.5                  |
|industries   |28               |28                    |
|info         |17.5             |17.5                  |
|ink          |19               |19                    |
|institute    |18               |18                    |
|insure       |41               |41                    |
|international|20               |20                    |
|investments  |80               |80                    |
|io           |45               |45                    |
|irish        |14               |14                    |
|jetzt        |14               |14                    |
|jewelry      |42               |42                    |
|kaufen       |23               |23                    |
|kim          |15               |15                    |
|kitchen      |41               |41                    |
|land         |25               |25                    |
|lawyer       |40               |40                    |
|lease        |38               |38                    |
|legal        |45               |45                    |
|lgbt         |43               |43                    |
|life         |24               |24                    |
|lighting     |17               |17                    |
|limited      |23               |23                    |
|limo         |38               |38                    |
|live         |21               |21                    |
|loan         |4.98             |3.98                  |
|loans        |75               |75                    |
|love         |20               |20                    |
|ltd          |19               |19                    |
|luxe         |15               |15                    |
|maison       |38               |38                    |
|management   |16               |16                    |
|market       |28               |28                    |
|marketing    |28               |28                    |
|markets      |11               |11                    |
|mba          |25               |25                    |
|media        |28               |28                    |
|memorial     |35.5             |35.5                  |
|men          |4.98             |3.98                  |
|me.uk        |4.94             |4.94                  |
|miami        |12               |12                    |
|mobi         |22               |22                    |
|moda         |21.5             |21.5                  |
|money        |25               |25                    |
|mortgage     |40               |40                    |
|mov          |10               |10                    |
|movie        |215              |215                   |
|net          |11.66            |11.66                 |
|net.co       |8                |8                     |
|network      |21.5             |21.5                  |
|new          |400              |400                   |
|news         |21               |21                    |
|nexus        |10               |10                    |
|ninja        |21               |21                    |
|nom.co       |8                |8                     |
|observer     |9                |9                     |
|online       |25               |25                    |
|org          |9.93             |7.32                  |
|org.uk       |4.94             |4.94                  |
|page         |8                |8                     |
|partners     |46               |46                    |
|parts        |25               |25                    |
|party        |4.98             |3.98                  |
|pet          |16               |16                    |
|phd          |20               |20                    |
|photography  |23               |23                    |
|photos       |17               |17                    |
|pictures     |9                |9                     |
|pink         |15               |15                    |
|pizza        |42               |42                    |
|place        |14               |14                    |
|plumbing     |38               |38                    |
|plus         |25               |25                    |
|press        |49               |49                    |
|pro          |17.5             |17.5                  |
|productions  |25               |25                    |
|prof         |20               |20                    |
|promo        |16               |16                    |
|properties   |25               |25                    |
|pub          |25               |25                    |
|racing       |9.98             |9.98                  |
|realty       |280              |280                   |
|recipes      |42               |42                    |
|red          |15               |15                    |
|rehab        |25               |25                    |
|reise        |66               |66                    |
|reisen       |14               |14                    |
|rent         |45               |45                    |
|rentals      |25               |25                    |
|repair       |25               |25                    |
|report       |16               |16                    |
|republican   |25               |25                    |
|rest         |25               |25                    |
|restaurant   |41               |41                    |
|review       |9.98             |9.98                  |
|reviews      |40               |40                    |
|rip          |15               |15                    |
|rocks        |13               |13                    |
|rodeo        |7                |7                     |
|rsvp         |8                |8                     |
|run          |17               |17                    |
|sale         |25               |25                    |
|salon        |41               |41                    |
|sarl         |21.5             |21.5                  |
|school       |25               |25                    |
|schule       |16               |16                    |
|science      |9.98             |9.98                  |
|security     |2000             |2000                  |
|select       |22               |22                    |
|services     |25               |25                    |
|shoes        |41               |41                    |
|shopping     |23               |23                    |
|show         |28               |28                    |
|singles      |23               |23                    |
|site         |25               |25                    |
|soccer       |16               |16                    |
|social       |25               |25                    |
|software     |25               |25                    |
|solar        |40               |40                    |
|solutions    |20               |20                    |
|soy          |18               |18                    |
|space        |20               |20                    |
|storage      |500              |500                   |
|store        |40               |40                    |
|stream       |4.98             |3.98                  |
|studio       |24               |24                    |
|style        |25               |25                    |
|supplies     |16               |16                    |
|supply       |16               |16                    |
|support      |18               |18                    |
|surf         |22               |22                    |
|surgery      |35.5             |35.5                  |
|systems      |21               |21                    |
|tax          |46               |46                    |
|taxi         |42               |42                    |
|team         |23               |23                    |
|tech         |40               |40                    |
|technology   |20               |20                    |
|tennis       |43               |43                    |
|theater      |41               |41                    |
|theatre      |500              |500                   |
|tienda       |41               |41                    |
|tips         |21               |21                    |
|tires        |70               |70                    |
|today        |18               |18                    |
|tools        |23               |23                    |
|tours        |41               |41                    |
|town         |23               |23                    |
|toys         |41               |41                    |
|trade        |4.98             |3.98                  |
|trading      |13               |13                    |
|training     |25               |25                    |
|tv           |25               |25                    |
|uk           |4.94             |4.94                  |
|university   |40               |40                    |
|us           |6.5              |6.5                   |
|vacations    |25               |25                    |
|ventures     |38               |38                    |
|vet          |27               |27                    |
|viajes       |35               |35                    |
|video        |25               |25                    |
|villas       |35.5             |35.5                  |
|vin          |41               |41                    |
|vip          |12               |12                    |
|vision       |25               |25                    |
|vodka        |22               |22                    |
|voyage       |38               |38                    |
|watch        |28               |28                    |
|webcam       |9.98             |9.98                  |
|website      |20               |20                    |
|wedding      |22               |22                    |
|wiki         |19               |19                    |
|win          |4.98             |3.98                  |
|wine         |38               |38                    |
|work         |7                |7                     |
|works        |25               |25                    |
|world        |25               |25                    |
|wtf          |23               |23                    |
|xyz          |10               |10                    |
|yoga         |22               |22                    |
|zone         |25               |25                    |


### Disclaimer & Credits

- By "we," "us," or "our," I refer to myself (not a collective "we"), as this repository is for my personal use.
- This repository is primarily for my personal use, hosted here for easy access. No guarantees are made. I do not intend any harm or misuse of the underlying sources of information.
- I cannot vouch for the accuracy of any of the provided information. It is provided as-is.
- This repository was inspired by and borrowed a lot of useful information from this (now removed) repository: [judge2020/Actual-Domain-Prices](https://github.com/judge2020/Actual-Domain-Prices).

# Outdated Stuff

<details>
<summary>Outdated stuff</summary>

Below are some outdated info, these are from early days when I created this repo.

## Pricing List
- https://docs.google.com/spreadsheets/d/1ir4dNM_BYajBzBMELzd4PDIkuNW4eB1y7p271JIwW5I/edit?usp=sharing
- Or Sort by cheapest: 
    - https://docs.google.com/spreadsheets/d/1ir4dNM_BYajBzBMELzd4PDIkuNW4eB1y7p271JIwW5I/edit#gid=963044171 (mobile friendly)
    - https://docs.google.com/spreadsheets/d/1ir4dNM_BYajBzBMELzd4PDIkuNW4eB1y7p271JIwW5I/edit#gid=0&fvid=273180247 (desktop only, Gsheet filter-view only works on Gsheet desktop)
- Or [click here](/domain_prices.csv) to visit Github's CSV viewer, which also have search feature!

## Mechanism
- It scrap pricing information from this repo: `https://github.com/judge2020/Actual-Domain-Prices/` which is compiled by @judge2020 from Cloudflare API.
- it scrap pricing information from : `https://domaincostclub.com/pricing.dhtml`
- it use Google Spreadsheet to present the tabular data. 
- It use Google Spreadhseet capability to use Google App Script, as backend/engine to scrap the data. 
    - So I can trigger it easily from GSheet, without any dedicated backend.
    - Yes I aim to be as backendless as possible, leveraging any off-the-shelf popular free online service, like Google App Script.
- Due to its scraping nature, it may break someday if the data source introduce significant changes.
- UPDATE: potential issue:
    - The HTTP proxy used on that script seems to be dead.
    - The repo mentioned on 1st point seems to be deleted.
    - So the script is no longer working. Checkout [this folder](./scrap-cloudflare-domain-pricing/) instead.

## Other
- The Google App Script based script is available as: `scrapPrices.js` in the repo.
    - If you want to use it on your own GSheet, here's the step:
        - Create new Google Spreadhseet
        - Click on toolbar `tools > script editor`
        - Paste the script, save.
        - Refresh your browser tab that open the Gsheet.
        - You now will find on toolbar `extra menu > Scrap Domain Prices`
        - You may be asked for permission to execute it. Allow it.
- The scraped pricing data is exported as `.csv` in the repo (although not realtime updated, please visit the GSheet URL for most updated one)

## TODO
- create simple Html/web frontend interface to easily sort/search the table.

## Credits
- This project is inspired and built on top of: `https://github.com/judge2020/Actual-Domain-Prices/`
- DomainCostClub public pricing
- Google App Script & Google Spreadhseet

## Disclaimer
- On Cloudflare data source, read [disclaimer stated by `judge2020` here](https://github.com/judge2020/Actual-Domain-Prices/#disclaimer)
- On DomainCostClub data source, they [said](https://www.domaincostclub.com/pricing.dhtml): `Our Pricing. No Markup, Ever. ... Domain Cost Club Members are guaranteed at-cost pricing.`
    - Though we can't be 100% sure with their claim.
- On some domains that is found within both sources, there are some price differences between DomainCostClub pricing (seems more expensive) & Cloudflare. Maybe DCC still markup the domain price ??? or they used different pricing source, etc.

</details>
