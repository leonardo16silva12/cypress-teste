

describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")

        cy.contains("+ Nova Transação").click()

        cy.get('#description').type("Salario")

        cy.get('#amount').type(2000)

        cy.get('#date').type("2023-05-25")

        cy.contains('button', 'Salvar').click()

    });
    // it('Cadastrar uma saída', () => {
    //     cy.visit("https://devfinance-agilizei.netlify.app/#")

    //     cy.contains("+ Nova Transação").click()

    //     cy.get('#description').type("Aluguel")

    //     cy.get('#amount').type(-1150)

    //     cy.get('#date').type("2023-05-25")

    //     cy.contains('button', 'Salvar').click()

    // });
});