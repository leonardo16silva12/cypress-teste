
beforeEach(() => {
    cy.visit("https://devfinance-agilizei.netlify.app/#")
});

describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
        criarTransacao("Salario 1", 2000)
        cy.get("tbody tr td.description").should("have.text", "Salario 1")
    });

    it('Cadastrar uma saída', () => {
        criarTransacao("Aluguel", -1150)
        cy.get("tbody tr td.description").should("have.text", "Aluguel")
    });

    it('Excluir transação', () => {
        criarTransacao("Salario", 2000)
        criarTransacao("Bônus", 1000)
        // cy.contains(".description", "Salario").parent().find('img').click()
        // ou
        cy.contains(".description", "Salario").siblings().children('img').click()

        cy.get('tbody tr').should("have.length", 1)
    });
});

function criarTransacao(descricao, valor) {
    cy.contains("+ Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2023-05-25")
    cy.contains('button', 'Salvar').click()
}