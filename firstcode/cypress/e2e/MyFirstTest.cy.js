describe("My first test",()=>{

    it("Home page loads with login form", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should("eq", "OrangeHRM")
    it("Home page loads with login form", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should("eq", "OrangeHRM")
    cy.get('input[name="username"]').should('be.visible')
    cy.get('input[name="password"]').should('be.visible')
    cy.get('button[type="submit"]').should('contain', 'Login')
    })
    })

})

describe("Login Page UI Test", () => {
  it("should display username and password fields, and login button should be clickable", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible')

    cy.get('input[name="password"]').should('be.visible')


    cy.get('button[type="submit"]')
      .should('be.visible')
      .and('not.be.disabled')
  })
})


describe("Invalid Login Attempt Test", () => {
  it("should display an error and prevent login on wrong credentials", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.get('input[name="username"]').type('invalidUser')


    cy.get('input[name="password"]').type('wrongPass123')

    cy.get('button[type="submit"]').click()

    
    cy.get('.oxd-alert-content-text', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Invalid credentials')

   
    cy.url().should('include', '/auth/login')
  })
})


describe("Successful Login & Redirection Test", () => {
  it("should log in successfully and redirect to the dashboard", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  
    cy.get('input[name="username"]',{ timeout: 10000 }).type('Admin')

    cy.get('input[name="password"]',{ timeout: 40000 }).type('admin123')

    cy.get('button[type="submit"]').click()

    cy.url({ timeout: 10000 }).should('include', '/dashboard')

    
    cy.get('h6').should('contain.text', 'Dashboard')
  })
})
