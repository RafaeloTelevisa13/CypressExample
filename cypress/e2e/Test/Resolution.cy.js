const resolutions = Cypress.env('resolutions');

describe("First Test", () => {

  beforeEach(() => {
    resolutions.forEach(element => {
      cy.visit('https://mylegalstream.com/')
      if (Cypress._.isArray(element)) { //llama al metodo isArray para validar si es un arreglo
        cy.viewport(element[0], element[1])
      }

      else {
        cy.viewport(element)

      }
    });
  });

  it('Test', () => {
    cy.log('Entro al test')
  })

})