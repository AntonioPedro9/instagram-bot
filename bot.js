const USERNAME = "";
const PASSWORD = "";
const POST_URL = "";
const MENTIONS = 2;

let profilesToMention = [];

const puppeteer = require("puppeteer");

let browser,
  page,
  comments = 0;

(async function main() {
  browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized", "--no--sandbox", "--disable--setuid--sandbox"],
  });

  page = (await browser.pages())[0];

  await login();
  await comment();
})();

async function login() {
  await page.goto("https://www.instagram.com/", {
    waitUntil: "domcontentloaded",
  });

  console.log(`Connecting...`);

  await typeIn("input[name='username']", USERNAME);
  await typeIn("input[name='password']", PASSWORD);
  await clickAt("button[type='submit']");
  await sleep(5);

  console.log("\nLogged in!");
}

async function comment() {
  await page.goto(POST_URL, { waitUntil: "domcontentloaded" });

  console.log(`\nBot started!`);

  while (true) {
    let text = await pickProfiles();

    await typeIn("textarea[class='Ypffh']", text);
    await clickAt("button[type='submit']");

    comments++;
    console.log(`\nComments: ${comments}\n${text}`);

    let randomInterval = 40 + Math.round(Math.random() * 40);

    await sleep(randomInterval);
  }
}

async function pickProfiles() {
  var comment = "";

  let i = 0;

  while (i < MENTIONS) {
    let randomIndex = Math.floor(Math.random() * profilesToMention.length);
    let currentProfile = profilesToMention[randomIndex];

    if (!comment.includes(currentProfile)) {
      comment += currentProfile + " ";
      i++;
    }
  }

  return comment;
}

async function clickAt(element) {
  await page.waitForSelector(`${element}`);
  await page.click(`${element}`);
}

async function typeIn(element, text) {
  await page.waitForSelector(`${element}`);
  await page.type(`${element}`, text, { delay: 100 });
}

async function sleep(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}
