const { test, expect } = require('@playwright/test')

test('API  est', async ({ request }) => {
    // 👇 change this URL
    const resp = await request.get('https://jsonplaceholder.typicode.com/users')
    console.log(resp.status())

    expect(resp.status()).toBe(200)

    const data = await resp.json()
    console.log(data)

})



test('should create a new user', async ({ request }) => {
    const resp = await request.post('https://jsonplaceholder.typicode.com/users', {
        data: {
            name: 'Your Name',
            email: 'your@email.com',
            username: 'yourname'
        }
    })

    expect (resp.status()).toBe(201)

    const responsebody = await resp.json()
    console.log(responsebody)
    expect(responsebody.name).toBe('Your Name')

    // 1. check status code — POST success is 201 not 200!
    // 2. get response body
    // 3. assert name in response matches what you sent
})   


test('should update a user', async ({ request }) => {
    const resp = await request.put('https://jsonplaceholder.typicode.com/users/1', {
        data: {
            name: 'Updated Name',
            email: 'updated@email.com'
        }
    })

    expect (resp.status()).toBe(200)
    const body =  await resp.json()

    console.log(body)
    expect(body.name).toBe('Updated Name')
})

const BASE_URL = 'https://restful-booker.herokuapp.com'

test('Step 1 — get auth token', async ({ request }) => {
    const resp = await request.post(`${BASE_URL}/auth`, {
        data: {
            username: 'admin',
            password: 'password123'
        }
    })

    expect(resp.status()).toBe(200)

    const body = await resp.json()
    console.log(body)  // should print { token: 'abc123...' }

    expect(body.token).toBeTruthy()  // token exists and is not empty
})




let token        // stores auth token
let bookingId    // stores created booking id

// Step 1 — get token
test('Step 1 - get auth token', async ({ request }) => {
    const resp = await request.post(`${BASE_URL}/auth`, {
        data: {
            username: 'admin',
            password: 'password123'
        }
    })
    const body = await resp.json()
    token = body.token
    console.log('Token:', token)
    expect(token).toBeTruthy()
})

// Step 2 — get all bookings
test('Step 2 - get all bookings', async ({ request }) => {
    const resp = await request.get(`${BASE_URL}/booking`)
    expect(resp.status()).toBe(200)
    const body = await resp.json()
    console.log('All bookings:', body)
    expect(body.length).toBeGreaterThan(0)  // at least 1 booking exists
})

// Step 3 — create a new booking
test('Step 3 - create a booking', async ({ request }) => {
    const resp = await request.post(`${BASE_URL}/booking`, {
        data: {
            firstname: 'John',
            lastname: 'Doe',
            totalprice: 500,
            depositpaid: true,
            bookingdates: {
                checkin: '2026-01-01',
                checkout: '2026-01-05'
            },
            additionalneeds: 'Breakfast'
        }
    })
    expect(resp.status()).toBe(200)
    const body = await resp.json()
    console.log('Created booking:', body)
    bookingId = body.bookingid  // save id for next tests
    expect(body.bookingid).toBeTruthy()
    expect(body.booking.firstname).toBe('John')
})

// Step 4 — update the booking (needs token!)
test('Step 4 - update a booking', async ({ request }) => {
    const resp = await request.put(`${BASE_URL}/booking/${bookingId}`, {
        headers: {
            'Cookie': `token=${token}`  // 👈 token used here
        },
        data: {
            firstname: 'Updated John',
            lastname: 'Doe',
            totalprice: 999,
            depositpaid: true,
            bookingdates: {
                checkin: '2026-01-01',
                checkout: '2026-01-05'
            },
            additionalneeds: 'Lunch'
        }
    })
    expect(resp.status()).toBe(200)
    const body = await resp.json()
    console.log('Updated booking:', body)
    expect(body.firstname).toBe('Updated John')
})

// Step 5 — delete the booking (needs token!)
test('Step 5 - delete a booking', async ({ request }) => { 
    const resp = await request.delete(`${BASE_URL}/booking/${bookingId}`, {
        headers: {
            'Cookie': `token=${token}`  // 👈 token used here
        }
    })
    expect(resp.status()).toBe(201)  //  restful-booker returns 201 for delete
    console.log('Booking deleted!')
})
