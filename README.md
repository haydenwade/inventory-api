# inventory-api

ASK CLI - `ask new` unauthorized
https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-6
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser //previously undefined

# Steps
## Option 1: setting up a new api with json requests and responses (json is a must for alexa and will make your life easier)
1. Create new repo under your account, call it `some-api`
2. Clone repo locally
3. Copy all folders and files from this repo to the `some-api` repo expect `/models` and `/lambda`
4. deploy to heroku (create new app, link to github repo, deploy)
5. test to make sure running on your heroku instance using postman with example requests in `/app/index.js`
6. Refactor `some-api` to read and write to your mongodb - modify `/app/index.js` and install neccessary npm packages

## Option 2: enable json in existing api, remove authentication, host on heroku (could be additional work here just not sure what i don't know yet)


## setting up alexa skill
1. Create a new skill using ask cli
2. copy over the code from `/lambda/custom/index.js`,`/lambda/custom/repository.js` (this repo) to your skills associated files
3.  `cd lambda/custom` then do `npm install --save request request-promise`
4. copy `/models/en-US.json`from this repo to your new skill
5. ask deploy
