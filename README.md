# Phronesis West Africa

## Deploying to cPanel with GitHub Actions

This project uses Vite, so production builds are generated in `dist/`. The workflow at `.github/workflows/deploy-cpanel.yml` runs automatically whenever code is pushed to the `main` branch, builds the app with `npm run build`, and uploads only the final build output to cPanel by FTP.

Add these GitHub repository secrets before using the workflow:

- `CPANEL_FTP_SERVER`: `ftp.example.com`
- `CPANEL_FTP_USERNAME`: cPanel FTP username
- `CPANEL_FTP_PASSWORD`: cPanel FTP password
- `CPANEL_FTP_SERVER_DIR`: `./public_html/`

Create them in GitHub at `Repository Settings → Secrets and variables → Actions → New repository secret`.

Because the app uses React Router with browser history, `public/.htaccess` is included so Apache/cPanel rewrites unknown routes to `index.html` instead of returning a 404 on page refresh.
