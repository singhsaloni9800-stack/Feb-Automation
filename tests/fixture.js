const { test } = require('@playwright/test')

// base.extend() is how you ADD your own fixtures to Playwright
const test = base.extend({

    // 'saucePage' is your custom fixture name
    // you'll use it like { saucePage } in your tests
    saucePage: async ({ page }, use) => {

        // SETUP — runs before test
        await page.goto('https://www.saucedemo.com')

        // USE — passes page to the test
        await use(page)

        await page.context().clearCookies()

        // TEARDOWN — runs after test (nothing needed here)
    }

})

// export your custom test — not playwright's default one
module.exports = { test }