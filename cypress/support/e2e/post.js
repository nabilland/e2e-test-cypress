it('Create a user - POST', () => {
    let body = {
        "id": 0,
        "username": Cypress.env('username'),
        "firstName": "John",
        "lastName": "James",
        "email": "john@email.com",
        "password": "12345",
        "phone": "12345",
        "userStatus": 0
    }
    console.log(body)
    cy.request('POST', '/user', body).as('createUser');
    //adds new todo item by defining todo name
    cy.get('@createUser').then(createUser => {
        expect(createUser.status).to.eq(200);
    })
})