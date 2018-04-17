describe('viewing selections',function(){
    it('should visit the homepage',function(){
        cy.visit('localhost:8100');
    })
    it('should see another page',function(){
        cy.get('#menuButton').click()
        
        cy.get('ion-list').get('ion-label').contains('View Entries').click({force:true});
        
    })
});