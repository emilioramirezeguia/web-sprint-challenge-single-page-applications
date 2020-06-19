describe("Able to order pizza", function () {

    it("Can navigate to site", function () {
        cy.visit("http://localhost:3000")
        cy.url().should("include", "localhost")
    })

    it("Can open form after clicking 'Pizza?'", function () {
        cy.get('.pizza-section > a').click()
        cy.visit("http://localhost:3000/pizza")
        cy.url().should("include", "pizza")
    })

    it("Disables submit button if no name.", function () {
        cy.get("button").should("be.disabled")
    })

    it("Can type name", function () {
        cy.get(':nth-child(1) > input')
            .type("Lady Gaga")
            .should("have.value", "Lady Gaga")
    })

    it("Enables submit button after name is typed in", function () {
        cy.get("button").should("be.enabled")
    })

    it("Can select pizza size", function () {
        cy.get('select')
            .select("12 slices (Family)")
            .should("have.value", "Family")
    })

    it("Can select multiple pizza toppings", function () {
        cy.get('input[type=checkbox]').check()
    })

    it("Can add special requests", function () {
        cy.get('textarea')
            .type("Lots of hot sauce please. I love it!")
            .should("have.value", "Lots of hot sauce please. I love it!")
    })

    it("Can submit order", function () {
        cy.get("button").click()
    })
})