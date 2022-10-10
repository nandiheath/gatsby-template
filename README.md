# Gatsby Exemplar
A simple blog that built on Gatsby with typescript. 
Aim to provide an easy way to start a web project which has everything automatic and 100% free! 

## Stack
- [Material UI](https://mui.com/material-ui/getting-started/overview/) - UI component framework for React
- [Emotion](https://emotion.sh/docs/introduction) - For writing inline CSS style with Javascript 
- [TailwindCSS](https://tailwindcss.com/) - Provide utilities for CSS classes
- Eslint/Prettier - Linting and opinionated formatting
- Github Actions - CI/CD pipelines
- Github Pages - Free hosting

## Get started

```shell
# prepare environment
cp .env.sample .env

# Install dependencies and start
yarn && yarn develop
```

## Deploying with Custom Domain

Update the configuration in `.github/workflows/deploy.yaml`

```yaml
  steps:
  - name: 🚜 Building
    run: yarn build
    env:
      # Update this to your host name
      SITE_URL: https://web.myhost.com
  - name: 🚢 Deploying to Github Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        # uncomment `cname` and change this to your host name
        cname: web.myhost.com
```

Configure your DNS service following [the guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain),
which most of the case will be configuring a `CNAME` record pointing to `<user>.github.io`

Once the changes are committed to the `main` branch this will automatically trigger Github Actions to build and release to Github Pages,
and you can navigate to your host name e.g. `https://web.myhost.com` to browse your web! 
