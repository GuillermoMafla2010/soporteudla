-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-07-2019 a las 19:45:21
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
-- Base de datos: `soporteusuariosudla`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documentos_adjuntos`
--

CREATE TABLE `documentos_adjuntos` (
  `iddocumetos_adjuntos` int(11) NOT NULL,
  `nombre_documento` varchar(100) NOT NULL,
  `id_requerimiento` int(11) DEFAULT NULL,
  `id_incidencia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `documentos_adjuntos`
--

INSERT INTO `documentos_adjuntos` (`iddocumetos_adjuntos`, `nombre_documento`, `id_requerimiento`, `id_incidencia`) VALUES
(2, 'scanner.pdf', NULL, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `idestado` int(11) NOT NULL,
  `descripcion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`idestado`, `descripcion`) VALUES
(5, 'Abierto'),
(6, 'En proceso'),
(7, 'En espera'),
(8, 'Cerrado'),
(9, 'Resuelto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidencia`
--

CREATE TABLE `incidencia` (
  `idincidencia` int(11) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `idusuario` int(11) NOT NULL,
  `idestado` int(11) NOT NULL,
  `idtecnico` int(11) NOT NULL,
  `idsede` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `incidencia`
--

INSERT INTO `incidencia` (`idincidencia`, `descripcion`, `idusuario`, `idestado`, `idtecnico`, `idsede`) VALUES
(3, 'No funciona el Banner', 6, 5, 7, 2),
(4, 'No funciona la impresora', 8, 5, 9, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `requerimientos`
--

CREATE TABLE `requerimientos` (
  `idrequerimientos` int(11) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `idestado` int(11) NOT NULL,
  `idtecnico` int(11) NOT NULL,
  `idusuario` int(11) NOT NULL,
  `idsede` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `requerimientos`
--

INSERT INTO `requerimientos` (`idrequerimientos`, `descripcion`, `idestado`, `idtecnico`, `idusuario`, `idsede`) VALUES
(3, 'Evento del dia del ingeniero', 5, 5, 4, 1),
(4, 'Evento cultural de la Facultad de Periodismo', 5, 4, 5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `idrol` int(11) NOT NULL,
  `nombre_rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`idrol`, `nombre_rol`) VALUES
(3, 'Administrador'),
(4, 'Mesa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sede`
--

CREATE TABLE `sede` (
  `idsede` int(11) NOT NULL,
  `nombre_sede` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sede`
--

INSERT INTO `sede` (`idsede`, `nombre_sede`) VALUES
(1, 'UdlaPark'),
(2, 'Granados'),
(3, 'Colon'),
(4, 'Query'),
(5, 'Granja Nono');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnicos`
--

CREATE TABLE `tecnicos` (
  `idtecnico` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `idsede` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tecnicos`
--

INSERT INTO `tecnicos` (`idtecnico`, `nombre`, `idsede`) VALUES
(3, 'David Proaño', 1),
(4, 'Cristian Jativa', 1),
(5, 'Pablo Goyes', 1),
(6, 'Wilson Charro', 1),
(7, 'Christian Carrasco', 2),
(8, 'Paul Alvarez', 2),
(9, 'Julio Baquero', 2),
(10, 'Jose Obando', 4),
(11, 'Frnacisco Lema', 4),
(12, 'Daniel Alvarez', 4),
(13, 'Carlos Montenegro', 5),
(14, 'Xavier Villaquiran', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usuarioid` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usuarioid`, `nombre`) VALUES
(3, 'Ana Maria Ariza'),
(4, 'Gabriela Charro'),
(5, 'Xavier Jaramillo'),
(6, 'Dario Villaruel'),
(7, 'Daniel Rosero'),
(8, 'Maria Jose Cabrera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_roles`
--

CREATE TABLE `usuarios_roles` (
  `idusuarios_roles` int(11) NOT NULL,
  `rolid` int(11) NOT NULL,
  `usuarioid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios_roles`
--

INSERT INTO `usuarios_roles` (`idusuarios_roles`, `rolid`, `usuarioid`) VALUES
(3, 4, 7),
(4, 4, 6),
(5, 4, 4),
(6, 4, 8),
(7, 4, 5),
(8, 3, 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `documentos_adjuntos`
--
ALTER TABLE `documentos_adjuntos`
  ADD PRIMARY KEY (`iddocumetos_adjuntos`),
  ADD KEY `id_requerimiento` (`id_requerimiento`),
  ADD KEY `id_incidencia` (`id_incidencia`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`idestado`);

--
-- Indices de la tabla `incidencia`
--
ALTER TABLE `incidencia`
  ADD PRIMARY KEY (`idincidencia`),
  ADD KEY `idusuario` (`idusuario`),
  ADD KEY `idestado` (`idestado`),
  ADD KEY `idtecnico` (`idtecnico`),
  ADD KEY `idsede` (`idsede`);

--
-- Indices de la tabla `requerimientos`
--
ALTER TABLE `requerimientos`
  ADD PRIMARY KEY (`idrequerimientos`),
  ADD KEY `idestado` (`idestado`),
  ADD KEY `idtecnico` (`idtecnico`),
  ADD KEY `idusuario` (`idusuario`),
  ADD KEY `idsede` (`idsede`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`idrol`);

--
-- Indices de la tabla `sede`
--
ALTER TABLE `sede`
  ADD PRIMARY KEY (`idsede`);

--
-- Indices de la tabla `tecnicos`
--
ALTER TABLE `tecnicos`
  ADD PRIMARY KEY (`idtecnico`),
  ADD KEY `idsede` (`idsede`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuarioid`);

--
-- Indices de la tabla `usuarios_roles`
--
ALTER TABLE `usuarios_roles`
  ADD PRIMARY KEY (`idusuarios_roles`),
  ADD KEY `rolid` (`rolid`),
  ADD KEY `usuarioid` (`usuarioid`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `documentos_adjuntos`
--
ALTER TABLE `documentos_adjuntos`
  MODIFY `iddocumetos_adjuntos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `idestado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `incidencia`
--
ALTER TABLE `incidencia`
  MODIFY `idincidencia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `requerimientos`
--
ALTER TABLE `requerimientos`
  MODIFY `idrequerimientos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `idrol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `sede`
--
ALTER TABLE `sede`
  MODIFY `idsede` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `tecnicos`
--
ALTER TABLE `tecnicos`
  MODIFY `idtecnico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuarioid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `usuarios_roles`
--
ALTER TABLE `usuarios_roles`
  MODIFY `idusuarios_roles` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `documentos_adjuntos`
--
ALTER TABLE `documentos_adjuntos`
  ADD CONSTRAINT `documentos_adjuntos_ibfk_1` FOREIGN KEY (`id_incidencia`) REFERENCES `incidencia` (`idincidencia`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `documentos_adjuntos_ibfk_2` FOREIGN KEY (`id_requerimiento`) REFERENCES `requerimientos` (`idrequerimientos`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `incidencia`
--
ALTER TABLE `incidencia`
  ADD CONSTRAINT `incidencia_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`usuarioid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `incidencia_ibfk_2` FOREIGN KEY (`idestado`) REFERENCES `estado` (`idestado`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `incidencia_ibfk_3` FOREIGN KEY (`idtecnico`) REFERENCES `tecnicos` (`idtecnico`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `incidencia_ibfk_4` FOREIGN KEY (`idsede`) REFERENCES `sede` (`idsede`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `requerimientos`
--
ALTER TABLE `requerimientos`
  ADD CONSTRAINT `requerimientos_ibfk_1` FOREIGN KEY (`idtecnico`) REFERENCES `tecnicos` (`idtecnico`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `requerimientos_ibfk_2` FOREIGN KEY (`idestado`) REFERENCES `estado` (`idestado`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `requerimientos_ibfk_3` FOREIGN KEY (`idsede`) REFERENCES `sede` (`idsede`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `requerimientos_ibfk_4` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`usuarioid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tecnicos`
--
ALTER TABLE `tecnicos`
  ADD CONSTRAINT `tecnicos_ibfk_1` FOREIGN KEY (`idsede`) REFERENCES `sede` (`idsede`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios_roles`
--
ALTER TABLE `usuarios_roles`
  ADD CONSTRAINT `usuarios_roles_ibfk_1` FOREIGN KEY (`rolid`) REFERENCES `roles` (`idrol`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuarios_roles_ibfk_2` FOREIGN KEY (`usuarioid`) REFERENCES `usuarios` (`usuarioid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
