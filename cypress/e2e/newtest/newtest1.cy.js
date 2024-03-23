describe ("automationexercise test cases", ()=> {
    it ("Register Use", ()=>{

        cy.visit ('http://automationexercise.com')
        cy.get (".shop-menu > .nav > :nth-child(4)>a").click()
        cy.get('.signup-form > h2').should("have.text", "New User Signup!")
        cy.get('[data-qa="signup-name"]').type("natia")
        cy.get('[data-qa="signup-email"]').type("mariami+8111@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.get ('[type="radio"]').check("Mr")
        cy.get('[data-qa="password"]').type("mar1235")
        cy.get('[data-qa="days"]').select(1)
        cy.get('[data-qa="months"]').select("October")
        cy.get('[data-qa="years"]').select ("1990")
        cy.get(':nth-child(7) > label').click()
        cy.get(':nth-child(7) > label').type ("mariami")
        cy.get('[data-qa="last_name"]').type("mesablishvili")
        cy.get('[data-qa="company"]').type ("tbc")
        cy.get('[data-qa="address"]').type("ashby street 44")
        cy.get('[data-qa="city"]').type("tbilisi")
        cy.get('[data-qa="zipcode"]').type("nr13pu")
        cy.get('[data-qa="address2"]').type("tbilisi2")
        cy.get('[data-qa="country"]').select("Canada")
        cy.get('[data-qa="state"]').type("USA")
        cy.get('[data-qa="mobile_number"]').type("12586")
        cy.get('[data-qa="first_name"]').type("mari")
        cy.get('[data-qa="create-account"]').click()
       // Verify that 'ACCOUNT CREATED!' is visible
       cy.get('b').should("be.visible")
       cy.get('[data-qa="continue-button"]').click()
       //Verify that 'Logged in as username' is visible
       cy.get(':nth-child(10) > a').should("be.visible")
       cy.get('.shop-menu > .nav > :nth-child(5)').click()
       cy.get('b').should("be.visible")
       cy.get('[data-qa="continue-button"]').click()
    })


})