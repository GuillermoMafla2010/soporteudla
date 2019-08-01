-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-07-2019 a las 20:27:32
-- Versión del servidor: 10.1.25-MariaDB
-- Versión de PHP: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `soporteudla`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adjuntos`
--

CREATE TABLE `adjuntos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `incidencias_id` int(11) DEFAULT NULL,
  `requerimientos_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `adjuntos`
--

INSERT INTO `adjuntos` (`id`, `nombre`, `incidencias_id`, `requerimientos_id`) VALUES
(7, '1563843863a4.pdf', NULL, 11),
(8, '1563941264a4.pdf', NULL, 12),
(9, '1564000731certificados de votacion.pdf', NULL, 13),
(10, '', NULL, 14),
(11, '', NULL, 15),
(12, '', NULL, 16),
(13, '', NULL, 17);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `sede_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `sede_id`) VALUES
(1, 'Carlos Larreategui', 1),
(2, 'Juan Freire', 1),
(3, 'Angel Jaramillo', 2),
(4, 'Xavier Pazmiño', 4),
(5, 'Adrian Briceño', 3),
(6, 'Xavier Rosas', 3),
(7, 'Rodrigo Caizaluisa', 3),
(8, 'Giovanny Mosquera', 3),
(9, 'David Robalino', 4),
(10, 'Pepe Grillo', 4),
(11, 'Tito Montana', 4),
(12, 'Benito Camelas', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados`
--

CREATE TABLE `estados` (
  `id` int(11) NOT NULL,
  `nombre_estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estados`
--

INSERT INTO `estados` (`id`, `nombre_estado`) VALUES
(1, 'En Espera'),
(2, 'En Proceso'),
(3, 'Cerrado'),
(4, 'Resuelto'),
(5, 'Abierto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidencias`
--

CREATE TABLE `incidencias` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `estado_id` int(11) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `solucion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `incidencias`
--

INSERT INTO `incidencias` (`id`, `descripcion`, `user_id`, `estado_id`, `cliente_id`, `solucion`) VALUES
(1, 'Daño en computadora', 8, 2, 6, ''),
(2, 'Favor de conectar la impresora del señor rector para imprimir documentos tipo carta , adicional verificar el correcto funcionamiento del proyector', 6, 5, 1, ''),
(3, 'Falta mouse en el laborarorio 563 y 564 y 565 y 566 y 567 , gracias', 10, 4, 3, 'Se procedio con la instalacion de las computadoras en los laboratorios descritos'),
(4, 'No hay internet,por favor , gracias', 13, 2, 12, ''),
(5, 'Revision del computador de Diego Paredes , urgente Query.', 10, 4, 3, 'ok'),
(6, 'No recivo correos electronicos', 15, 4, 2, 'Se comprobo el problema y se lo soluciono correctamente'),
(7, 'No recivo correos electronicos', 6, 5, 1, ''),
(8, 'No enciende el equipo', 15, 5, 1, ''),
(9, 'Por favor su ayuda en la facultad de Arquitectura , el internet esta lento', 10, 4, 3, 'ok'),
(10, 'Revisar proyector aula 116', 10, 4, 3, 'ok'),
(11, 'Revisar proyector aula 117', 10, 4, 3, 'ok'),
(12, 'Revisar proyector aula 118', 10, 2, 3, ''),
(13, 'Revisar proyector aula 119', 10, 4, 3, 'ok'),
(14, 'Revisar proyector aula 120', 10, 4, 3, 'ok'),
(15, 'Revisar proyector aula 121', 10, 4, 3, 'ok'),
(16, 'Revisar proyector aula 122', 10, 4, 3, 'ok'),
(17, 'Revisar compùtaodra de ANita Yanez', 10, 4, 3, 'ok'),
(18, 'Revisar compùtaodra de Marco Galarza', 10, 2, 3, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `requerimientos`
--

CREATE TABLE `requerimientos` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `estado_id` int(11) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `solucion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `requerimientos`
--

INSERT INTO `requerimientos` (`id`, `descripcion`, `user_id`, `estado_id`, `cliente_id`, `solucion`) VALUES
(11, 'Por favor su ayuda con la instalacion de una impresora en cajas', 15, 2, 1, ''),
(12, 'Se necesita instalar 16 computadores en la facultad de medicina', 5, 2, 7, ''),
(13, 'Por favor su ayuda con la instalacion de un plooter en la facultad de Odontologia piso 3 a lado de colegio Andino , muchas gracias, de nada', 12, 5, 4, ''),
(14, 'Se solicita prestamo de Laptop para William Villegas', 10, 2, 3, ''),
(15, 'Se solicita prestamo de Laptop para Anita Yanez', 10, 5, 3, ''),
(16, 'Se solicita prestamo de Laptop para Julio Cesar Caiza', 10, 2, 3, ''),
(17, 'Se solicita prestamo de Laptop para David Pozo', 10, 2, 3, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre_rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre_rol`) VALUES
(1, 'Administrador'),
(2, 'Mesa'),
(3, 'Tecnico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles_user`
--

CREATE TABLE `roles_user` (
  `id` int(11) NOT NULL,
  `roles_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `roles_user`
--

INSERT INTO `roles_user` (`id`, `roles_id`, `user_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 2, 3),
(4, 3, 4),
(5, 3, 5),
(6, 3, 6),
(7, 3, 7),
(8, 3, 8),
(9, 1, 9),
(10, 3, 10),
(11, 3, 11),
(12, 3, 12),
(13, 3, 13),
(14, 1, 14),
(15, 3, 15),
(16, 2, 16),
(17, 2, 17);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sedes`
--

CREATE TABLE `sedes` (
  `id` int(11) NOT NULL,
  `nombre_sede` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sedes`
--

INSERT INTO `sedes` (`id`, `nombre_sede`) VALUES
(1, 'Granados'),
(2, 'Query'),
(3, 'UdlaPark'),
(4, 'Colon'),
(5, 'Granja Nono');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `sede_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `email`, `password`, `sede_id`) VALUES
(1, 'Ana Maria Ariza Suarez', 'ana@hotmail.com', '0', 1),
(2, 'Xavier Jaramillo', 'xavier@hotmail.com', '0', 1),
(3, 'Dario Villaruel', 'dario@hotmail.com', '0', 1),
(4, 'David Proaño Naranjo', 'deivid@hotmail.com', '0', 3),
(5, 'David Charro', 'charrin@hotmail.com', '0', 3),
(6, 'Christian Carrasco', 'charrin@hotmail.com', '0', 1),
(7, 'Cristian Jativa', 'cristian@hotmail.com', '0', 3),
(8, 'Pablo Goyes', 'pablo@hotmail.com', '0', 3),
(9, 'Dario Villamarin', 'dario@hotmail.com', '$2y$10$axLTEoVpvXElCrrD32bddu7sdPACPWbZ1RYcVZzeZCJkdkWqSh.TC', 1),
(10, 'Miguel Lema', 'miguel@hotmail.com', '$2y$10$IpJU376xqBQDkfzcD2Wwo.tsTci.gJPl4l9Q4EK7DZifJhA4r7196', 2),
(11, 'Jose Obando', 'jose@hotmail.com', '$2y$10$4rEV1dkBTEJURNtcmoKxzuBQefX1bIV0N67jcb0fmMTtLiIOo0PXK', 2),
(12, 'Francisco Espin', 'pancho@hotmail.com', '$2y$10$C01lu1n.ImslmRPhcS3VHuQQ7a8uXMR2Hzd0.1F3GEUn6f0C7mhNq', 4),
(13, 'Carlos Montenegro', 'carlos@hotmail.com', '$2y$10$HKL81szUWbuLqESGs29VC.DIswcDm8jCKBSwDeYhWLnX4QQhZCUwC', 5),
(14, 'Damian Risueño', 'damian@hotmail.com', '$2y$10$hTxzzjMWP8.xLb/sTv26LOec.LMA7PFEHD5vgUeVNX1iieb8uHGya', 1),
(15, 'Julio Baquero', 'julio@hotmail.com', '$2y$10$Md1QYfDv5ztXKSHVQkiMQ.KzH/pM8AfiT79h/5Bgigeb4yJGzEMNi', 1),
(16, 'Daniel Rosero', 'daniel@hotmail.com', '$2y$10$IKxXWiHFFq1foBgSjzJCcOt0pzwzEpWyUYf/U/BLlCcfpjeOJw2BS', 3),
(17, 'Gabrilea Charro', 'gabriela@hotmail.com', '$2y$10$iCsx6Y8ViSui.z/J/b1KgOuAWdqBFoIouRhnizu1FrpQDrSR5OIB6', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `adjuntos`
--
ALTER TABLE `adjuntos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `incidencias_id` (`incidencias_id`),
  ADD KEY `requerimientos_id` (`requerimientos_id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sede_id` (`sede_id`);

--
-- Indices de la tabla `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `incidencias`
--
ALTER TABLE `incidencias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `estado_id` (`estado_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `cliente_id` (`cliente_id`);

--
-- Indices de la tabla `requerimientos`
--
ALTER TABLE `requerimientos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `estado_id` (`estado_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `cliente_id` (`cliente_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles_user`
--
ALTER TABLE `roles_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `roles_id` (`roles_id`);

--
-- Indices de la tabla `sedes`
--
ALTER TABLE `sedes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sede_id` (`sede_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `adjuntos`
--
ALTER TABLE `adjuntos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT de la tabla `estados`
--
ALTER TABLE `estados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `incidencias`
--
ALTER TABLE `incidencias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT de la tabla `requerimientos`
--
ALTER TABLE `requerimientos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `roles_user`
--
ALTER TABLE `roles_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT de la tabla `sedes`
--
ALTER TABLE `sedes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `adjuntos`
--
ALTER TABLE `adjuntos`
  ADD CONSTRAINT `adjuntos_ibfk_1` FOREIGN KEY (`incidencias_id`) REFERENCES `incidencias` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `adjuntos_ibfk_2` FOREIGN KEY (`requerimientos_id`) REFERENCES `requerimientos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`sede_id`) REFERENCES `sedes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `incidencias`
--
ALTER TABLE `incidencias`
  ADD CONSTRAINT `incidencias_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `incidencias_ibfk_2` FOREIGN KEY (`estado_id`) REFERENCES `estados` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `incidencias_ibfk_3` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `requerimientos`
--
ALTER TABLE `requerimientos`
  ADD CONSTRAINT `requerimientos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `requerimientos_ibfk_2` FOREIGN KEY (`estado_id`) REFERENCES `estados` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `requerimientos_ibfk_3` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `roles_user`
--
ALTER TABLE `roles_user`
  ADD CONSTRAINT `roles_user_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `roles_user_ibfk_2` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`sede_id`) REFERENCES `sedes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
