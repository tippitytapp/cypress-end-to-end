describe("Test our inputs and submit our form", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000");
    })
    it("Add text to inputs and submit form", function(){
        cy.get('input[name="name"]')
          .type('Marc')
          .should("have.value", "Marc");
        cy.get('input[name="email"]')
          .type('marc.tapp@gmail.com')
          .should("have.value", "marc.tapp@gmail.com");
        cy.get('textarea')
          .type('This is a test')
          .should("have.value", "This is a test");
        cy.get('#positions')
          .select("Tabling")
          .should("have.value", "Tabling");
        cy.get('[type="checkbox"]')
          .check()
          .should("be.checked");
        cy.get('button')
          .click();
    });

});