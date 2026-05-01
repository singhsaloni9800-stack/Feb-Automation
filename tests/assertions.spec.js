const {test, expect} =require ('@playwright/test')

test("Assertions in playwright", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/")
    await expect(page).toHaveURL(/herokuapp/)

    await expect(page).toHaveTitle("The Internet")
    

    await page.getByRole('link',{name: 'Challenging DOM'}).click()
    await expect(page.getByRole('heading',{name: 'Challenging DOM'})).toBeVisible()
    
}


)

test("Upload files scenario", async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.setInputFiles('#file-upload','tests/sample.pdf');
    await page.click('#file-submit');
await expect(page.locator('h3')).toHaveText('File Uploaded!');

})

test("Negative uploading scenario", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.getByRole('button',{name:'Upload'}).click()
    await expect(page.locator('h1')).toHaveText('Internal Server Error')
})


test.only("sauce assertion", async(page) => { 

    await page.goto("https://www.saucedemo.com")
    await page.locator('#user-name').fill("standard_user")
    await page.locator('#password').fill("secret_sauce")
    await page.locator('#login-button').click()

    await expect(page.locator('.title')).toHaveText('Products')

})





