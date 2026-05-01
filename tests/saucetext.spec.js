 const  {test, expect} =require ('@playwright/test')
 const LoginPage = require('../tests/sauce')

 let pagesauce;

 test.beforeEach(async ({page}) => {

    const pagesauce = new LoginPage(page)

    await pagesauce.navigate()
 })

 test ("Sauce POM test", async ({page}) => {



    await pagesauce.fillDet("standard_user", "secret_sauce")

    await pagesauce.clickLogin()
    await expect (pagesauce.getErrorMessage()).toContain("Username and password do not match any user in this service")


 })

 test("wrong creds verification", async ({page}) => {

    await pagesauce.fillDet("proble", "secret_sauce")
    await pagesauce.clickLogin()
 })

 test("Another worng", async ({page}) => {

    await pagesauce.fillDet("wrong user", " werong")
    await pagesauce.clickLogin()
 })