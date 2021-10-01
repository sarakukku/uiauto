///<reference types="Cypress"/>

import HomePage from "../pageObjects/homePage";
import "cypress-iframe";
import { F } from "ramda";

describe("Frames Test", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("Demo example", function () {
    const homePage = new HomePage();
    cy.visit(Cypress.env("url"));
    homePage.getEditBox().type(this.data.name);
    //cy.get("#exampleFormControlSelect1").select("male");
    homePage.getTwoWayDataBinding().should("have.value", this.data.name);
    homePage.getEditBox().should("have.attr", "minlength", "2");
    homePage.getEntrepreneur().should("be.disabled");
    //cy.pause();
    // cy.selectProduct("Blackberry");
    homePage.getShopTab().click();
    //cy.selectProduct("Blackberry");
    //cy.selectProduct("Nokia Edge");
    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });

    cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link").click();
    //cy.pause();

    let sum = 0;
    cy.get("tr td:nth-child(4) strong")
      .each((el, index, list) => {
        let amount = el.text();
        let res = amount.split(" ");
        res = +res[1].trim();
        sum = sum + res;
        //cy.log(el.text());
      })
      .then(function (data) {
        cy.log(sum);
      });

    cy.get("h3 > strong").then(function (data) {
      let amount = data.text();
      let res = amount.split(" ");
      let total = +res[1].trim();
      expect(total).to.equal(sum);
    });

    cy.get(":nth-child(4) > :nth-child(5) > .btn").click();

    cy.get("#country").type("India");
    cy.get(".suggestions > ul > li > a").click();

    cy.get("#checkbox2").click({ force: true });

    cy.get('input[type="submit"]').click();

    cy.get(".alert").then(function (element) {
      const actualText = element.text();
      expect(actualText.includes("Success")).to.be.true;
    });
    /*cy.get("h4.card-title").each((el, index, list) => {
      if (el.text().includes("Blackberry")) {
        cy.get("button.btn.btn-info").eq(index).click();
      }
    });*/
  });
});
