### Description
Updated (June 2023) [Cloudflare TLDs domain pricing dump](./cloudflare-domain-pricing-dump.csv) from Cloudflare registrar API.

Sorry, I'm a bit ~~too lazy~~ busy ~~enjoying my life~~ right now to update the main repo. So for now I'll just create this new folder and dump this & some scripts that I used. Maybe someday I'll update the main repo (or maybe someone else will open some PR? haha).

### Scripts
- Use the [dump-cloudflare-domain-pricing.js](./scripts/dump-cloudflare-domain-pricing.js) to dump the pricing data.
    - TLD name list/array is hardcoded, it will be outdated as time goes by, use [scrap-cloudflare-domain-pricing/scripts/scrap-cloudflare-supported-tlds-from-table.js](./scripts/scrap-cloudflare-supported-tlds-from-table.js) to get the TLD name list to be pasted to the main script.
