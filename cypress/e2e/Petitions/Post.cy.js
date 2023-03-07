describe('Make a post', () => {
    it('First post', () => {
        const data = require('../../fixtures/fixtures-demo/dataPost.json');
        cy.request('POST', 'http://www.thetestingworldapi.com/api/technicalskills', data).then(
            (response) => {
              // response.body se serializa automáticamente en JSON
              expect(response.status).to.eq(200)
            }
          )
    })

})