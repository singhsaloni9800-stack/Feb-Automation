 const{test, expect} =require ("@playwright/test")

 test(" First code of april", async({page}) => {

    await page.goto("https://www.google.com")
    await expect(page).toHaveTitle("Google")

    
 }

)