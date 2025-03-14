$(document).ready(function(){

    $("#formulario").submit(function(e){

        e.preventDefault();

        let datosFormularios = {

            usuario:$("#usu").val(),
            contra:$("#con").val()

        }

        $.post("login.php", datosFormularios, procesarDatos);

        //let datosFormularios = $(this).serialize();

        console.log(datosFormularios);

        $.get("login.php", datosFormularios, procesarDatos);

    });

    function procesarDatos(datosEnviados){

        if(datosEnviados == "autorizado"){

            $("#respuesta").html("<p>Usuairo autorizado, Bienvenido nuevamente</p>");

        }else{

            $("#respuesta").html("<p> Usuairo No autorizado</p>");

        }

        

    };

    


});