
import homeSaucePage from "../../support/pages-saucedemo/homeSaucePage.cy";
import inventoryPage from  "../../support/pages-saucedemo/inventoryPage.cy"; 

describe('Page Object Model', () => {
    beforeEach( ()=>{
        cy.visit('/')
    })

    it('should login to inventory page', () => {
        homeSaucePage.typeUsername('standard_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();

        inventoryPage.elements.titleSpan().should('have.text','Products');
    })
    it('should display locked out message', () => {
        homeSaucePage.typeUsername('locked_out_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();

        //inventoryPage.elements.titleSpan().should('have.text','Products');
    })
}) 