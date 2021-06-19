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
   }
   else {
       alert("eh macho flasheaste")
   }
  });
    

 });