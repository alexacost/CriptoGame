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

  // Verificamos dificultad para saber que mostrar

  $( "#button-addon3" ).click(function() {
    var dificultad = $( this ).text();
    // Dificultad facil
    if (dificultad === "CriptoRookie") {

        $("#section-three").hide();
        $("#section-four").css('display', 'flex').show();
        
        //Pregunta 1

        $("#RookieUno").click(function() {
            var respUno = $( this ).text();
            if (respUno === "Bitcoin"){
                    $("#section-four").delay(100).hide(100);
                    $("#section-five").css('display', 'flex').show();
                    $("#RookieUno").css("border-color","green");
            }
        });
        $("#RookieDos").click(function() {
                $("#RookieDos").css("border-color","red");
        });
        $("#RookieTres").click(function() {

                $("#RookieTres").css("border-color","red");

        });

        // Pregunta 2

        $("#RookieCuatro").click(function() {
            var respCuatro = $( this ).text();
            if (respCuatro === "21.000.000"){
                    $("#section-five").delay(100).hide(100);
                    $("#section-six").css('display', 'flex').show();
                    $("#RookieCuatro").css("border-color","green");
            }
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
            if (respCinco === "Dogecoin"){
                    $("#section-six").delay(100).hide(100);
                    $("#section-seven").css('display', 'flex').show();
                    $("#RookieSiete").css("border-color","green");
            }
        });
        $("#RookieOcho").click(function() {
                $("#RookieOcho").css("border-color","red");
        });
        $("#RookieNueve").click(function() {
                $("#RookieNueve").css("border-color","red");
        });
    }
  });
    

 });