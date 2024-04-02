// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login",(userName, password) =>{
    cy.visit ('https://www.cavea.ge')
    cy.get('.col-xs-8 > .form-group > .btn-white').click()
    cy.wait(2000)
    cy.get('#username').type(userName)
    cy.wait(2000)
    cy.get('.bs-login-form > .modal-dialog > .modal-content > .modal-body > form > :nth-child(5) > .form-control').type(password)
    cy.get(':nth-child(6) > .btn').click()
        

})