# Phronesis West Africa

## Deploying to cPanel with GitHub Actions

This project uses Vite, so production builds are generated in `dist/`. The workflow at `.github/workflows/deploy-cpanel.yml` runs automatically whenever code is pushed to the `main` branch, builds the app with `npm run build` on Node.js 22, and uploads only the final build output to cPanel by FTP.

Add these GitHub repository secrets before using the workflow:

- `CPANEL_FTP_SERVER`: `ftp.example.com`
- `CPANEL_FTP_USERNAME`: cPanel FTP username
- `CPANEL_FTP_PASSWORD`: cPanel FTP password
- `CPANEL_FTP_SERVER_DIR`: `./public_html/`

Create them in GitHub at `Repository Settings → Secrets and variables → Actions → New repository secret`.

Tips for the FTP values:

- `CPANEL_FTP_SERVER` should be only the host name or server IP, not a URL and not a path. Examples: `ftp.example.com`, `server123.host.com`, `203.0.113.10`.
- `CPANEL_FTP_SERVER_DIR` is the remote folder relative to the FTP account's login root. If the FTP account is already restricted to the site's document root, use `./` instead of repeating the folder name.

Because the app uses React Router with browser history, `public/.htaccess` is included so Apache/cPanel rewrites unknown routes to `index.html` instead of returning a 404 on page refresh.
