describe('template spec', () => {
  it('test de login valido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.contains("You logged into a secure area")

 })
 it('test de login con usuario invalido', () => {
  cy.visit('https://the-internet.herokuapp.com/')
  cy.get(':nth-child(21) > a').click()
  cy.get('#username').type("pepito")
  cy.get('#password').type('SuperSecretPassword!')
  cy.get('.radius').click()
  cy.contains("Your username is invalid")

})
})