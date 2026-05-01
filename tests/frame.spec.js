 const{test, expect} =require ('@playwright/test')
 test.setTimeout(0);

 test("testing iframe scenarios", async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/iframe")
    const frame = page.frameLocator('#mce_0_ifr')
    await frame.locator('#tinymce').fill('')
    await frame.locator('#tinymce').fill("Hello Saloni Singh")

    await expect(frame.locator('#tinymce')).toHaveText("Hello Saloni Singh")

 })

 test.only("Iframe", async({page}) => {
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe")
    const frame = page.frameLocator('#iframeResult')
    await frame.locator('button').click();
 })

 test.only('count iframes', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');

  const frames = page.frames();

  console.log(frames.length);
});