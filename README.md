# N4O Main website

A simple landing page that hotlinks into most of my subdomain and other owned domains.

Deployed Website: [n4o.xyz](https://n4o.xyz/)<br>
Hosted with [Cloudflare Pages](https://pages.cloudflare.com/)

This use a custom-made generators that fit my needs.

**Process:**
- It read the main index templates
- Get all `keys` files
- Replace the template location with the `keys` found.
- Minify the resulting index file.
- Copy all assets to public folder and save the index to public folder too

## Acknowledgements
This website use some part of Bootstrap 5 CSS, it was pulled from bootstrap file via Chrome Coverages to the one needed for fast loading.

The generator use the help of [`shelljs`](https://www.npmjs.com/package/shelljs) to help with files copying and [`html-minifier`](https://www.npmjs.com/package/html-minifier) to minify the result.