 $(document).ready(function(){

 var intentos = 0;
 $("#btn-abrir").hide();
 $("#btn-abrir-2").hide();
 $("#btn-abrir-3").hide();
        
// Ocultar sección 1 para mostrar la 2

     $("#button-addon").click(function(){
         $("#section-one").slideUp(500);
         $("#section-two").css('display', 'flex').show();
       });



// Guardamos la variable del nombre, chequeamos si es letra y ocultamos la sección 2 para mostrar las 3
$("#no-text").hide();

$("#button-addon2").click(function(){
        
   var nombre = ($("input:text").val());
   
   if (isNaN(nombre)) {
        $("#section-two").slideUp(500);
        $("#section-three").css('display', 'flex').show();
        document.getElementById("nombre-user").innerHTML = nombre; // Imprimimos el nombre dentro del HTML
   }
   else {
       $("#no-text").css("color","red").show();
   }
  });

  //Dificultad Facil

  $("#button-addon3").click(function() {


        $("#section-three").slideUp(500);
        $("#section-four").css('display', 'flex').show();
        $(".nav").css('display', 'flex').show();
        $("#Pregdifi").slideUp(500);
        $("#PregdifiDos").slideUp(500);
        $("#PregdifiTres").slideUp(500);
        $("#btn-abrir").show();

        setInterval(function()
        {var qclicks = ($("#VerIntentos").text());
         qclicks = parseInt(qclicks)
         if (qclicks >= 2) {
                
               
                $("#btn-abrir").css("pointer-events","inherit");
                $("#btn-abrir").css("opacity","100%");

         }

     }, 300
     );


        
        //Pregunta 1

        $("#RookieDos").click(function() {

                    $("#section-four").delay(100).slideUp(500);
                    $("#section-five").css('display', 'flex').show();
                    $("#btn-abrir-2").show();
                    $("#btn-abrir").hide();
                    $("#RookieDos").css("border-color","green");

        });
        $("#RookieUno").click(function() {
                $("#RookieUno").css("border-color","red");
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;
               
                
                
        });
        $("#RookieTres").click(function() {

                $("#RookieTres").css("border-color","red");
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;
                

        });


        // Pregunta 2

        $("#RookieCuatro").click(function() {


                    $("#section-five").delay(100).slideUp(500);
                    $("#section-six").css('display', 'flex').show();
                    $("#btn-abrir-2").hide();
                    $("#btn-abrir-3").show();
                    $("#RookieCuatro").css("border-color","green");

        });
        $("#RookieCinco").click(function() {
                $("#RookieCinco").css("border-color","red");
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;

                setInterval(function()
                {var qclicks = ($("#VerIntentos").text());
                 qclicks = parseInt(qclicks)
                 if (qclicks>= 2) {
                        
                       
                        $("#btn-abrir-2").css("pointer-events","inherit");
                        $("#btn-abrir-2").css("opacity","100%");
                        qclicks = 0;
        
                 }
        
             }, 300
             );
                
                
        });
        $("#RookieSeis").click(function() {
                $("#RookieSeis").css("border-color","red");
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;

                setInterval(function()
                {var qclicks = ($("#VerIntentos").text());
                 qclicks = parseInt(qclicks)
                 if (qclicks >= 2) {
                        
                       
                        $("#btn-abrir-2").css("pointer-events","inherit");
                        $("#btn-abrir-2").css("opacity","100%");
        
                 }
        
             }, 300
             );
        });

        // Pregunta 3

        $("#RookieSiete").click(function() {
            var respCinco = $( this ).text();

                    $("#section-six").delay(100).slideUp(500);
                    $("#section-seven").css('display', 'flex').show();
                    $("#RookieSiete").css("border-color","green");
                    $("#btn-abrir-3").hide();
                    $("#VolverMenu").hide();
                    

        });
        $("#RookieOcho").click(function() {
                $("#RookieOcho").css("border-color","red");
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;
                setInterval(function()
                {var qclicks = ($("#VerIntentos").text());
                 qclicks = parseInt(qclicks)
                 if (qclicks >= 2) {
                        
                       
                        $("#btn-abrir-3").css("pointer-events","inherit");
                        $("#btn-abrir-3").css("opacity","100%");
        
                 }
        
             }, 300
             );
        });
        $("#RookieNueve").click(function() {
                $("#RookieNueve").css("border-color","red");
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;
                setInterval(function()
                {var qclicks = ($("#VerIntentos").text());
                 qclicks = parseInt(qclicks)
                 if (qclicks >= 2) {
                        
                       
                        $("#btn-abrir-3").css("pointer-events","inherit");
                        $("#btn-abrir-3").css("opacity","100%");
        
                 }
        
             }, 300
             );
        });
    
  });

     // Dificultad media
     $("#button-addon4").click(function() {

        $("#btn-abrir").show();
        $("#section-three").slideUp(500);
        $("#section-four").css('display', 'flex').show();
        $(".nav").css('display', 'flex').show();
        $("#Pregdifi").slideUp(500);
        $("#PregdifiDos").slideUp(500);
        $("#PregdifiTres").slideUp(500);
        $("#RookieDiez").show();
        $("#RookieOnce").show();
        $("#RookieDoce").show();

        setInterval(function()
        {var qclicks = ($("#VerIntentos").text());
         qclicks = parseInt(qclicks)
         if (qclicks >= 2) {
                
               
                $("#btn-abrir").css("pointer-events","inherit");
                $("#btn-abrir").css("opacity","100%");

         }

     }, 300
     );


        
        


        
        //Pregunta 1

        $("#RookieDos").click(function() {

                    $("#section-four").delay(100).slideUp(500);
                    $("#section-five").css('display', 'flex').show();
                    $("#RookieDos").css("border-color","green");
                    $("#btn-abrir").hide();
                    $("#btn-abrir-2").show();


        });
        $("#RookieUno").click(function() {
                $("#RookieUno").css("border-color","red");
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;      
                    
                
        });
        $("#RookieTres").click(function() {

                $("#RookieTres").css("border-color","red");
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;

        });
        $("#RookieDiez").click(function() {

                $("#RookieDiez").css("border-color","red");
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;

        });

        // Pregunta 2

        $("#RookieCuatro").click(function() {
                    $("#section-five").delay(100).slideUp(500);
                    $("#section-six").css('display', 'flex').show();
                    $("#btn-abrir-2").hide();
                    $("#btn-abrir-3").show();
        });
        $("#RookieCinco").click(function() {
                $("#RookieCinco").css("border-color","red");
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;
                setInterval(function()
                {var qclicks = ($("#VerIntentos").text());
                 qclicks = parseInt(qclicks)
                 qclicks = qclicks-2
                 if (qclicks+1 >= 2) {
                        
                       
                        $("#btn-abrir-2").css("pointer-events","inherit");
                        $("#btn-abrir-2").css("opacity","100%");
        
                 }
        
             }, 300
             );
        });
        $("#RookieSeis").click(function() {
                $("#RookieSeis").css("border-color","red");
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;
                setInterval(function()
                {var qclicks = ($("#VerIntentos").text());
                 qclicks = parseInt(qclicks)
                 if (qclicks >= 2) {
                        
                       
                        $("#btn-abrir-2").css("pointer-events","inherit");
                        $("#btn-abrir-2").css("opacity","100%");
        
                 }
        
             }, 300
             );
        });
        $("#RookieOnce").click(function() {

                $("#RookieOnce").css("border-color","red");
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;
                setInterval(function()
                {var qclicks = ($("#VerIntentos").text());
                 qclicks = parseInt(qclicks)
                 if (qclicks >= 2) {
                        
                       
                        $("#btn-abrir-2").css("pointer-events","inherit");
                        $("#btn-abrir-2").css("opacity","100%");
        
                 }
        
             }, 300
             );

        });

        // Pregunta 3

        $("#RookieSiete").click(function() {

                    $("#section-six").delay(100).slideUp(500);
                    $("#section-seven").css('display', 'flex').show();
                    $("#RookieSiete").css("border-color","green");
                    $("#btn-abrir-3").hide();
                    $("#VolverMenu").hide();

        });
        $("#RookieOcho").click(function() {
                $("#RookieOcho").css("border-color","red");
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;
                setInterval(function()
                {var qclicks = ($("#VerIntentos").text());
                 qclicks = parseInt(qclicks)
                 if (qclicks >= 2) {
                        
                       
                        $("#btn-abrir-3").css("pointer-events","inherit");
                        $("#btn-abrir-3").css("opacity","100%");
        
                 }
        
             }, 300
             );
                
        });
        $("#RookieNueve").click(function() {
                $("#RookieNueve").css("border-color","red");
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;
                
                setInterval(function()
                {var qclicks = ($("#VerIntentos").text());
                 qclicks = parseInt(qclicks)
                 if (qclicks >= 2) {
                        
                       
                        $("#btn-abrir-3").css("pointer-events","inherit");
                        $("#btn-abrir-3").css("opacity","100%");
        
                 }
        
             }, 300
             );
        });
        $("#RookieDoce").click(function() {

                $("#RookieDoce").css("border-color","red");
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;
                
                setInterval(function()
                {var qclicks = ($("#VerIntentos").text());
                 qclicks = parseInt(qclicks)
                 if (qclicks >= 2) {
                        
                       
                        $("#btn-abrir-3").css("pointer-events","inherit");
                        $("#btn-abrir-3").css("opacity","100%");
        
                 }
        
             }, 300
             );

        });
    
  });

  // Dificultad Dificil
       $( "#button-addon5").click(function() {


        $("#section-three").slideUp(500);
        $("#section-four").css('display', 'flex').show();
        $(".nav").css('display', 'flex').show();
        $("#Preguno").slideUp(500);
        $("#Pregdos").slideUp(500);
        $("#Pregtres").slideUp(500);
        $("#btn-abrir").show();

        setInterval(function()
        {var qclicks = ($("#VerIntentos").text());
         qclicks = parseInt(qclicks)
         if (qclicks >= 2) {
                
               
                $("#btn-abrir").css("pointer-events","inherit");
                $("#btn-abrir").css("opacity","100%");

         }

     }, 300
     );



        
        //Pregunta 1
        $("#btn-preg-uno").click(function(){
                var pregUno = ($("#input-uno").val());
               if (pregUno === "Ethereum" || pregUno === "ethereum"){
                $("#section-four").delay(100).slideUp(500);
                $("#section-five").css('display', 'flex').show(); 
                $("#btn-abrir").hide();
                $("#btn-abrir-2").show();
                
               }
               else {
                $("#input-uno").css('border-color', 'red');
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;
               }
               });       

        // Pregunta 2
        $("#btn-preg-dos").click(function(){
                var pregDos = ($("#input-dos").val());
               if (pregDos === "21.000.000" || pregDos === "Ventiun Millones" || pregDos === "Ventiún Millones" || pregDos === "ventiun millones" || pregDos === "ventiun Millones" || pregDos ==="Ventiun millones" || pregDos ==="21000000"){
                $("#section-five").delay(100).slideUp(500);
                $("#section-six").css('display', 'flex').show();
                $("#btn-abrir-2").hide();
                $("#btn-abrir-3").show();
                
               }
               else {
                $("#input-dos").css('border-color', 'red');
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;
                setInterval(function()
                {var qclicks = ($("#VerIntentos").text());
                 qclicks = parseInt(qclicks)
                 if (qclicks >= 2) {
                        
                       
                        $("#btn-abrir-2").css("pointer-events","inherit");
                        $("#btn-abrir-2").css("opacity","100%");
        
                 }
        
             }, 300
             );
                
               }
               });    

        // Pregunta 3
        $("#btn-preg-tres").click(function(){
                var pregTres = ($("#input-tres").val());
               if (pregTres === "Dogecoin" || pregTres === "dogecoin"){
                $("#section-six").delay(100).slideUp(500);
                $("#section-seven").css('display', 'flex').show();  
                $("#btn-abrir-3").hide();
                $("#VolverMenu").hide();
               }
               else {
                $("#input-dos").css('border-color', 'red');
                intentos++;
                document.getElementById("VerIntentos").innerHTML =  intentos;
                setInterval(function()
                {var qclicks = ($("#VerIntentos").text());
                 qclicks = parseInt(qclicks)
                 if (qclicks >= 2) {
                        
                       
                        $("#btn-abrir-3").css("pointer-events","inherit");
                        $("#btn-abrir-3").css("opacity","100%");
        
                 }
        
             }, 300
             );
               }
               });    
  });
    
    
        // Modal
        
        var data = $(this).attr("#VerIntentos");
        console.log(data)

        if(intentos >= 0){

                $(function() {
                        // ventana que va a aparecer por encima con la modal
                        var contenedorModal = $("#modal");
                        // Boton que abre
                        $("#btn-abrir").click(function(){
                        contenedorModal.removeClass('oculta');
                        });
                        // La 'x' que cierra
                        $("#cruz-cerrar").click(function(){
                        contenedorModal.addClass('oculta');
                        });
                });
        
                }else{
                $("#btn-abrir").addClass("oculta");
                }
        
                if(intentos >= 0){
        
                        $(function() {
                        // ventana que va a aparecer por encima con la modal
                        var contenedorModal2 = $("#modal-2");
                        // Boton que abre
                        $("#btn-abrir-2").click(function(){
                        contenedorModal2.removeClass('oculta');
                        });
                        // La 'x' que cierra
                        $("#cruz-cerrar-2").click(function(){
                        contenedorModal2.addClass('oculta');
                        });
                });
                
                }else{
                $("#btn-abrir-2").addClass("oculta");
                }
        
                
                if(intentos >= 0){
        
                        $(function() {
                        // ventana que va a aparecer por encima con la modal
                        var contenedorModal3 = $("#modal-3");
                        // Boton que abre
                        $("#btn-abrir-3").click(function(){
                        contenedorModal3.removeClass('oculta');
                        });
                        // La 'x' que cierra
                        $("#cruz-cerrar-3").click(function(){
                        contenedorModal3.addClass('oculta');
                        });
                });
                
                }else{
                $("#btn-abrir-3").addClass("oculta");
                }


        
        
                // Jugar de nuevo
                
                $("#btn-jugarDeNuevo").click(function() {
                        location.reload();
                });

                $("#VolverMenu").click(function() {
                        location.reload();
                });

 });