DROP DATABASE IF EXISTS	`quake_death_match`;
CREATE DATABASE `quake_death_match` DEFAULT CHARACTER SET utf8;

USE `quake_death_match`

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
	`id` 			 INT          NOT NULL AUTO_INCREMENT,
	`login` 		 VARCHAR(255) NOT NULL AUTO_INCREMENT,
	`password`		 VARCHAR(255) NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
	`id` 			INT          NOT NULL AUTO_INCREMENT,
	`user_id`		INT          NOT NULL AUTO_INCREMENT,
	`name` 			VARCHAR(255) NOT NULL AUTO_INCREMENT,
	`email` 		VARCHAR(255) NOT NULL AUTO_INCREMENT,
	`deleted_date` 		DATE         NOT NULL AUTO_INCREMENT,
	`last_activity_date`    DATE NOT NULL,
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE `user_roles` (
	`id` 			INT          NOT NULL AUTO_INCREMENT,
	`user_id`	 	INT          NOT NULL AUTO_INCREMENT,
	`role_id` 	 	INT          NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
	`id` 		 	INT 	     NOT NULL AUTO_INCREMENT,
	`name` 		 	INT          NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `locations`;
CREATE TABLE `locations` (
	`id` 		 	INT          NOT NULL AUTO_INCREMENT,
	`name` 		 	VARCHAR(255) NOT NULL AUTO_INCREMENT,
	`description`    	VARCHAR(255) NOT NULL AUTO_INCREMENT,
	`poster` 		VARCHAR(255) NOT NULL AUTO_INCREMENT,
	`file` 		 	VARCHAR(255) NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `game_session`;
CREATE TABLE `game_session` (
	`id`		 	INT          NOT NULL AUTO_INCREMENT,
	`location_id` 		INT          NOT NULL AUTO_INCREMENT,
	`start_time`	 	TIME         NOT NULL AUTO_INCREMENT,
	`end_time` 	 	TIME         NOT NULL AUTO_INCREMENT,
	`max_users`	 	INT          NOT NULL,
	`name` 			VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `user_session`;
CREATE TABLE `user_session` (
	`id` 			INT NOT NULL AUTO_INCREMENT,
	`user_id` 	 	INT NOT NULL AUTO_INCREMENT,
	`session_id`	 	INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

ALTER TABLE `user_info` 
ADD CONSTRAINT `fk_user_info_user_id_users_id`
FOREIGN KEY (`id`) REFERENCES `users`(`id`);
		ON DELETE CASCADE 
		ON UPDATE CASCADE;

ALTER TABLE `users_roles`
ADD CONSTRAINT `fk_users_roles_user_id_users_id`
FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);
		ON DELETE CASCADE 
		ON UPDATE CASCADE;

ALTER TABLE `users_roles`
ADD CONSTRAINT `fk_users_roles_role_id_roles_id`
FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`);
		ON DELETE CASCADE 
		ON UPDATE CASCADE;

ALTER TABLE `game_session`
ADD CONSTRAINT `fk_game_session_location_id_locations_id`
FOREIGN KEY (`location_id`) REFERENCES `locations`(`id`);
		ON DELETE CASCADE 
		ON UPDATE CASCADE;

ALTER TABLE `user_session`
ADD CONSTRAINT `fk_user_session_user_id_users_id`
FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);
		ON DELETE CASCADE 
		ON UPDATE CASCADE;

ALTER TABLE `user_session`
ADD CONSTRAINT `fk_user_session_session_id_game_session_id`
 FOREIGN KEY (`session_id`) REFERENCES `game_session`(`id`);
		ON DELETE CASCADE 
		ON UPDATE CASCADE;
