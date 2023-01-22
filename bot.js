const USERNAME = "";
const PASSWORD = "";
const POST_URL = "";
const MENTIONS = 2;

let profilesToMention = ["@usuario1", "@usuario2", "@usuario3", "@usuario4"];

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

  await sleep(5);

  console.log(`\nBot started!`);

  while (true) {
    const textarea = await page.$("textarea[autocomplete='off'][autocorrect='off']");
    const textareaContent = await page.evaluate((textarea) => textarea.value, textarea);

    if (textareaContent !== "") {
      console.log("O limite de comentários foi atingido!");

      return;
    }

    let comment = await pickProfiles();

    await typeIn("textarea[autocomplete='off'][autocorrect='off']", comment);
    await clickAt(
      "div[class='x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x1lku1pv x1a2a7pz x6s0dn4 xjyslct x1ejq31n xd10rxx x1sy0etr x17r0tee x9f619 x1ypdohk x1i0vuye xwhw2v2 xl56j7k x17ydfre x1f6kntn x2b8uid xlyipyv x87ps6o x14atkfc x1d5wrs8 x972fbf xcfux6l x1qhh985 xm0m39n xm3z3ea x1x8b98j x131883w x16mih1h xt0psk2 xt7dq6l xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 xjbqb8w x1n5bzlp x173jzuc x1yc6y37']"
    );

    comments++;
    console.log(`\nComments: ${comments}\n${comment}`);

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
