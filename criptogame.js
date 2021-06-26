 $(document).ready(function(){

 var intentos = 0;
 var Rta 

// Ocultar sección 1 para mostrar la 2
     $("#button-addon").click(function(){
         $("#section-one").slideUp(500);
         $("#section-two").css('display', 'flex').show();
       });



// Guardamos la variable del nombre, chequeamos si es letra y ocultamos la sección 2 para mostrar las 3

$("#button-addon2").click(function(){
   var nombre = ($("input:text").val());
   
   if (isNaN(nombre)) {
        $("#section-two").slideUp(500);
        $("#section-three").css('display', 'flex').show();
        document.getElementById("nombre-user").innerHTML = nombre; // Imprimimos el nombre dentro del HTML
   }
   else {
       alert("eh macho flasheaste")
   }
  });

  //Dificultad Facil

  $("#button-addon3").click(function() {


        $("#section-three").slideUp(500);
        $("#section-four").css('display', 'flex').show();
        $("#Pregdifi").slideUp(500);
        $("#PregdifiDos").slideUp(500);
        $("#PregdifiTres").slideUp(500);
        
        //Pregunta 1

        $("#RookieDos").click(function() {

                    $("#section-four").delay(100).slideUp(500);
                    $("#section-five").css('display', 'flex').show();
                    $("#RookieDos").css("border-color","green");

        });
        $("#RookieUno").click(function() {
                $("#RookieUno").css("border-color","red");
        });
        $("#RookieTres").click(function() {

                $("#RookieTres").css("border-color","red");

        });

        // Pregunta 2

        $("#RookieCuatro").click(function() {


                    $("#section-five").delay(100).slideUp(500);
                    $("#section-six").css('display', 'flex').show();
                    $("#RookieCuatro").css("border-color","green");

        });
        $("#RookieCinco").click(function() {
                $("#RookieCinco").css("border-color","red");
        });
        $("#RookieSeis").click(function() {
                $("#RookieSeis").css("border-color","red");
        });

        // Pregunta 3

        $("#RookieSiete").click(function() {
            var respCinco = $( this ).text();

                    $("#section-six").delay(100).slideUp(500);
                    $("#section-seven").css('display', 'flex').show();
                    $("#RookieSiete").css("border-color","green");

        });
        $("#RookieOcho").click(function() {
                $("#RookieOcho").css("border-color","red");
        });
        $("#RookieNueve").click(function() {
                $("#RookieNueve").css("border-color","red");
        });
    
  });

     // Dificultad media
     $( "#button-addon4").click(function() {


        $("#section-three").slideUp(500);
        $("#section-four").css('display', 'flex').show();
        $("#Pregdifi").slideUp(500);
        $("#PregdifiDos").slideUp(500);
        $("#PregdifiTres").slideUp(500);
        $("#RookieDiez").show();
        $("#RookieOnce").show();
        $("#RookieDoce").show();

        
        //Pregunta 1

        $("#RookieDos").click(function() {

                    $("#section-four").delay(100).slideUp(500);
                    $("#section-five").css('display', 'flex').show();
                    $("#RookieDos").css("border-color","green");

        });
        $("#RookieUno").click(function() {
                $("#RookieUno").css("border-color","red");
        });
        $("#RookieTres").click(function() {

                $("#RookieTres").css("border-color","red");

        });
        $("#RookieDiez").click(function() {

                $("#RookieDiez").css("border-color","red");

        });

        // Pregunta 2

        $("#RookieCuatro").click(function() {


                    $("#section-five").delay(100).slideUp(500);
                    $("#section-six").css('display', 'flex').show();
                    $("#RookieCuatro").css("border-color","green");

        });
        $("#RookieCinco").click(function() {
                $("#RookieCinco").css("border-color","red");
        });
        $("#RookieSeis").click(function() {
                $("#RookieSeis").css("border-color","red");
        });
        $("#RookieOnce").click(function() {

                $("#RookieOnce").css("border-color","red");

        });

        // Pregunta 3

        $("#RookieSiete").click(function() {
            var respCinco = $( this ).text();

                    $("#section-six").delay(100).slideUp(500);
                    $("#section-seven").css('display', 'flex').show();
                    $("#RookieSiete").css("border-color","green");

        });
        $("#RookieOcho").click(function() {
                $("#RookieOcho").css("border-color","red");
        });
        $("#RookieNueve").click(function() {
                $("#RookieNueve").css("border-color","red");
        });
        $("#RookieDoce").click(function() {

                $("#RookieDoce").css("border-color","red");

        });
    
  });

  // Dificultad Dificil
       $( "#button-addon5").click(function() {


        $("#section-three").slideUp(500);
        $("#section-four").css('display', 'flex').show();
        $("#Preguno").slideUp(500);
        $("#Pregdos").slideUp(500);
        $("#Pregtres").slideUp(500);
        
        //Pregunta 1
        $("#btn-preg-uno").click(function(){
                var pregUno = ($("#input-uno").val());
               if (pregUno === "Ethereum" || pregUno === "ethereum"){
                $("#section-four").delay(100).slideUp(500);
                $("#section-five").css('display', 'flex').show();  
               }
               else {
                $("#input-uno").css('border-color', 'red')
               }
               });       

        // Pregunta 2
        $("#btn-preg-dos").click(function(){
                var pregDos = ($("#input-dos").val());
               if (pregDos === "21.000.000" || pregDos === "Ventiun Millones" || pregDos === "Ventiún Millones" || pregDos === "ventiun millones" || pregDos === "ventiun Millones" || pregDos ==="Ventiun millones"){
                $("#section-five").delay(100).slideUp(500);
                $("#section-six").css('display', 'flex').show();  
               }
               else {
                $("#input-dos").css('border-color', 'red')
               }
               });    

        // Pregunta 3
        $("#btn-preg-tres").click(function(){
                var pregTres = ($("#input-tres").val());
               if (pregTres === "Dogecoin" || pregTres === "dogecoin"){
                $("#section-six").delay(100).slideUp(500);
                $("#section-seven").css('display', 'flex').show();  
               }
               else {
                $("#input-dos").css('border-color', 'red')
               }
               });    
  });
  
        // Modal
        
        if(intentos >= 2){

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

        if(intentos >= 2){

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

        
        if(intentos >= 2){

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

                $("#section-seven").delay(100).slideUp(500);
                $("#section-one").css('display', 'flex').show();

        });


        // Usuario ganador
        
        $("#user-win").html(`, ganaste!`);

        
 });