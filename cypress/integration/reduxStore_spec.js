it('Test search bar', () => {
    cy.visit('/')
    cy.get(".MuiInputBase-input").type("celular {enter}")
    cy.window().its('store').invoke('getState').its('search').should('not.deep.equal', {
        loading: false,
        search: '',
        error: 'No product found with that word'
    })

    cy.get(".MuiInputBase-input").clear().type("televisor {enter}")
    cy.window().its('store').invoke('getState').its('search').should('not.deep.equal', {
        loading: false,
        search: '',
        error: 'No product found with that word'
    })
})
it('Test add car buttom in card', () => {
    cy.visit('/')
    cy.get(".MuiInputBase-input").type("televisor {enter}")

    cy.get(".MuiButton-label").its(0).click()
    cy.window().its('store').invoke('getState').its('car').should('not.deep.equal', {
        buy: [],
        car: []
    })
})
it('Test add car buttom in detail', () => {
    cy.visit('/')
    cy.get(".MuiInputBase-input").type("celular {enter}")
    cy.get(".MuiPaper-root.MuiCard-root.makeStyles-root-5.MuiPaper-elevation1.MuiPaper-rounded")
        .its(0).click()
    cy.get(".makeStyles-content2-12").find(".MuiButton-label").its(0).click()
    cy.window().its('store').invoke('getState').its('car').should('not.deep.equal', {
        buy: [],
        car: []
    })
})
it('Test buy buttom', () => {
    cy.visit('/')
    cy.get(".MuiInputBase-input").type("celular {enter}")
    cy.get(".MuiPaper-root.MuiCard-root.makeStyles-root-5.MuiPaper-elevation1.MuiPaper-rounded")
        .its(0).click()
    cy.contains("Comprar").click()
    cy.window().its('store').invoke('getState').its('car').should('not.deep.equal', {
        buy: [],
        car: []
    })
})
