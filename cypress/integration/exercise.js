
describe('placeholder', () => {
  it('loads home page', () => {
    
    cy.visit('http://localhost:3000/')
  })
})

describe('Test Language of the linked page to be English', () => {
  it('loads learn react page in English Language by default', () => {

    cy
      .visit('https://reactjs.org')
      .its('navigator.language')
      .should('equal', 'en-US')
  })
})

describe ('Verify that react logo is present and visible', () => {
  it('Loads react logo', () => {

    cy
      .visit('http://localhost:3000/');

    cy
      .get('header.App-header')
      .should('be.visible');

  })
})


describe ('Verify that the body is visible and font is sans-serif', () => {
  it('the app body is visible and the font is sans-serif', () => {

cy
  .get('body')
  .should('be.visible')
  .should('have.css', 'font-family')
  .and('match', /serif/)

  })
