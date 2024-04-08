-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema AppFacturas
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `AppFacturas` ;

-- -----------------------------------------------------
-- Schema AppFacturas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `AppFacturas` DEFAULT CHARACTER SET utf8 ;
USE `AppFacturas` ;

-- -----------------------------------------------------
-- Table `AppFacturas`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AppFacturas`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(150) NOT NULL,
  `NIF` VARCHAR(10) NOT NULL,
  `Calle` VARCHAR(100) NOT NULL,
  `Provincia` VARCHAR(45) NULL,
  `Ciudad` VARCHAR(45) NULL,
  `Código Postal` INT NULL,
  `País` VARCHAR(45) NOT NULL,
  `Teléfono` VARCHAR(12) NOT NULL,
  `Movil` VARCHAR(12) NOT NULL,
  `Correo electrónico` VARCHAR(70) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AppFacturas`.`Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AppFacturas`.`Servicios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Nombre del Servicio` VARCHAR(150) NULL,
  `Precio` DECIMAL(6,2) NULL,
  `Descripción` VARCHAR(250) NULL,
  `Información Adicional` VARCHAR(250) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AppFacturas`.`facturas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AppFacturas`.`facturas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `clientes_id` INT NOT NULL,
  `Fecha_factura` DATE NOT NULL,
  `Referencia_pago` VARCHAR(45) NOT NULL,
  `Fecha_vencimiento` DATE NOT NULL,
  `Servicio` VARCHAR(45) NOT NULL,
  `Cantidad` INT NOT NULL,
  `Precio` DECIMAL(6,2) NOT NULL,
  `Impuesto` VARCHAR(5) NOT NULL,
  `Total` DECIMAL(6,2) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_facturas_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `AppFacturas`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;




-- -----------------------------------------------------
-- Table `AppFacturas`.`clientes_has_Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AppFacturas`.`clientes_has_Servicios` (
  `clientes_id` INT NOT NULL,
  `Servicios_id` INT NOT NULL,
  PRIMARY KEY (`clientes_id`, `Servicios_id`),
  CONSTRAINT `fk_clientes_has_Servicios_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `AppFacturas`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_clientes_has_Servicios_Servicios1`
    FOREIGN KEY (`Servicios_id`)
    REFERENCES `AppFacturas`.`Servicios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



USE `AppFacturas` ;

-- -----------------------------------------------------
-- Placeholder table for view `AppFacturas`.`view1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AppFacturas`.`view1` (`id` INT);

-- -----------------------------------------------------
-- View `AppFacturas`.`view1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `AppFacturas`.`view1`;
USE `AppFacturas`;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `AppFacturas`.`clientes`
-- -----------------------------------------------------
START TRANSACTION;
USE `AppFacturas`;
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `NIF`, `Calle`, `Provincia`, `Ciudad`, `Código Postal`, `País`, `Teléfono`, `Movil`, `Correo electrónico`) VALUES (1, ' Juan Pérez', '12345678A', 'Calle Mayor 1', 'Barcelona', 'Brcelona', 28001, 'España', '912345678', '612345678', 'juan@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `NIF`, `Calle`, `Provincia`, `Ciudad`, `Código Postal`, `País`, `Teléfono`, `Movil`, `Correo electrónico`) VALUES (2, 'María García', ' 87654321B', 'Avenida Libertad 20', 'Barcelona', 'Barcelona', 08002, 'España', '912345678', '612345678', 'maria@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `NIF`, `Calle`, `Provincia`, `Ciudad`, `Código Postal`, `País`, `Teléfono`, `Movil`, `Correo electrónico`) VALUES (3, 'José Rodríguez', '56789012C', 'Calle Sol 15', 'Barcelona', 'Barcelona', 41001, 'España', '912345678', '612345678', 'jose@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `NIF`, `Calle`, `Provincia`, `Ciudad`, `Código Postal`, `País`, `Teléfono`, `Movil`, `Correo electrónico`) VALUES (4, 'Ana Martínez', '34567890D', 'Plaza España 5,', 'Barcelona', 'Barcelona', 46002, 'España', '912345678', '612345678', 'ana@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `NIF`, `Calle`, `Provincia`, `Ciudad`, `Código Postal`, `País`, `Teléfono`, `Movil`, `Correo electrónico`) VALUES (5, 'Carlos Sánchez', '23456789E', 'Carrer Major 10,', 'Barcelona', 'Barcelona', 08024, 'España', '912345678', '612345678', 'carlos@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `NIF`, `Calle`, `Provincia`, `Ciudad`, `Código Postal`, `País`, `Teléfono`, `Movil`, `Correo electrónico`) VALUES (6, 'Laura López', ' 45678901F', ' Calle Luna 25,', 'Barcelona', 'Barcelona', 08025, 'España', '912345678', '612345678', 'laura@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `NIF`, `Calle`, `Provincia`, `Ciudad`, `Código Postal`, `País`, `Teléfono`, `Movil`, `Correo electrónico`) VALUES (7, ' Miguel Ruiz', '67890123G', ' Rua Nova 3,', 'Barcelona', 'Barcelona', 08019, 'España', '912345678', '612345678', 'miguel@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `NIF`, `Calle`, `Provincia`, `Ciudad`, `Código Postal`, `País`, `Teléfono`, `Movil`, `Correo electrónico`) VALUES (8, 'Marta García', '78901234H', ' Avda. del Parque 12', 'Barcelona', 'Barcelona', 08031, 'España', '912345678', '612345678', 'marta@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `NIF`, `Calle`, `Provincia`, `Ciudad`, `Código Postal`, `País`, `Teléfono`, `Movil`, `Correo electrónico`) VALUES (9, 'Pablo Hernández', '89012345I', ' Carrer del Mar 8, ', 'Barcelona', 'Barcelona', 08056, 'España', '912345678', '612345678', 'pablo@example.com');
INSERT INTO `AppFacturas`.`clientes` (`id`, `Nombre`, `NIF`, `Calle`, `Provincia`, `Ciudad`, `Código Postal`, `País`, `Teléfono`, `Movil`, `Correo electrónico`) VALUES (10, 'Sandra Díaz', ' 90123456J', ' Paseo de la Castellana 100;', 'Barcelona', 'Barcelona', 08060, 'España', '912345678', '612345678', 'sandra@example.com');


COMMIT;


-- -----------------------------------------------------
-- Data for table `AppFacturas`.`Servicios`
-- -----------------------------------------------------
START TRANSACTION;
USE `AppFacturas`;
INSERT INTO `AppFacturas`.`Servicios` (`id`, `Nombre del Servicio`, `Precio`, `Descripción`, `Información Adicional`) VALUES (1, 'Limpieza general', 250, 'Limpieza 3 veces por semana', 'Barrido, fregado, desempolvar, sacar la basura');
INSERT INTO `AppFacturas`.`Servicios` (`id`, `Nombre del Servicio`, `Precio`, `Descripción`, `Información Adicional`) VALUES (2, 'Limpieza a fondo', 400, 'Limpieza 2 veces al año', 'Limpieza de paredes, ascensores, vestibulos, lamparas');

COMMIT;


-- -----------------------------------------------------
-- Data for table `AppFacturas`.`facturas`
-- -----------------------------------------------------
START TRANSACTION;
USE `AppFacturas`;
INSERT INTO `AppFacturas`.`facturas` (`id`, `clientes_id`, `Fecha_factura`, `Referencia_pago`, `Fecha_vencimiento`, `Servicio`, `Cantidad`, `Precio`, `Impuesto`, `Total`) VALUES (1, 1, '2024-03-30', '1234M', '2024-04-30', 'Limpieza General', 1, 250, '21', 302,50);

COMMIT;

