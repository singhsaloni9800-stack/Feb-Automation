 const {test, expect} =require ('../tests/fixture')

 test('Verify fixture logged in page', async ({loggedPage}) => {

    await expect(loggedPage).toHaveURL(/automationexercise/)

 }






)

