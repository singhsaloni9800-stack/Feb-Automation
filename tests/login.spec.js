const {test, expect} =require ('@playwright/test')

const LoginPage =require ('../tests/LoginPage')

test("POM test file", async ({page})  => {

    const loginpage = new LoginPage(page)

    await loginpage.navigate()
    await loginpage.fillDetails('standard_user', 'secret_sauce')
    await loginpage.clickLogin()

    await expect(page).toHaveURL(/html/);
})