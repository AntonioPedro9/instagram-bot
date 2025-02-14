# Instagram Bot

An application built using Node.js and [Puppeteer](https://pptr.dev/) to automate tagging in Instagram giveaways.
<br>
The bot can perform approximately 1.400 tags within 24 hours.

## How to use

In `bot.js` file, fill in the following information:

```
const USERNAME = ""; // Instagram username
const PASSWORD = ""; // Instagram password
const POST_URL = ""; // URL of the giveaway post
const NUMBER_OF_PROFILES_TO_MENTION MENTIONS = 2;
```

Next, add the username of the profiles you want to tag in the post, for example:

```
let profilesList = ["@user1", "@user2", "@user3", "@user4"];
```

## Running the Application

Inside the repository folder, run the following commands:

```
$ npm install
$ npm start
```
