<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idProducto"])) {
    exit("No hay id de producto");
}
$idProducto = $_GET["idProducto"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("SELECT * from productos where idProducto = $idProducto");
$sentencia->execute();
$producto = $sentencia->fetchObject();
echo json_encode($producto);