const USERNAME = "";
const PASSWORD = "";
const POST_URL = "";

let profilesToMention = [];



const puppeteer = require("puppeteer");

let browser, page, comments = 0;

(async function main() {

	browser = await puppeteer.launch({
		headless: false,
		defaultViewport: null,
		args: ["--start-maximized", "--no--sandbox", "--disable--setuid--sandbox"]
	});

	page = (await browser.pages())[0];

	await login();
	await comment();
})();



async function login() {
	await page.goto("https://www.instagram.com/", { waitUntil: "domcontentloaded" });

	console.log(`\nConnecting...`);

	await typeIn("input[name='username']", USERNAME);
	await typeIn("input[name='password']", PASSWORD);
	await clickAt("button[type='submit']");
	await page.waitForSelector("span[class='TqC_a']");

	console.log("\nLogged in!");
}



async function comment() {
	await page.goto(POST_URL, { waitUntil: "domcontentloaded" });

	console.log(`\nBot started!`);

	while (true) {
		let text = await pickProfiles();

		await typeIn("textarea[class='Ypffh']", text);
		await clickAt("button[type='submit']");

		comments++
		console.log(`\nComments: ${comments}\n${text}`);

		let randomInterval = 40 + Math.round(Math.random() * 40);

		await sleep(randomInterval);
	}
}



async function pickProfiles() {
	while (true) {
		let randomIndex1 = Math.floor(Math.random() * profilesToMention.length);
		let randomIndex2 = Math.floor(Math.random() * profilesToMention.length);

		let profile1 = profilesToMention[randomIndex1];
		let profile2 = profilesToMention[randomIndex2];
		
		if (profile1 !== profile2) {
			return `@${profile1} @${profile2}`;
		}
	}
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
	milliseconds = seconds * 1000;

	return new Promise((resolve) => {
		setTimeout(resolve, milliseconds);
	});
}
