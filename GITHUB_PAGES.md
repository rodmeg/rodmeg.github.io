# GitHub Pages publication instructions

This directory is a buildless static website. `index.html`, `site.css`, and `site.js` are at the repository root, so no framework build or generated `dist/` folder is needed.

## Before enabling Pages

1. Review the site and all markdown files for public-safe content.
2. Capture and approve synthetic-data screenshots using [`ASSET_REVIEW_CHECKLIST.md`](ASSET_REVIEW_CHECKLIST.md).
3. Replace the pending-contact label only after choosing a public contact method.
4. Confirm the GitHub account is `rodmeg` and the public repository name is `rodmeg.github.io`.
5. Keep Acorda source in the separate private `rodmeg/acorda-android` repository. Do not add a source link to this site.

## URL and repository name

The approved target is the account site repository `rodmeg/rodmeg.github.io`, served from `https://rodmeg.github.io/`. Keep website assets and links relative to the repository root so they also work at the domain root.

## Enable GitHub Pages

After the Product Owner authorizes the first push and the public repository exists:

1. Open `rodmeg/rodmeg.github.io` on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/(root)`, then save.
5. Wait for the Pages deployment to complete. The expected account-site URL is `https://rodmeg.github.io/`; verify it in the repository's Pages settings before sharing it.
6. Check the home page, Acorda and Drop & Route perspective links, gallery/checklist links, mobile navigation, and the image viewer after adding approved images.

The website is not deployed, and the GitHub repository has not been created by this preparation. Before publication, confirm a valid `gh` login for `rodmeg` and that the target repository is available.
