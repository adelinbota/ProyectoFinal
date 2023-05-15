<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonProducto = json_decode(file_get_contents("php://input"));
if (!$jsonProducto) {
    echo json_encode(["error" => "No hay datos"]);
    exit();
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("INSERT INTO productos (nombreProducto, descripcionProducto, precioProducto, rutaImagenProducto, idTipoProducto) VALUES (?,?,?,?,?)");
$resultado = $sentencia->execute([$jsonProducto->nombreProducto, $jsonProducto->descripcionProducto, $jsonProducto->precioProducto, $jsonProducto->rutaImagenProducto, $jsonProducto->idTipoProducto]);
echo json_encode([
    "resultado" => $resultado,
]);