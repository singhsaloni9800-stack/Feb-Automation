class LoginPage {
    constructor (page) {
        this.page = page
        this.userName = page.locator("//input[@id='user-name']")
        this.passWord = page.locator("//input[@id='password']")
        this.loginBtn = page.locator("//input[@id='login-button']")
    }

    async navigate() {
        await this.page.goto("https://www.saucedemo.com/")
    }

    async fillDetails(username, password) {
        await this.userName.fill(username)
        await this.passWord.fill(password)
    }

    async clickLogin() {
        await this.loginBtn.click()
    }

}

module.exports = LoginPage;










