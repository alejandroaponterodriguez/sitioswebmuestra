$(document).ready(function(){

    $("#formulario").submit(function(e){

        e.preventDefault();

        let datosFormularios = {

            usuario:$("#usu").val(),
            contra:$("#con").val()

        }

        $.post("login.php", datosFormularios, procesarDatos).error(manejoErrores);
        

        //let datosFormularios = $(this).serialize();

        console.log(datosFormularios);

        //$.get("login.php", datosFormularios, procesarDatos);

    });

    function procesarDatos(datosEnviados){

        alert(datosEnviados);

        if(datosEnviados == "autorizado"){

            $("#respuesta").html("<p>Usuairo autorizado, Bienvenido nuevamente</p>");

        }else{

            $("#respuesta").html("<p> Usuairo No autorizado</p>");

        }

        

    };

    function manejoErrores(){

        let errorRecibido = "Ooopp!!, no se puedo acceder al login";

        $("#respuesta").html("<p>" + errorRecibido + "</p>");

    };

    


});