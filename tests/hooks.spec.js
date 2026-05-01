 const {test, expect} =require ('@playwright/test')


test.beforeEach(async ({page}) => {
    page = page
    await page.goto("https://www.saucedemo.com/")
})

test('Login test with hooks', async ({page}) => {

    await page.locator('#user-name').fill("standard_user")
    await page.locator('#password').fill("secret_sauce")
    await page.locator('#login-button').click()

    await page.close()


})


test.only('Login with invalid creds', async ({page}) => {
    await page.locator('#user-name').fill("proble_user")
    await page.locator('#password').fill("wrogng")
    await page.locator('#login-button').click()

})


