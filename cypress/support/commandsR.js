Cypress.Commands.add('typeLogin', (username, password) => {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click();

})

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
})
Cypress.Commands.add('scrollDownUp', () => {
    cy.scrollTo('bottom', { duration: 2000 }) //Desplácese hasta la parte inferior de la ventana
    cy.scrollTo('top', { duration: 2000 })
})
