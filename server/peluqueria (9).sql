-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-06-2023 a las 10:24:23
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `peluqueria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `idCita` int(11) NOT NULL,
  `fechaCita` date NOT NULL,
  `horaCita` time NOT NULL,
  `horaFin` time NOT NULL,
  `comentarios` varchar(255) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL,
  `idServicio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`idCita`, `fechaCita`, `horaCita`, `horaFin`, `comentarios`, `idUsuario`, `idServicio`) VALUES
(42, '2023-06-09', '09:00:00', '13:30:00', NULL, 10, 3),
(44, '2023-06-12', '12:30:00', '15:00:00', 'Salvador', NULL, 3),
(45, '2023-06-13', '10:00:00', '13:00:00', 'Cristiano Ronaldo dos Santos Aveiro\n', 32, 4),
(46, '2023-06-09', '13:30:00', '14:00:00', NULL, 32, 1),
(47, '2023-06-09', '09:00:00', '11:00:00', NULL, 32, 4),
(48, '2023-06-10', '11:00:00', '13:00:00', NULL, 10, 4),
(49, '2023-06-10', '13:30:00', '15:30:00', NULL, 1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `idContacto` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `mensaje` varchar(255) DEFAULT NULL,
  `valoracion` int(11) DEFAULT NULL,
  `resena` varchar(255) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`idContacto`, `nombre`, `correo`, `mensaje`, `valoracion`, `resena`, `activo`) VALUES
(1, 'Costel', 'coroamasteaua@steaua.ro', 'Cam nos cam gatamos', 4, 'Serviciul nu pre, dar fete frumoase', 1),
(2, 'Vecina', 'cristina.antonia@gmail.com', 'AM VREA SATI MULTUMESC FOARTE MULT DRAGA MEA SCUMPA MEA MARIA VAI SA TRAIESTI', 5, 'Vai sa-ti manc viata ta scumpa mea draga, ce frumos ti nepotul', 1),
(3, 'Bunica', NULL, '', 5, 'Cea mai frumoasa fata din lume. IOOOOOI cum mi-o facut unghile Ancuta noastra, ce frumos trebuie sa fie prietenul ei', 1),
(4, 'Mario', NULL, NULL, 2, 'Cam napotNaspa', 0),
(5, 'Paquita', NULL, NULL, 5, 'Eres la más guapa, y su chica ni te digo y el novio ya...', 1),
(6, 'Adelin', NULL, NULL, 5, 'Porque le tengo que hacer la pelota, que si no no me da pa la boda...', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operario`
--

CREATE TABLE `operario` (
  `idOperario` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `operario`
--

INSERT INTO `operario` (`idOperario`, `nombre`) VALUES
(1, 'Maria'),
(2, 'Anca');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idProducto` int(11) NOT NULL,
  `nombreProducto` varchar(40) NOT NULL,
  `descripcionProducto` varchar(500) DEFAULT NULL,
  `precioProducto` float DEFAULT NULL,
  `rutaImagenProducto` varchar(100) NOT NULL,
  `activo` tinyint(1) NOT NULL,
  `idTipoProducto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `nombreProducto`, `descripcionProducto`, `precioProducto`, `rutaImagenProducto`, `activo`, `idTipoProducto`) VALUES
(1, 'Champú Old Spice', 'Champú especial para hombres como tú, hombre.', 8.63, '../../assets/img/old_spice.jpg', 1, 1),
(2, 'Crema de manos Nivea', 'Crema de manos hombre.', 4.32, '../../assets/img/crema_manos.webp', 1, 3),
(3, 'Laca Pantene', 'Fijación de pelo ultra resistente. 48 horas de duración.', 4.19, '../../assets/img/laca_pantene.webp', 1, 1),
(4, 'Desodorante AXE', 'Combina olor, potencia y duración. 48 horas de resistencia.', 2.69, '../../assets/img/axe.jpg', 1, 3),
(5, 'Plancha', 'Ondulado y lisado perfecto para tu cabello perfecto.', 16.79, '../../assets/img/plancha.webp', 0, 1),
(6, 'Maquinilla Phillips', 'Modelo Phillips, modelo perfecto para un rasurado sin daños, por muy pedazo de bruto que seas con tu pedazo de pelambrera, y no solo estoy hablando de la cara.', 20.34, '../../assets/img/phillips.webp', 1, 2),
(7, 'Mascarilla capilar', 'Aumenta la suavidad de tu piel hasta un eliminado completo de tus arruguis.', 17.36, '../../assets/img/masc_capilar.jpg', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `idServicio` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(250) DEFAULT NULL,
  `precio` float NOT NULL,
  `duracion` time NOT NULL,
  `idTipoServicio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`idServicio`, `nombre`, `descripcion`, `precio`, `duracion`, `idTipoServicio`) VALUES
(1, 'Corte de pelo hombre', 'Corte fácil hombre', 11.5, '00:30:00', 1),
(2, 'Corte de pelo mujer', 'Corte nivel medio mujer', 20.8, '01:00:00', 1),
(3, 'Teñido de pelo', 'Elige el color de tu nuevo look, más personal que nunca.\nEl precio puede variar según el tipo de color y la longitud del pelo.', 35, '02:30:00', 1),
(4, 'Manicura simple', 'Limpieza y corte perfecto de tus uñas (manos o pies)', 30, '02:00:00', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_producto`
--

CREATE TABLE `tipo_producto` (
  `idTipoProducto` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_producto`
--

INSERT INTO `tipo_producto` (`idTipoProducto`, `nombre`) VALUES
(1, 'cabello'),
(2, 'facial'),
(3, 'corporal'),
(4, 'otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_servicio`
--

CREATE TABLE `tipo_servicio` (
  `idTipoServicio` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_servicio`
--

INSERT INTO `tipo_servicio` (`idTipoServicio`, `nombre`) VALUES
(1, 'pelo'),
(2, 'uñas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `idTipoUsuario` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`idTipoUsuario`, `nombre`) VALUES
(1, 'admin'),
(2, 'cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `username` varchar(40) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `telefono` varchar(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `cp` varchar(100) DEFAULT NULL,
  `fechaNac` date NOT NULL,
  `idTipoUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `username`, `password`, `nombre`, `apellidos`, `telefono`, `email`, `cp`, `fechaNac`, `idTipoUsuario`) VALUES
(1, 'admin', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Admin', 'Admin', '643464656', 'admin@gmail.com', '44600', '2023-03-30', 1),
(10, 'cliente', 'a60b85d409a01d46023f90741e01b79543a3cb1ba048eaefbe5d7a63638043bf', 'Manuel', 'Cáceres Artesero', '978754000', 'manolobombo@gmail.com', '62220', '1991-10-06', 2),
(31, 'bertin', '2575cc396d2022c03270569cd41e44e8944fb9ac3457bcec21bf5d0c75171baa', 'Alberto Manuel de las Horcas', 'Otero', '696323201', 'albertin@berto.com', '10022', '1980-10-26', 2),
(32, 'adelin', '5cfa0da81d678685e2a3e5f8802d5f8398d9ad1bf06a3f7aaf599524ee192ee6', 'Adelin', 'Bota', '643465789', 'adebota@gmail.com', '20030', '2000-12-12', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`idCita`),
  ADD KEY `IdUsuario` (`idUsuario`),
  ADD KEY `idServicio` (`idServicio`);

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`idContacto`);

--
-- Indices de la tabla `operario`
--
ALTER TABLE `operario`
  ADD PRIMARY KEY (`idOperario`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProducto`),
  ADD KEY `idTipoProducto` (`idTipoProducto`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`idServicio`),
  ADD KEY `idTipoServicio` (`idTipoServicio`);

--
-- Indices de la tabla `tipo_producto`
--
ALTER TABLE `tipo_producto`
  ADD PRIMARY KEY (`idTipoProducto`);

--
-- Indices de la tabla `tipo_servicio`
--
ALTER TABLE `tipo_servicio`
  ADD PRIMARY KEY (`idTipoServicio`);

--
-- Indices de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`idTipoUsuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`),
  ADD KEY `idTipoUsuario` (`idTipoUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `idCita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `idContacto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT de la tabla `operario`
--
ALTER TABLE `operario`
  MODIFY `idOperario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `idServicio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tipo_producto`
--
ALTER TABLE `tipo_producto`
  MODIFY `idTipoProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `idTipoUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `citas_ibfk_1` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `citas_ibfk_2` FOREIGN KEY (`idServicio`) REFERENCES `servicios` (`idServicio`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`idTipoProducto`) REFERENCES `tipo_producto` (`idTipoProducto`);

--
-- Filtros para la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD CONSTRAINT `servicios_ibfk_1` FOREIGN KEY (`idTipoServicio`) REFERENCES `tipo_servicio` (`idTipoServicio`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`idTipoUsuario`) REFERENCES `tipo_usuario` (`idTipoUsuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
