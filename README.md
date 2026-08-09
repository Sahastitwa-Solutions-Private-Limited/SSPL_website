# Sahastitwa Solutions — logo-theme one-page website

This is the brighter logo-theme variant of the lightweight, non-technical coming-soon website. It uses Sahastitwa's royal blue, leaf green, energy gold and white more prominently. It presents the broader vision for energy harvesting, storage and reliable sustainable access while intentionally avoiding product architecture or intellectual-property disclosures. It does not require Node.js, a database, or a build command.

The site now includes:

- `index.html` — energy-vision landing page.
- `custom-solutions.html` — custom engineering services, collaboration approach and portfolio structure.

## Before publishing

1. Open `index.html` and replace `contact@sahastitwasolutions.com` with the company's working email address.
2. Review founder names and public claims.
3. If you have a transparent, high-resolution logo, replace `assets/sahastitwa-logo.png` using the same filename.
4. Double-click `index.html` to preview it locally.

## Publish with GitHub Pages

1. Create a new public GitHub repository, for example `sahastitwa-website`.
2. Upload **the contents of this folder** to the repository root. `index.html` must be at the top level.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then click **Save**.
6. GitHub will provide a URL similar to `https://YOUR-USERNAME.github.io/sahastitwa-website/`.

## Connect a custom domain

GitHub Pages can host the website, but Wix must continue to manage only the domain/DNS.

1. In **GitHub → repository Settings → Pages**, enter your preferred domain under **Custom domain**. Using `www.yourdomain.com` is usually easiest.
2. In Wix, open **Domains → your domain → Advanced → Manage DNS records**.
3. Add a `CNAME` record:
   - Host name: `www`
   - Value: `YOUR-USERNAME.github.io`
4. To make the root domain (`yourdomain.com`) work, add these four GitHub Pages `A` records for host `@`:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
5. Return to GitHub Pages after DNS propagation and enable **Enforce HTTPS**.

DNS changes can take several hours and GitHub advises allowing up to 24 hours for propagation. Confirm GitHub's current custom-domain instructions before changing DNS because platform values can change.

## Important Wix limitation

Pointing the domain to GitHub Pages means Wix will no longer host the public website on that domain. Your Wix subscription and editor remain separate. If you want to keep Wix as the host, recreate this design in the Wix editor instead of changing DNS to GitHub.
