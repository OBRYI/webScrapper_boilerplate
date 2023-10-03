const puppeteer = require('puppeteer')

const initURL = "https://obryi.github.io/blog/pcr/"

async function start() {
    const browser = await puppeteer.launch({
        headless: "false"
    })
    const page = await browser.newPage();
    page.goto(initURL)
}