const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file:///Users/aurum/Downloads/简历/Product%20Manager-Jing-CV.pdf');
  await page.waitForTimeout(2000);
  const text = await page.$eval('body', el => el.textContent);
  console.log(text);
  await browser.close();
})();
