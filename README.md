# hunter-pizzeria

A simple react/node product as a task for internship selection process

## Install node & yarn
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
sudo apt install nodejs
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

## Install yarn dependencies
```
yarn install
```
## To start and load the front-end app.
```
yarn start
```
You will be able to access the app on http://localhost:4000

## To start and load the front-end app in webpack-dev server
```
yarn serve
```
Do not forget to do the `yarn start` first

You will be able to access the app on http://localhost:8080
