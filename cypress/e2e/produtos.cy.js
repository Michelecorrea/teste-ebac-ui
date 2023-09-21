/// <reference types="cypress" />

describe('Funcionalidade Pagina de produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            // .first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            cy.click()

    });

    it ('Deve adicionar um produto ao carrinho',() => {
        var quantiadade = 3

        cy.get('[class="product-block grid"]')
           .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type (quantiadade)
        cy.get('.single_add_to_cart_button').click()
    
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantiadade)
        cy.get('.woocommerce-message').should ('contain',quantiadade + ' x "Ariel Roll Sleeve Sweatshirt" foram adicionados no seu carrinho .')
         });
});