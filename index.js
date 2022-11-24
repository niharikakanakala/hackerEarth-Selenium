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
      await driver.get("https://www.google.com");
      await driver.findElement(By.name("q")).click();
      await driver
        .findElement(By.name("q"))
        .sendKeys("wikipedia");
       await driver.findElement(By.name("btnK")).click(); 
      let text = await driver
        .wait(until.elementLocated(By.id("result-stats")), 10000)
        .getText();
      await driver.wait(until.elementLocated(By.id("rcnt")), 10000);
      await driver.findElement(By.name("q")).clear();
      let title = await driver.getTitle();
      let linkLocator = await driver.findElement(By.tagName("cite"));

      let url = await linkLocator[0].getText();
     
      console.log(url);

      let answer = {
          title: title,
          text: text,
          url: url,
      };

      return answer;
          
  }

  async function Wikipedia() {
    await driver.get("https://www.wikipedia.org/");
    let input = await driver.findElement(By.id("searchInput"));
    await input.sendKeys("hacker earth", Key.RETURN);
    await driver.sleep(5000);
    let text = await driver
        .wait (until.elementLocated(By.id("content")), 5000)
        .getText();
     await driver.wait(until.elementLocated(By.id("results-info")), 5000);
    await driver.findElement(By.id("searchInput")).clear();
    let title = await driver.getTitle();
    let url = await driver.findElement(By.title("HackerEarth"))
    .getText();
    console.log(url);

    let answer = {
        text: text,
        title: title,
        url: url
    };

    return answer;
  }

  async function HackerEarth() {
      await driver.get("https://en.wikipedia.org/wiki/HackerEarth");
      await driver.findElement(By.xpath("/html/body/div[3]/div[3]/div[5]/div[1]/table[2]/tbody/tr[8]/td/span/a"))
      .click();
      await driver.sleep(5000);
      let title = await driver.getTitle();
      let url = await driver.getCurrentUrl();
      return { title, url, driver };
  }
  
  module.exports = { Google, Wikipedia, HackerEarth }

  