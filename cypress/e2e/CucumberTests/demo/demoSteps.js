import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

  Given('Open the {string}', url => {
    cy.visit(url)
  })

  When('Enter {string} webelemnt value {string}', (locator, text) => {
    cy.get(locator).type(text)
  })

 