describe("Home Page", () => {
  it("should load the header with all the elements", () => {
    cy.visit("/");
    cy.contains(/codesplain/i);
    cy.contains("a", /sign in/i).should("exist");
    cy.contains("a", /sign up/i).should("exist");
    cy.get("input")
      .should("have.attr", "placeholder")
      .and("match", /search repositories/i)
      .should("exist");
  });

  it("should check the functionalities of headers elements", () => {
    cy.visit("/");
    // Code Splain text functionality
    cy.contains(/codesplain/i).click();
    cy.log(location.pathname);
    cy.location("pathname").should("eq", "/");
    // Search
    cy.get("input").type("React");
    cy.get("form").submit();
    cy.url().should("include", "/repositories?q=React");
    // Signin
    cy.contains(/sign in/i).click();
    cy.location("pathname").should("eq", "/signin");
    // Signup
    cy.contains(/sign up/i).click();
    cy.location("pathname").should("eq", "/signup");
  });
});
