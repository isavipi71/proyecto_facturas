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
  `Nombres` VARCHAR(150) NULL,
  `NIF` VARCHAR(10) NULL,
  `Dirección` VARCHAR(45) NOT NULL,
  `Teléfono` VARCHAR(12) NULL,
  `Correo electrónico` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AppFacturas`.`Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AppFacturas`.`Servicios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Descripción` VARCHAR(250) NULL,
  `Precio` DECIMAL(6,2) NULL,
  `Impuesto` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AppFacturas`.`facturas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AppFacturas`.`facturas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Servicio` VARCHAR(45) NULL,
  `Cantidad` INT NULL,
  `Precio` DECIMAL(6,2) NULL,
  `Impuesto` INT NULL,
  `Fecha_factura` DATE NULL,
  `Referencia_pago` VARCHAR(45) NULL,
  `Fecha_vencimiento` DATE NULL,
  `Total` DECIMAL(6,2) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AppFacturas`.`facturas_has_clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AppFacturas`.`facturas_has_clientes` (
  `facturas_id` INT NOT NULL,
  `clientes_id` INT NOT NULL,
  PRIMARY KEY (`facturas_id`, `clientes_id`),
  CONSTRAINT `fk_facturas_has_clientes_facturas`
    FOREIGN KEY (`facturas_id`)
    REFERENCES `AppFacturas`.`facturas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_facturas_has_clientes_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `AppFacturas`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_facturas_has_clientes_clientes1_idx` ON `AppFacturas`.`facturas_has_clientes` (`clientes_id` ASC) VISIBLE;

CREATE INDEX `fk_facturas_has_clientes_facturas_idx` ON `AppFacturas`.`facturas_has_clientes` (`facturas_id` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `AppFacturas`.`facturas_has_Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AppFacturas`.`facturas_has_Servicios` (
  `facturas_id` INT NOT NULL,
  `Servicios_id` INT NOT NULL,
  PRIMARY KEY (`facturas_id`, `Servicios_id`),
  CONSTRAINT `fk_facturas_has_Servicios_facturas1`
    FOREIGN KEY (`facturas_id`)
    REFERENCES `AppFacturas`.`facturas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_facturas_has_Servicios_Servicios1`
    FOREIGN KEY (`Servicios_id`)
    REFERENCES `AppFacturas`.`Servicios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_facturas_has_Servicios_Servicios1_idx` ON `AppFacturas`.`facturas_has_Servicios` (`Servicios_id` ASC) VISIBLE;

CREATE INDEX `fk_facturas_has_Servicios_facturas1_idx` ON `AppFacturas`.`facturas_has_Servicios` (`facturas_id` ASC) VISIBLE;

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
