/// <reference types="Cypress" />

context('Funcionalidade Login', () => {

    before(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
  
    it('Deve faezer login com sucesso' , () => {
     cy.get('#username').type('aluno_ebac@teste.com')
     cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click ()
  
    cy.get('.page-title').should('contain' , 'Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain','Olá, aluno_ebac',)
    })
  
  it('Deve exibir uma mensagem de erro ao inserir usuário invalido', () => {
    
    cy.get('#username').type('ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
   cy.get('.woocommerce-form > .button').click ()
  
   cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
  })
  
   it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste')
    cy.get('.woocommerce-form > .button').click ()
  
    cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
  
     });
  });
  