-- INCLUDED FOR DEMO PURPOSES
-- This is the SQL I used to generate the MySQL schema and insert the data.

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema starting11
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema starting11
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `starting11` DEFAULT CHARACTER SET utf8 ;
USE `starting11` ;

-- -----------------------------------------------------
-- Table `starting11`.`position`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `starting11`.`position` (
  `position_id` INT NOT NULL AUTO_INCREMENT,
  `position_name` VARCHAR(45) NOT NULL,
  `position_abbreviation` VARCHAR(3) NOT NULL,
  PRIMARY KEY (`position_id`),
  UNIQUE INDEX `position_id_UNIQUE` (`position_id` ASC) VISIBLE,
  UNIQUE INDEX `position_UNIQUE` (`position_name` ASC) VISIBLE,
  UNIQUE INDEX `position_short_UNIQUE` (`position_abbreviation` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `starting11`.`player`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `starting11`.`player` (
  `player_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `shirt_number` INT NULL,
  PRIMARY KEY (`player_id`),
  UNIQUE INDEX `player_id_UNIQUE` (`player_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `starting11`.`player_has_position`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `starting11`.`player_has_position` (
  `player_id` INT NOT NULL,
  `position_id` INT NOT NULL,
  PRIMARY KEY (`player_id`, `position_id`),
  INDEX `fk_player_has_position_position1_idx` (`position_id` ASC) VISIBLE,
  INDEX `fk_player_has_position_player_idx` (`player_id` ASC) VISIBLE,
  CONSTRAINT `fk_player_has_position_player`
    FOREIGN KEY (`player_id`)
    REFERENCES `starting11`.`player` (`player_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_player_has_position_position1`
    FOREIGN KEY (`position_id`)
    REFERENCES `starting11`.`position` (`position_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



-- ADDING DATA TO THE TABLES

-- Add position data to the position table
INSERT INTO position (position_name, position_abbreviation)
VALUES
    ('Goalkeeper', 'GK'),
    ('Center Back', 'CB'),
    ('Left Back', 'LB'),
    ('Right Back', 'RB'),
    ('Left Wing Back', 'LWB'),
    ('Right Wing Back', 'RWB'),
    ('Central Defensive Midfielder', 'CDM'),
    ('Central Midfielder', 'CM'),
    ('Left Midfielder', 'LM'),
    ('Right Midfielder', 'RM'),
    ('Central Attacking Midfielder', 'CAM'),
    ('Left Winger', 'LW'),
    ('Right Winger', 'RW'),
    ('Center Forward', 'CF'),
    ('Striker', 'ST');

-- Add player data to the player table
INSERT INTO player (first_name, last_name, shirt_number)
VALUES
    ('Matt', 'Turner', 1),
    ('George', 'Bello', 24),
    ('Reggie', 'Cannon', 0),
    ('Cameron', 'Carter-Vickers', 20),
    ('Tim', 'Ream', 13),
    ('Erik', 'Palmer-Brown', 0),
    ('Joe', 'Scally', 19),
    ('Antonee', 'Robinson', 5),
    ('DeAndre', 'Yedlin', 22),
    ('Walker', 'Zimmerman', 3),
    ('Kellyn', 'Acosta', 23),
    ('Tyler', 'Adams', 4),
    ('Luca', 'De La Torre', 14),
    ('Weston', 'McKennie', 8),
    ('Yunus', 'Musah', 6),
    ('Christian', 'Roldan', 17),
    ('Malik', 'Tillman', 0),
    ('Brendan', 'Aaronson', 11),
    ('Giovanni', 'Reyna', 7),
    ('Ricardo', 'Pepi', 9),
    ('Jordan', 'Morris', 0),
    ('Christian', 'Pulisic', 10),
    ('Tim', 'Weah', 21),
    ('Haji', 'Wright', 19),
    ('Folarin', 'Balogun', 20);

-- Map the players to their positions by populating the player_has_positions table
INSERT INTO player_has_position (player_id, position_id)
VALUES
    -- Matt Turner (GK)
    (1, 1),

    -- George Bello (LB)
    (2, 3),

    -- Reggie Cannon (RB)
    (3, 4),

    -- Cameron Carter-Vickers (CB)
    (4, 2),

    -- Tim Ream (CB)
    (5, 2),

    -- Erik Palmer-Brown (CB)
    (6, 2),

    -- Joe Scally (RB)
    (7, 4),

    -- Antonee Robinson (LB)
    (8, 3),

    -- DeAndre Yedlin (RB, RWB, RM)
    (9, 4),
    (9, 6),
    (9, 10),

    -- Walker Zimmerman (CB)
    (10, 2),

    -- Kellyn Acosta (CDM, CM)
    (11, 7),
    (11, 8),

    -- Tyler Adams (CDM, CM)
    (12, 7),
    (12, 8),

    -- Luca De La Torre (CM)
    (13, 8),

    -- Weston McKennie (CM)
    (14, 8),

    -- Yunus Musah (CM, CDM)
    (15, 8),
    (15, 7),

    -- Christian Roldan (CM)
    (16, 8),

    -- Malik Tillman (RW, LW, CAM)
    (17, 13),
    (17, 12),
    (17, 11),

    -- Brendan Aaronson (LW, RW, CAM)
    (18, 12),
    (18, 13),
    (18, 11),

    -- Giovanni Reyna (CAM, RW, LW)
    (19, 11),
    (19, 13),
    (19, 12),

    -- Ricardo Pepi (ST)
    (20, 15),

    -- Jordan Morris (ST, LW, RW)
    (21, 15),
    (21, 12),
    (21, 13),

    -- Christian Pulisic (CAM, CF, LW, RW)
    (22, 11),
    (22, 14),
    (22, 12),
    (22, 13),

    -- Tim Weah (ST, CF, LW, RW)
    (23, 15),
    (23, 14),
    (23, 12),
    (23, 13),

    -- Haji Wright (ST, CF)
    (24, 15),
    (24, 14),

    -- Folarin Balogun (ST, CF)
    (25, 15),
    (25, 14);
    

-- VIEW AS NEEDED

SELECT * FROM player;
SELECT * FROM position;
SELECT * FROM player_has_position;

-- View all players with their positions
SELECT p.player_id, p.first_name, p.last_name, p.shirt_number, GROUP_CONCAT(pos.position_abbreviation) AS positions
FROM player p
JOIN player_has_position php ON p.player_id = php.player_id
JOIN position pos ON php.position_id = pos.position_id
GROUP BY p.player_id;

