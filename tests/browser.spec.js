 const{test, expect} =require('@playwright/test')

 test("Nykaa web navigation", async({page}) => {

    await page.goto("https://www.nykaa.com/")
    await page.getByRole('button',{name:'Si'}).first().click()
    await page.getByText('Mobile Number').click()
    await page.getByText('Mobile Number').fill('9153774649')
    await page.getByRole('button',{name:'SEND OTP'}).click()

 })

