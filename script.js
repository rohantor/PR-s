const puppeteer = require('puppeteer');

const browserConfig = {
  headless: false,
  executablePath: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome',
  userDataDir: '/Users/nikhilkamble/Library/Application\ Support/Google/Chrome/Profile\ 3/',
};

const Repos = [
  "https://github.com/TorinitTechnologies/RAHR_Academy_Events_Backend",
  "https://github.com/TorinitTechnologies/RAHR_PreCon_Backend",
  "https://github.com/TorinitTechnologies/RAHR_BACKEND_REPORTS",
  "https://github.com/orgs/TorinitTechnologies/repositories?q=RAHR&type=all&language=javascript&sort=",
  "https://github.com/TorinitTechnologies/RAHR_Academy_Courses_Backend",
  "https://github.com/TorinitTechnologies/RAHR_TaskManagement_Backend",
  "https://github.com/TorinitTechnologies/RAHR_TeamManagement_Backend",
  "https://github.com/TorinitTechnologies/RAHR_Banners_Backend",
  "https://github.com/TorinitTechnologies/RAHR_MentorManagement_Backend",
  "https://github.com/TorinitTechnologies/RAHR_ContactManagement_Backend"
];

(async () => {
  const browser = await puppeteer.launch(browserConfig);
  const args = process.argv.slice(2); // Get command-line arguments
  if (args.length !== 2) {
    console.log('Usage: node script.js dev qa');
    await browser.close();
    return;
  }

  for (const repo of Repos) {
    console.log(`${repo}/compare/${args[0]}...${args[1]}`);
    await visitPage(browser, `${repo}/compare/${args[1]}...${args[0]}`);
  }

})();

async function visitPage(browser, url) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(url);

}
