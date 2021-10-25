///<reference types = "Cypress"/>

describe("My first test suite", function () {
  it("My first test case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#mousehover").invoke("show");
    cy.contains("Top").click({ force: true });
    // cy.url().should("include", "top");
  });
});
