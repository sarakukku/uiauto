///<reference types="Cypress"/>
describe("Real web test suite", function () {
  it("Test case", function () {
    cy.visit(
      "https://docs.cypress.io/guides/getting-started/testing-your-app#Step-3-Configure-Cypress"
    );
    //cy.get(":nth-child(33) > :nth-child(3) > a").click();
  });
});
