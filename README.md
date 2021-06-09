# Gatsby Template
This is an opinionated Gatsby template using Google Spreadsheet as a CMS. 

## Stack
- Material UI
- Styled Component
- TailwindCSS
- Google Spreadsheet
- CI/CD with Github Actions
- Deploy on Github Pages

## Get started

```shell
# prepare environment
cp .env.sample .env

# Install dependencies and start
yarn && yarn start
```

### Use your own Google Spreadsheet
1. Copy this [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1pWhu5uB4QnzWf899OUnethUJFsWdaDn-P_3-DOZomKw/edit?usp=sharing)
2. Click `File` > `Publish to the Web`
3. Select `Entire Document` and `Comman-separated values(.csv)`
4. Replace the value `LOCALE_GSPREADSHEET_PUBLISHED_URL` at `.env` with the link 
