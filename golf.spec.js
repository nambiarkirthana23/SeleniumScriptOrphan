const { By, Builder, WebElementCondition, until } = require('selenium-webdriver');
const assert = require("assert");

(async function golfTest() {
    let driver;
    try {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://admlucid.com/Golf');

        await driver.manage().setTimeouts({ implicit: 500 });
        await driver.manage().window().maximize();


    } catch (error) {
        console.log(error);
    } finally {
        await driver.quit();
    }
}());
