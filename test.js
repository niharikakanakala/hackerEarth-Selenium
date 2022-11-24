require("chromedriver");
const assert = require("assert");
const { Builder, Key, By, until } = require("selenium-webdriver");
//import the selenium web driver
const chrome = require("selenium-webdriver/chrome");
const service = new chrome.ServiceBuilder("./chromedriver1eebc8c");
const firefox = require("selenium-webdriver/firefox");
const screen = {
  width: 1400,
  height: 1000,
};
var indexFunctions = require("./index");

describe("Tests", function () {
    it("Google Test", async function () {
        let abc = await indexFunctions.Google();
        console.log(abc);
        assert.equal("wikipedia - Google Search", abc.title, "Error");
        assert.equal("A", abc.text[0], "Error");
        assert.equal('https://www.google.com', abc.url, "Error");
    });

    it("Wikipedia Test", async function () {
        let abc = await indexFunctions.Wikipedia();
        console.log(abc);
        assert.equal("hacker earth - Search results - Wikipedia", abc.title, "Error");
        assert.equal("hacker earth", abc.text, "Error");
        assert.equal("https://www.wikipedia.org/", abc.url, "Error");
    });

    it("link", async function() {
        let abc = await indexFunctions.HackerEarth();
        console.log(abc);
        assert.equal("HackerEarth | Online coding platform and developer assessment software", abc.title, "Error");
        assert.equal("https://en.wikipedia.org/wiki/HackerEarth",abc.url, "Error");

    });
})



// after(() => driver && driver.quit());