# Instagram Bot

An application built using Node.js and [Puppeteer](https://pptr.dev/) to automate tagging in Instagram giveaways.
<br>
The bot can perform approximately 1.400 tags within 24 hours.

## How to use

In the `bot.js` file, fill in the following information:

```
const USERNAME = ""; // Instagram username
const PASSWORD = ""; // Instagram password
const POST_URL = ""; // URL of the giveaway post
const MENTIONS = 2;  // Number of people to tag per comment
```

Next, add the usernames of the people you want to tag in the post, for example:

```
let profilesToMention = ["@user1", "@user2", "@user3", "@user4"];
```

## Running the Application

Inside the repository folder, run the following commands:

```
$ npm install
$ npm start
```
