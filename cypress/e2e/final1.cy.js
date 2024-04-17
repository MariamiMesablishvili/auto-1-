

/* describe("my second step",() => {
    it("registration with invalid iformation", () => {

cy.visit("https://zootopia.ge/ka")
cy.get('.rprof > p').click()
cy.contains("გაიარეთ რეგისტრაცია").click()
cy.get('[name="first_name"]').should("be.visible").type("mariami")
cy.get('[name="reg_email"]').should("be.visible").type("mari@gmail.com")
cy.wait(2000)
cy.get('[name="personal_id"]').should("be.visible").type("1057719")
cy.get('[name="phone"]').should("be.visible").type("558201041")
cy.get('[name="reg_password"]').should("be.visible").type("mari123")
cy.get('[name="reg_password_confirmation"]').should("be.visible").type("mari123")
cy.get('#etx').check({force: true})

cy.get('.regsub').click() 

describe("my second step",() => {
    it("რეგისტრაცია ისე რომ არ მოხდეს დათანხმება  წესებსა და პირობებზე", () => {

cy.visit("https://zootopia.ge/ka")
cy.get('.rprof > p').click()
cy.contains("გაიარეთ რეგისტრაცია").click()
cy.get('[name="first_name"]').should("be.visible").type("mariami")
cy.get('[name="reg_email"]').should("be.visible").type("mari@gmail.com")
cy.get('[name="personal_id"]').should("be.visible").type("1057719")
cy.get('[name="phone"]').should("be.visible").type("558201041")
cy.get('[name="reg_password"]').should("be.visible").type("mari123")
cy.get('[name="reg_password_confirmation"]').should("be.visible").type("mari123")

cy.get('.regsub').click()


describe("my second step",() => {
    it("ვტორიზაციის გვერდზე ველების (ელ-ფოსტა,პაროლის) არსებობის გადამოწმება", () => {

cy.visit("https://zootopia.ge/ka")
cy.get('.rprof > p').click()
cy.get(':nth-child(5) > .imail').should("be.visible")
cy.get('.ipass').should("be.visible")

describe("my second step",() => {
    it("ვტორიზაციის გავლა ვალიდური მონაცემები", () => {

cy.visit("https://zootopia.ge/ka")
cy.get('.rprof > p').click()
cy.get(':nth-child(5) > .imail').type("mari@gmail.com")
cy.get('.ipass').type("mari123")
cy.get('.avtorization > .input-shablon > .form-button').click()*/


describe("my second step",() => {
    it("ნივთის კალათში დამატება", () => {

cy.visit("https://zootopia.ge/ka")
cy.get('.rprof > p').click()
cy.get(':nth-child(5) > .imail').type("mari@gmail.com")
cy.get('.ipass').type("mari123")
cy.get('.avtorization > .input-shablon > .form-button').click()
cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > .swiper-slide-active > h2 > a').click()
cy.get('.add-pro').click()
cy.get('.add-pro > span > :nth-child(2)').contains("დამატებულია")






    

    })
})