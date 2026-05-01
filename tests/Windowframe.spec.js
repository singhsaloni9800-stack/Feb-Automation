 const {test, expect} =require ('@playwright/test')

test('handle multiple windows', async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/windows");
    
})