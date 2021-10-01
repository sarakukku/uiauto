///<reference types = "Cypress"/>
// test1.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("My first test suite", function () {
  it("My first test case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".products").as("productLocator");
    // cy.get(":nth-child(3) > .product-action > button").click();
    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click();
    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find(".product-name").text();
        if (textVeg.includes("Cashews")) {
          $el.find("button").click();
        }
      });
    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
  });
});
