<?php
/*
$usuario_entrada = "Solersi";
$contrase_entrada = "1234";

$usuario_enviado = $_POST['usuario'];
$contra_enviado = $_POST['contra'];

/*$usuario_enviado = isset($_POST['usuario']) ? $_POST['usuario'] : "NO Existe usuario";
$contra_enviado = isset($_POST['contra']) ? $_POST['contra'] : "No existe contraseña";*/

/*if( $usuario_enviado == $usuario_entrada && $contra_enviado == $contrase_entrada){

    echo "autorizado";

}else{

    echo "fallo";
}*/


$usuario_entrada = "Solersi";
$contrase_entrada = "1234";

$usuario_enviado = $_GET['usuario'];
$contra_enviado = $_GET['contra'];

echo "Usuario enviado: " . $usuario_enviado . "<br>";
echo "Contraseña enviada: " . $contra_enviado . "<br>";

if ($usuario_enviado == $usuario_entrada && $contra_enviado == $contrase_entrada) {
    echo "autorizado";
} else {
    echo "fallo";
}



?>