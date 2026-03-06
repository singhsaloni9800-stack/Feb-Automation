 const base =require ('@playwright/test')

 exports.test = base.test.extend({

    loggedPage: async({page}, use) => {
        await page.goto("https://automationexercise.com/login")
        await page.locator("//input[@name='email']").first().fill("test123@gmail.com")
        await page.locator("//input[@name='password']").first().fill("test123")
        await page.getByRole('button',{name:'Login'}).click()

        await use(page)
    }




 })
 exports.expect = base.expect