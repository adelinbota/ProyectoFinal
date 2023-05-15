<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonProducto = json_decode(file_get_contents("php://input"));
if (!$jsonProducto) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("UPDATE productos SET nombreProducto = ?, descripcionProducto = ?, precioProducto = ?, rutaImagenProducto = ?, idTipoProducto = ? WHERE idProducto = ?");
$resultado = $sentencia->execute([$jsonProducto->nombreProducto, $jsonProducto->descripcionProducto, $jsonProducto->precioProducto, $jsonProducto->rutaImagenProducto, $jsonProducto->idTipoProducto, $jsonProducto->idProducto]);
echo json_encode($resultado);