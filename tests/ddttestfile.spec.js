 const{test, expect} =require ('@playwright/test')
 const LoginPage =require ('../tests/LoginPage')
 const logindata =require ('../tests/logindata.json')

 for(const data of logindata){

    test(`Login test for ${data.username}`, async ({ page }) => {

        const loginpages = new LoginPage(page)
        await loginpages.navigate()
        await loginpages.fillDetails(data.username, data.password)
        await loginpages.clickLogin()

 })}