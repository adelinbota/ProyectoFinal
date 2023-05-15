<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");
$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idProducto"])) {
    exit("No hay id de producto para eliminar");
}
$idProducto = $_GET["idProducto"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("DELETE FROM productos WHERE idProducto = ?");
$resultado = $sentencia->execute([$idProducto]);
echo json_encode($resultado);