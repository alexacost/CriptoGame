 $(document).ready(function(){
// Ocultar sección 1 para mostrar la 2

     $("#button-addon").click(function(){
         $("#section-one").hide();
         $("#section-two").css('display', 'flex').show();
       });



// Guardamos la variable del nombre, chequeamos si es letra y ocultamos la sección 2 para mostrar las 3

$("#button-addon2").click(function(){
   var nombre = ($("input:text").val());
   if (isNaN(nombre)) {
        $("#section-two").hide();
        $("#section-three").css('display', 'flex').show();
        document.getElementById("nombre-user").innerHTML = nombre; // Imprimimos el nombre dentro del HTML
   }
   else {
       alert("eh macho flasheaste")
   }
  });

  //Dificultad Facil

  $( "#button-addon3").click(function() {


        $("#section-three").hide();
        $("#section-four").css('display', 'flex').show();
        
        //Pregunta 1

        $("#RookieUno").click(function() {

                    $("#section-four").delay(100).hide(100);
                    $("#section-five").css('display', 'flex').show();
                    $("#RookieUno").css("border-color","green");

        });
        $("#RookieDos").click(function() {
                $("#RookieDos").css("border-color","red");
        });
        $("#RookieTres").click(function() {

                $("#RookieTres").css("border-color","red");

        });

        // Pregunta 2

        $("#RookieCuatro").click(function() {


                    $("#section-five").delay(100).hide(100);
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

                    $("#section-six").delay(100).hide(100);
                    $("#section-nosabemos").css('display', 'flex').show();
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


        $("#section-three").hide();
        $("#section-four").css('display', 'flex').show();
        $("#RookieDiez").show();
        $("#RookieOnce").show();
        $("#RookieDoce").show();

        
        //Pregunta 1

        $("#RookieUno").click(function() {

                    $("#section-four").delay(100).hide(100);
                    $("#section-five").css('display', 'flex').show();
                    $("#RookieUno").css("border-color","green");

        });
        $("#RookieDos").click(function() {
                $("#RookieDos").css("border-color","red");
        });
        $("#RookieTres").click(function() {

                $("#RookieTres").css("border-color","red");

        });
        $("#RookieDiez").click(function() {

                $("#RookieDiez").css("border-color","red");

        });

        // Pregunta 2

        $("#RookieCuatro").click(function() {


                    $("#section-five").delay(100).hide(100);
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

                    $("#section-six").delay(100).hide(100);
                    $("#section-nosabemos").css('display', 'flex').show();
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


        $("#section-three").hide();
        $("#section-four").css('display', 'flex').show();
        $("#Preguno").hide();
        
        //Pregunta 1


        // Pregunta 2


        // Pregunta 3
    
  });
    

 });