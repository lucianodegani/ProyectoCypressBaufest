import indexPage from '../../Soporte/Pages/index';

describe ('Test Cases Demon Blaze', function() {
     
    before(function()
    {
        cy.log('Ejecucion de las pruebas Demon Blaze');
    }
    )

    after(function()
    {
        cy.log('Ejecucion de las pruebas finalizada');
    }
    )

    beforeEach(function(){
        cy.visit('https://www.demoblaze.com/index.html');
        cy.wait(2000)
    })

    var v_id_user = Math.round(Math.random()*10000);
        var v_userName = 'LucianoDeg'+v_id_user
        var v_pass = 'chano'

    it ('Demon Blaze Prueba de Software', function(){
        

        //-----------SIGN UP ---------------------------------------------------------------------------
       
        
        indexPage.clickBtnSignUpPage('a');
        //cy.get('#signin2').click();
        
       
        //userNameSignUp
        indexPage.editUserNameSignUp(v_userName);
        //cy.get('#sign-username').type(v_userName); 
        //Pass
        indexPage.editPasswordSignUp(v_pass);

        //selecciono el boton SignUp
        indexPage.clickBtnSignUp('click');
        cy.wait (2000);

        //-----------FIN DE SIGN UP --------------------------------------------------------------------
        
        //----------- LOGIN ----------------------------------------------------------------------------
        
        //me logueo
        indexPage.clickBtnLoginPage('Click');
        
        //userNameSignUp
        indexPage.editUserNameLogin(v_userName);
        //Pass
        indexPage.editPasswordLogin(v_pass);

        //selecciono el boton Login
        indexPage.clickBtnLogin();
        cy.wait (2000);

           //-----------FIN DE LOGIN --------------------------------------------------------------------

        //-----------CARGO Una laptop en el carrito------------------------------------------------------
        indexPage.clickLinkLaptop();

        indexPage.clickLinkLaptopContains();

        indexPage.clickAddToCart();

        //indexPage.clickAlertPopUpProductoAgregado();

        indexPage.clickLinkCart();

        //valido que la laptop este en el carrito
        indexPage.validarTablaCart();
        
        // 
        //Log Out
        indexPage.clickBtnLogOut();

        indexPage.clickBtnHome();

    }
    )

}
)
