$(document).ready(function(){

        var intentos = 0;
        var Rta 
               
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
                       Rta = $("#RookieUno").text();
                       intentos++;
               });
               $("#RookieTres").click(function() {
       
                       $("#RookieTres").css("border-color","red");
                       intentos++;
       
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
                      if (pregUno === "Bitcoin" || pregUno === "bitcoin"){
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
           
       
        });