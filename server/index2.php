<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function conectar(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "peluqueria";

    $db = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $db;
}

if (isset($_GET['recurso']) && !empty($_GET['recurso'])){
    $recurso = explode('/', $_GET['recurso']);
    switch ($recurso[0]) {
        case 'productos':
            if (!isset($recurso[1])){
                switch ($_SERVER['REQUEST_METHOD']){
                    case 'GET':
                        switch ($_SERVER['HTTP_ACCEPT']){
                            case 'application/json':
                            default:
                                $pdo = conectar();

                                $stmt = $pdo->prepare("SELECT * FROM productos");
                                $stmt->execute();

                                $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

                                echo json_encode($result);
                            break;
                        }
                        break;
                    default:
                        header("HTTP/1.1 405 Method not allowed");
                        exit();
                    break;
                }
            }
            else if (!isset($recurso[3])){
                if (is_numeric($recurso[2])){
                    switch ($_SERVER['REQUEST_METHOD']){
                        case 'PUT':

                            $pdo = conectar();
                            $datos = json_decode(file_get_contents('php://input'));

                            $id = intval($recurso[1]);
                            
                            $stmt = $pdo->prepare("UPDATE productos SET nombreProducto = :nombre, descripcionProducto = :descripcion, precioProducto = :precio, rutaImagenProducto = :ruta, idTipoProducto = :idTipoProducto
                                                    WHERE idProducto = $id");

                            $stmt->bindParam(':nombre', $datos->nombreProducto);
                            $stmt->bindParam(':descripcion', $datos->descripcionProducto);
                            $stmt->bindParam(':precio', $datos->precioProducto);
                            $stmt->bindParam(':ruta', $datos->rutaImagenProducto);
                            $stmt->bindParam(':idTipoProducto', $datos->idTipoProducto);

                            $stmt->execute();

                            echo "Se han editado los campos correctamente";
                            break;
                        case 'DELETE':
                            $pdo = conectar();
                            $id = intval($recurso[1]);
                        
                            $stmt = $pdo->prepare("DELETE FROM productos WHERE idProducto = $id");
                            $stmt->execute();
                        
                            echo "El producto $id ha sido eliminado correctamente.";
                            break;
                        case 'GET':
                            $pdo = conectar();
                            $id = intval($recurso[1]);
                            $stmt = $pdo->prepare("SELECT * FROM productos WHERE idProducto = $id");
                            $stmt->execute();

                            $result = $stmt->fetch(PDO::FETCH_ASSOC);

                            if ( $result )
                            {
                                echo json_encode($result);
                            }
                            else
                            {
                                header("HTTP/1.1 404 Not found");
                                exit();
                            }

                            break;
                        default:
                            header("HTTP/1.1 405 Method not allowed");
                            exit();
                        break;
                    }
                }
                else{
                    switch ($recurso[1]){
                        case 'POST':

                            $nombre = isset($_POST['nombreProducto']) ? $_POST['nombreProducto'] : '';
                            $descripcion = isset($_POST['descripcionProducto']) ? $_POST['descripcionProducto'] : '';
                            $precio = isset($_POST['precioProducto']) ? $_POST['precioProducto'] : '';
                            $ruta = isset($_POST['rutaImagenProducto']) ? $_POST['rutaImagenProducto'] : '';
                            $idTipoProducto = isset($_POST['idTipoProducto']) ? $_POST['idTipoProducto'] : '';
    
                            $pdo = conectar();
    
                            $stmt = $pdo->prepare("INSERT INTO productos(nombreProducto, descripcionProducto, precioProducto, rutaImagenProducto, idTipoProducto) 
                                                    VALUES (:nombre, :descripcion, :precio, :ruta, :idTipoProducto)");
                            $stmt->bindParam(':nombre', $nombre);
                            $stmt->bindParam(':descripcion', $descripcion);
                            $stmt->bindParam(':precio', $precio);
                            $stmt->bindParam(':ruta', $ruta);
                            $stmt->bindParam(':idTipoProducto', $idTipoProducto);
                            $stmt->execute();
    
                            echo "Se han añadido los campos";
                            break;
                        default:
                            header("HTTP/1.1 400 Bad Request");
                            exit();
                            break;
                    }
                }
            }
            break;
        case 'usuarios':
            if (!isset($recurso[1])){
                switch ($_SERVER['REQUEST_METHOD']){
                    case 'POST':

                        $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
                        $apellidos = isset($_POST['apellidos']) ? $_POST['apellidos'] : '';
                        $telefono = isset($_POST['telefono']) ? $_POST['telefono'] : '';
                        $email = isset($_POST['email'])? $_POST['email'] : '';
                        $cp = isset($_POST['cp']) ? $_POST['cp'] : '';
                        $fechaNac = isset($_POST['fechaNac']) ? $_POST['fechaNac'] : '';
                        $idTipoUsuario = isset($_POST['idTipoUsuario']) ? $_POST['idTipoUsuario'] : '';

                        $pdo = conectar();

                        $stmt = $pdo->prepare("INSERT INTO usuarios(nombre, apellidos, telefono, email, cp, fechaNac, idTipoUsuario) 
                                                VALUES (:nombre, :apellidos, :telefono, :email, :cp, :fechaNac, :idTipoUsuario)");
                        $stmt->bindParam(':nombre', $nombre);
                        $stmt->bindParam(':apellidos', $apellidos);
                        $stmt->bindParam(':telefono', $telefono);
                        $stmt->bindParam(':email', $email);
                        $stmt->bindParam(':cp', $cp);
                        $stmt->bindParam(':fechaNac', $fechaNac);
                        $stmt->bindParam(':idTipoUsuario', $idTipoUsuario);
                        $stmt->execute();

                        echo "Se han añadido los campos";
                        break;
                    case 'GET':
                        switch ($_SERVER['HTTP_ACCEPT']){
                            case 'application/json':
                            default:
                                $pdo = conectar();

                                $stmt = $pdo->prepare("SELECT * FROM usuarios");
                                $stmt->execute();

                                $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

                                echo json_encode($result);
                            break;
                        }
                        break;
                    default:
                        header("HTTP/1.1 405 Method not allowed");
                        exit();
                    break;
                }
            }else if (!isset($recurso[2])){
                if (is_numeric($recurso[1])){
                    switch ($_SERVER['REQUEST_METHOD']){
                        case 'PUT':

                            $datos = json_decode(file_get_contents('php://input'));
                            $pdo = conectar();

                            $id = intval($recurso[1]);

                            $stmt = $pdo->prepare("UPDATE usuarios SET nombre = :nombre, apellidos = :apellidos, telefono = :telefono, email = :email, cp = :cp, fechaNac = :fechaNac, idTipoUsuario = :idTipoUsuario
                                                    WHERE idUsuario = $id");

                            $stmt->bindParam(':nombre', $datos->nombre);
                            $stmt->bindParam(':apellidos', $datos->apellidos);
                            $stmt->bindParam(':telefono', $datos->telefono);
                            $stmt->bindParam(':email', $datos->email);
                            $stmt->bindParam(':cp', $datos->cp);
                            $stmt->bindParam(':fechaNac', $datos->fechaNac);
                            $stmt->bindParam(':idTipoUsuario', $datos->idTipoUsuario);

                            $stmt->execute();

                            echo "Se han editado los campos correctamente";
                            break;
                        case 'DELETE':
                            $pdo = conectar();
                            $id = intval($recurso[1]);
                        
                            $stmt = $pdo->prepare("DELETE FROM usuarios WHERE idUsuario = $id");
                            $stmt->execute();
                        
                            echo "El usuario $id ha sido eliminado correctamente.";
                            break;
                        case 'GET':
                            $pdo = conectar();
                            $id = intval($recurso[1]);
                            $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE idUsuario = $id");
                            $stmt->execute();

                            $result = $stmt->fetch(PDO::FETCH_ASSOC);

                            if ( $result )
                            {
                                echo json_encode($result);
                            }
                            else
                            {
                                header("HTTP/1.1 404 Not found");
                                exit();
                            }

                            break;
                        default:
                            header("HTTP/1.1 405 Method not allowed");
                            exit();
                        break;
                    }
                }
                else{
                    switch ($recurso[1]){
                        default:
                            header("HTTP/1.1 400 Bad Request");
                            exit();
                            break;
                    }
                }
            }
            break;
        default:
            header("HTTP/1.1 400 Bad request");
            exit();
            break;
    }
}
else{
    header("HTTP/1.1 400 Bad request");
    exit();
}

