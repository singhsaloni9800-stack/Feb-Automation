// 👇 import from fixture file — NOT from @playwright/test
const { test } = require('../tests/fixture')
const { expect } = require('@playwright/test')



test('should login successfully', async ({ saucePage }) => {
    // saucePage is just 'page' — already navigated!
    await saucePage.locator('#user-name').fill('standard_user')
    await saucePage.locator('#password').fill('secret_sauce')
    await saucePage.locator('[data-test="login-button"]').click()
    await expect(saucePage).toHaveURL(/inventory/)
})

test('should show error for wrong credentials', async ({ saucePage }) => {
    await saucePage.locator('#user-name').fill('wrong_user')
    await saucePage.locator('#password').fill('wrong_pass')
    await saucePage.locator('[data-test="login-button"]').click()
    await expect(saucePage.locator('[data-test="error"]')).toBeVisible()
})

test('should show error for locked user', async ({ saucePage }) => {
    await saucePage.locator('#user-name').fill('locked_out_user')
    await saucePage.locator('#password').fill('secret_sauce')
    await saucePage.locator('[data-test="login-button"]').click()
    await expect(saucePage.locator('[data-test="error"]')).toContainText('locked out')
})