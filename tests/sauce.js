class LoginPage {
    constructor (page) {
        this.page = page
        this.userName = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginBtn = page.locator('#login-button')

    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com')

    }

    async fillDet(username, password) {
        await this.userName.fill(username)
        await this.password.fill(password)
    }

    async clickLogin() {
        await this.loginBtn.click()
    }

    async getErrorMessage() {
        return await this.page.locator('[data-test="error]').textContent()
    }
}

module.exports =LoginPage;