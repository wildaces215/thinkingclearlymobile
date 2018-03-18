
describe('Sumbiting a conflict',function(){
    //First test case
    it('takes a conflict and pushes to firebase',function(){
        cy.visit('localhost:8100');

        cy.get('conflictName').type('Something doesn\'t feel right')
        .should('have.value','Something doesn\'t feel right');
        
        cy.get('#firstName').type('Its been a long day')
        .should('have.value','Its been a long day');
        
    })
    //Second test case 
    it('should all have be blank',function(){
        cy.visit('localhost:8100');

        cy.get('conflictName').should('have.value','');
        
        cy.get('firstAnser').should('have.value','');
        
        cy.get('secondAnswer').should('have.value','');
        
        cy.get('thirdAnswer').should('have.value','');

    })
    //Third test case
    it('should give an error for the first answer',function(){

    })
    //Foruth test case
    it('should give an swer for the third answer',function(){

    })
})