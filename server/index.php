<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Accept, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
function conectar()
{
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "peluqueria";

  $db = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  return $db;
}
if (isset($_GET['recurso']) && !empty($_GET['recurso'])) {
  $recurso = explode('/', $_GET['recurso']);
  switch ($recurso[0]) {
    case 'productos':
      if (!isset($recurso[1])) {
        switch ($_SERVER['REQUEST_METHOD']) {
          case 'POST':

            $datos = json_decode(file_get_contents('php://input'));

            $pdo = conectar();

            $stmt = $pdo->prepare("INSERT INTO productos(nombreProducto, descripcionProducto, precioProducto, rutaImagenProducto, idTipoProducto) 
                                                    VALUES (:nombre, :descripcion, :precio, :ruta, :idTipoProducto)");
            $stmt->bindParam(':nombre', $datos->nombreProducto);
            $stmt->bindParam(':descripcion', $datos->descripcionProducto);
            $stmt->bindParam(':precio', $datos->precioProducto);
            $stmt->bindParam(':ruta', $datos->rutaImagenProducto);
            $stmt->bindParam(':idTipoProducto', $datos->idTipoProducto);
            $stmt->execute();

            break;
          case 'GET':
            switch ($_SERVER['HTTP_ACCEPT']) {
              case 'application/json':
              default:
                $pdo = conectar();

                $stmt = $pdo->prepare("SELECT * FROM productos");
                $stmt->execute();

                $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

                header('Content-Type: application/json; charset=UTF-8');
                echo json_encode($result);
                break;
            }
            break;
          default:
            header("HTTP/1.1 405 Method not allowed");
            exit();
            break;
        }
      } else if (!isset($recurso[2])) {
        if (is_numeric($recurso[1])) {
          switch ($_SERVER['REQUEST_METHOD']) {
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

              header("HTTP/1.1 204 No content");
              break;
            case 'DELETE':
              $pdo = conectar();
              $id = intval($recurso[1]);

              $stmt = $pdo->prepare("DELETE FROM productos WHERE idProducto = $id");
              $stmt->execute();

              header("HTTP/1.1 204 No content");
              //echo "El producto $id ha sido eliminado correctamente.";
              break;
            case 'GET':
              $pdo = conectar();
              $id = intval($recurso[1]);
              $stmt = $pdo->prepare("SELECT * FROM productos WHERE idProducto = $id");
              $stmt->execute();

              $result = $stmt->fetch(PDO::FETCH_ASSOC);

              echo json_encode($result);

              break;
            default:
              header("HTTP/1.1 405 Method not allowed");
              exit();
              break;
          }
        } else {
          switch ($recurso[1]) {
            case 'obtenerTiposProducto':

              $pdo = conectar();

              $stmt = $pdo->prepare("SELECT * FROM tipo_producto");
              $stmt->execute();

              $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
              header('Content-Type: application/json; charset=UTF-8');
              echo json_encode($result);
              break;
            case 'activos':

              $pdo = conectar();

              $stmt = $pdo->prepare("SELECT * FROM productos WHERE activo = 1");
              $stmt->execute();

              $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
              header('Content-Type: application/json; charset=UTF-8');
              echo json_encode($result);
              break;
            default:
              header("HTTP/1.1 400 Bad Request");
              exit();
              break;
          }
        }
      } elseif (!isset($recurso[3])) {
        if (is_numeric($recurso[2])) {
          switch ($recurso[1]) {
            case 'ponerVenta':

              $pdo = conectar();

              $datos = json_decode(file_get_contents('php://input'));

              $id = intval($recurso[2]);

              $stmt = $pdo->prepare("UPDATE productos SET activo = 1 WHERE idProducto = $id");

              $stmt->execute();

              break;
            case 'quitarVenta':

              $pdo = conectar();

              $datos = json_decode(file_get_contents('php://input'));

              $id = intval($recurso[2]);

              $stmt = $pdo->prepare("UPDATE productos SET activo = 0 WHERE idProducto = $id");

              $stmt->execute();

              break;
            default:
              # code...
              break;
          }
        }
      }
      break;
    case 'usuarios':
      if (!isset($recurso[1])) {
        switch ($_SERVER['REQUEST_METHOD']) {
          case 'POST':

            $datos = json_decode(file_get_contents('php://input'));

            $pdo = conectar();

            $stmt = $pdo->prepare("INSERT INTO usuarios(username, password, nombre, apellidos, telefono, email, cp, fechaNac, idTipoUsuario) 
                                                    VALUES (:username, sha2(:contra, 256), :nombre, :apellidos, :telefono, :email, :cp, :fechaNac, :idTipoUsuario)");
            $stmt->bindParam(':username', $datos->username);
            $stmt->bindParam(':contra', $datos->password);
            $stmt->bindParam(':nombre', $datos->nombre);
            $stmt->bindParam(':apellidos', $datos->apellidos);
            $stmt->bindParam(':telefono', $datos->telefono);
            $stmt->bindParam(':email', $datos->email);
            $stmt->bindParam(':cp', $datos->cp);
            $stmt->bindParam(':fechaNac', $datos->fechaNac);
            $stmt->bindParam(':idTipoUsuario', $datos->idTipoUsuario);
            $stmt->execute();

            break;
          case 'GET':
            switch ($_SERVER['HTTP_ACCEPT']) {
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
      } else if (!isset($recurso[2])) {
        if (is_numeric($recurso[1])) {
          switch ($_SERVER['REQUEST_METHOD']) {
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

              break;
            case 'DELETE':
              $pdo = conectar();
              $id = intval($recurso[1]);

              $stmt = $pdo->prepare("DELETE FROM usuarios WHERE idUsuario = $id");
              $stmt->execute();

              break;
            case 'GET':
              $pdo = conectar();
              $id = intval($recurso[1]);
              $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE idUsuario = $id");
              $stmt->execute();

              $result = $stmt->fetch(PDO::FETCH_ASSOC);

              if ($result) {
                echo json_encode($result);
              } else {
                header("HTTP/1.1 404 Not found");
                exit();
              }

              break;
            default:
              header("HTTP/1.1 405 Method not allowed");
              exit();
              break;
          }
        } else {
          switch ($recurso[1]) {
            case 'obtenerTiposUsuario':
              $pdo = conectar();

              $stmt = $pdo->prepare("SELECT * FROM tipo_usuario");
              $stmt->execute();

              $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
              header('Content-Type: application/json; charset=UTF-8');
              echo json_encode($result);
              break;
            case 'login':

              $pdo = conectar();

              $datos = json_decode(file_get_contents('php://input'));

              $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE username = :usuario AND password = sha2(:clave,256)");
              $stmt->bindParam(':usuario', $datos->username);
              $stmt->bindParam(':clave', $datos->password);
              $stmt->execute();
              $resultado = $stmt->fetch();
              echo json_encode($resultado);
              break;
            default:
              header("HTTP/1.1 400 Bad Request");
              exit();
              break;
          }
        }
      }
      break;
    case 'servicios':
      if (!isset($recurso[1])) {
        switch ($_SERVER['REQUEST_METHOD']) {
          case 'POST':

            $datos = json_decode(file_get_contents('php://input'));

            $pdo = conectar();

            $stmt = $pdo->prepare("INSERT INTO servicios(nombre, descripcion, precio, duracion, idTipoServicio) 
                                                    VALUES (:nombre, :descripcion, :precio, :duracion, :idTipoServicio)");
            $stmt->bindParam(':nombre', $datos->nombre);
            $stmt->bindParam(':descripcion', $datos->descripcion);
            $stmt->bindParam(':precio', $datos->precio);
            $stmt->bindParam(':duracion', $datos->duracion);
            $stmt->bindParam(':idTipoServicio', $datos->idTipoServicio);
            $stmt->execute();

            break;
          case 'GET':
            switch ($_SERVER['HTTP_ACCEPT']) {
              case 'application/json':
              default:
                $pdo = conectar();

                $stmt = $pdo->prepare("SELECT * FROM servicios");
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
      } else if (!isset($recurso[2])) {
        if (is_numeric($recurso[1])) {
          switch ($_SERVER['REQUEST_METHOD']) {
            case 'PUT':

              $datos = json_decode(file_get_contents('php://input'));
              $pdo = conectar();

              $id = intval($recurso[1]);

              $stmt = $pdo->prepare("UPDATE servicios SET nombre = :nombre, descripcion = :descripcion, precio = :precio, duracion = :duracion, idTipoServicio = :idTipoServicio
                                                        WHERE idServicio = $id");

              $stmt->bindParam(':nombre', $datos->nombre);
              $stmt->bindParam(':descripcion', $datos->descripcion);
              $stmt->bindParam(':precio', $datos->precio);
              $stmt->bindParam(':duracion', $datos->duracion);
              $stmt->bindParam(':idTipoServicio', $datos->idTipoServicio);

              $stmt->execute();

              break;
            case 'DELETE':
              $pdo = conectar();
              $id = intval($recurso[1]);

              $stmt = $pdo->prepare("DELETE FROM servicios WHERE idServicio = $id");
              $stmt->execute();

              break;
            case 'GET':
              $pdo = conectar();
              $id = intval($recurso[1]);
              $stmt = $pdo->prepare("SELECT * FROM servicios WHERE idServicio = $id");
              $stmt->execute();

              $result = $stmt->fetch(PDO::FETCH_ASSOC);

              if ($result) {
                echo json_encode($result);
              } else {
                header("HTTP/1.1 404 Not found");
                exit();
              }

              break;
            default:
              header("HTTP/1.1 405 Method not allowed");
              exit();
              break;
          }
        } else {
          switch ($recurso[1]) {
            case 'obtenerTiposServicio':
              $pdo = conectar();

              $stmt = $pdo->prepare("SELECT * FROM tipo_servicio");
              $stmt->execute();

              $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
              header('Content-Type: application/json; charset=UTF-8');
              echo json_encode($result);
              break;
            default:
              header("HTTP/1.1 400 Bad Request");
              exit();
              break;
          }
        }
      }
      break;
    case 'citas':
      if (!isset($recurso[1])) {
        switch ($_SERVER['REQUEST_METHOD']) {
          case 'POST':

            $datos = json_decode(file_get_contents('php://input'));

            $pdo = conectar();

            $stmt = $pdo->prepare("INSERT INTO citas(fechaCita, horaCita, comentarios, idUsuario, idServicio) 
                                                    VALUES (:fechaCita, :horaCita, :comentarios, :idUsuario, :idServicio)");
            $stmt->bindParam(':fechaCita', $datos->fechaCita);
            $stmt->bindParam(':horaCita', $datos->horaCita);
            $stmt->bindParam(':comentarios', $datos->comentarios);
            $stmt->bindParam(':idUsuario', $datos->idUsuario);
            $stmt->bindParam(':idServicio', $datos->idServicio);
            $stmt->execute();

            break;
          case 'GET':
            switch ($_SERVER['HTTP_ACCEPT']) {
              case 'application/json':
              default:
                $pdo = conectar();

                $stmt = $pdo->prepare("SELECT * FROM citas");
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
      } else if (!isset($recurso[2])) {
        if (is_numeric($recurso[1])) {
          switch ($_SERVER['REQUEST_METHOD']) {
            case 'PUT':

              $datos = json_decode(file_get_contents('php://input'));
              $pdo = conectar();

              $id = intval($recurso[1]);

              $stmt = $pdo->prepare("UPDATE citas SET fechaCita = :fechaCita, horaCita = :horaCita, comentarios = :comentarios, idUsuario = :idUsuario, idServicio = :idServicio
                                                        WHERE idCita = $id");

              $stmt->bindParam(':fechaCita', $datos->fechaCita);
              $stmt->bindParam(':horaCita', $datos->horaCita);
              $stmt->bindParam(':comentarios', $datos->comentarios);
              $stmt->bindParam(':idUsuario', $datos->idUsuario);
              $stmt->bindParam(':idServicio', $datos->idServicio);

              $stmt->execute();

              break;
            case 'DELETE':
              $pdo = conectar();
              $id = intval($recurso[1]);

              $stmt = $pdo->prepare("DELETE FROM citas WHERE idCita = $id");
              $stmt->execute();

              break;
            case 'GET':
              $pdo = conectar();
              $id = intval($recurso[1]);
              $stmt = $pdo->prepare("SELECT * FROM citas WHERE idCita = $id");
              $stmt->execute();

              $result = $stmt->fetch(PDO::FETCH_ASSOC);

              if ($result) {
                echo json_encode($result);
              } else {
                header("HTTP/1.1 404 Not found");
                exit();
              }

              break;
            default:
              header("HTTP/1.1 405 Method not allowed");
              exit();
              break;
          }
        } else {
          switch ($recurso[1]) {
            case 'obtenerTiposServicio':
              $pdo = conectar();

              $stmt = $pdo->prepare("SELECT * FROM tipo_servicio");
              $stmt->execute();

              $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
              header('Content-Type: application/json; charset=UTF-8');
              echo json_encode($result);
              break;
            default:
              header("HTTP/1.1 400 Bad Request");
              exit();
              break;
          }
        }
      }
      break;
    case 'contactos':
      if (!isset($recurso[1])) {
        switch ($_SERVER['REQUEST_METHOD']) {
          case 'POST':

            $datos = json_decode(file_get_contents('php://input'));

            $pdo = conectar();

            $stmt = $pdo->prepare("INSERT INTO contacto(nombre, correo, mensaje, valoracion, resena) 
                                                      VALUES (:nombre, :correo, :mensaje, :valoracion, :resena)");
            $stmt->bindParam(':nombre', $datos->nombre);
            $stmt->bindParam(':correo', $datos->correo);
            $stmt->bindParam(':mensaje', $datos->mensaje);
            $stmt->bindParam(':valoracion', $datos->valoracion);
            $stmt->bindParam(':resena', $datos->resena);
            $stmt->execute();

            break;
          case 'GET':
            switch ($_SERVER['HTTP_ACCEPT']) {
              case 'application/json':
              default:
                $pdo = conectar();

                $stmt = $pdo->prepare("SELECT * FROM contacto");
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
      } else if (!isset($recurso[2])) {
        if (is_numeric($recurso[1])) {
          switch ($_SERVER['REQUEST_METHOD']) {
            case 'PUT':

              $datos = json_decode(file_get_contents('php://input'));
              $pdo = conectar();

              $id = intval($recurso[1]);

              $stmt = $pdo->prepare("UPDATE citas SET fechaCita = :fechaCita, horaCita = :horaCita, comentarios = :comentarios, idUsuario = :idUsuario, idServicio = :idServicio
                                                          WHERE idCita = $id");

              $stmt->bindParam(':fechaCita', $datos->fechaCita);
              $stmt->bindParam(':horaCita', $datos->horaCita);
              $stmt->bindParam(':comentarios', $datos->comentarios);
              $stmt->bindParam(':idUsuario', $datos->idUsuario);
              $stmt->bindParam(':idServicio', $datos->idServicio);

              $stmt->execute();

              break;
            case 'DELETE':
              $pdo = conectar();
              $id = intval($recurso[1]);

              $stmt = $pdo->prepare("DELETE FROM contacto WHERE idContacto = $id");
              $stmt->execute();

              break;
            case 'GET':
              $pdo = conectar();
              $id = intval($recurso[1]);
              $stmt = $pdo->prepare("SELECT * FROM contacto WHERE idContacto = $id");
              $stmt->execute();

              $result = $stmt->fetch(PDO::FETCH_ASSOC);

              if ($result) {
                echo json_encode($result);
              } else {
                header("HTTP/1.1 404 Not found");
                exit();
              }

              break;
            default:
              header("HTTP/1.1 405 Method not allowed");
              exit();
              break;
          }
        } else {
          switch ($recurso[1]) {
            case 'obtenerTiposServicio':
              $pdo = conectar();

              $stmt = $pdo->prepare("SELECT * FROM tipo_servicio");
              $stmt->execute();

              $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
              header('Content-Type: application/json; charset=UTF-8');
              echo json_encode($result);
              break;
              case 'activos':

                $pdo = conectar();
  
                $stmt = $pdo->prepare("SELECT * FROM contacto WHERE activo = 1");
                $stmt->execute();
  
                $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
                header('Content-Type: application/json; charset=UTF-8');
                echo json_encode($result);
                break;
            default:
              header("HTTP/1.1 400 Bad Request");
              exit();
              break;
          }
        }
      } elseif (!isset($recurso[3])) {
        if (is_numeric($recurso[2])) {
          switch ($recurso[1]) {
            case 'publicar':

              $pdo = conectar();

              $datos = json_decode(file_get_contents('php://input'));

              $id = intval($recurso[2]);

              $stmt = $pdo->prepare("UPDATE contacto SET activo = 1 WHERE idContacto = $id");

              $stmt->execute();

              break;
            case 'quitar':

              $pdo = conectar();

              $datos = json_decode(file_get_contents('php://input'));

              $id = intval($recurso[2]);

              $stmt = $pdo->prepare("UPDATE contacto SET activo = 0 WHERE idContacto = $id");

              $stmt->execute();

              break;
            default:
              # code...
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
} else {
  header("HTTP/1.1 400 Bad request");
  exit();
}
