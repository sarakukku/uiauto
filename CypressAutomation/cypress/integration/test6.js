///<reference types = "Cypress"/>
// test1.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("My first test suite", function () {
  it("My first test case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#mousehover").invoke("show");
    cy.contains("Top").click({ force: true });
    // cy.url().should("include", "top");
  });
});
