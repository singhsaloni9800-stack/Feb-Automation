const {test, expect} =require ('@playwright/test')

test("Assertions in playwright", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/")
    await expect(page).toHaveURL(/herokuapp/)

    await expect(page).toHaveTitle("The Internet")
    

    await page.getByRole('link',{name: 'Challenging DOM'}).click()
    await expect(page.getByRole('heading',{name: 'Challenging DOM'})).toBeVisible()
    
}


)