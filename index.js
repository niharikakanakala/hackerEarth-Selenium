require("chromedriver");
const { Console, timeEnd } = require("console");
const {
    Builder,
    Key,
    By,
    until,
    WebDriver,
    WebElement
} = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");
//import selenium web driver
const chrome = require("selenium-webdriver/chrome");
const service = new chrome.ServiceBuilder("./chromedriver");
const firefox = require("selenium-webdriver/firefox");
const { waitForUrl } = require("selenium-webdriver/http/util");

const screen = {
    width: 1400,
    height: 1000,
  };

before(async function () {
    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(
        new chrome.Options()
        //   .addArguments("--headless")
          .addArguments("--no-sandbox")
          .addArguments("--disable-dev-shm-usage")
          .windowSize(screen)
      )
      .setChromeService(service)
      .setFirefoxOptions(new firefox.Options().headless().windowSize(screen))
      .build();
  });

  async function Google() {

    /*
    Load https://google.com in the WebDriver
    Programmatically type "wikipedia" in the searchBar and submit
    Return the text got by Element by ID "result-stats" in the answer.text object
    Return the title of the WebPage in answer.title object
    Return the first link found in Google Search in answer.url object (Hint: tagName = "cite")
    */
      
          
  }

  async function Wikipedia() {

    /*
    Load https://www.wikipedia.org/ in the WebDriver
    Programmatically type "hacker earth" in the searchBar and submit
    Return the text got by Element by ID "content" in the answer.text object
    Return the title of the WebPage in answer.title object
    Return the link by title "HackerEarth" found in Wikipedia Search in answer.url object 
    */
  }

  async function HackerEarth() {
    
    /*
    Load https://en.wikipedia.org/wiki/HackerEarth in the WebDriver
    Programmatically find the element by xpath "/html/body/div[3]/div[3]/div[5]/div[1]/table[2]/tbody/tr[8]/td/span/a" and click.
    Return the title of the WebPage in answer.title object
    Return the current URL with answer.url object
    */
  }
  
  after (() => driver && driver.quit());
  
  module.exports = { Google, Wikipedia, HackerEarth }

  