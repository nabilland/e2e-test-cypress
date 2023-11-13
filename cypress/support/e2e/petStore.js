it('Create a user - POST', () => {
    let body = {
        "id": 0,
        "username": Cypress.env('username'),
        "firstName": "John",
        "lastName": "James",
        "email": "john@email.com",
        "password": Cypress.env('password'),
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

const loginUser = {
    method : "GET",
    url : '/user/login',
    qs : {
        username : Cypress.env('username'),
        password : Cypress.env('password')
    }
}
it('Login registered user', () => {
    cy.request(loginUser).as('loginUser');
    cy.get('@loginUser').then(loginUser => {
        expect(loginUser.status).to.eq(200);
    })
})