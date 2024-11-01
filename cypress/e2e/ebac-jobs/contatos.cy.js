/// <reference types='cypress' />

describe("Teste para a home", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });
  it("Deve incluir informações no formulário", () => {
    cy.get('input[type="text"]').type("Matheus Vieira"); 
    cy.get('input[type="email"]').type("matheusv@gmail.com"); 
    cy.get('input[type="tel"]').type("11012345678"); 
    cy.contains("Adicionar").click(); 
  });

  it("Deve alterar a informação da lista", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click(); 
    cy.get('input[type="text"]').clear().type("Daniel Rodrigues"); 
    cy.get('input[type="email"]').clear().type("danielr@hotmail.com"); 
    cy.get('input[type="tel"]').clear().type("11987654321"); 
    cy.get(".alterar").click(); 
  });

  it("Deve remover um contato da lista", () => {
    cy.get(":nth-child(3) > .sc-gueYoa > .delete").click(); 
  });
});
