CREATE DATABASE IF NOT EXISTS quake_db;
USE quake_db;

CREATE TABLE IF NOT EXISTS `users` (
	`id` 					SERIAL 	  	  PRIMARY KEY,
	`login` 				VARCHAR(50)   NOT NULL ,
	`password`				VARCHAR(50)   NOT NULL ,
	UNIQUE(login)	  
);

CREATE TABLE IF NOT EXISTS `user_info` (
	`id` 					SERIAL 		  PRIMARY KEY,
	`user_id`				BIGINT 		  NOT NULL ,
	`name` 					VARCHAR(50)   NOT NULL ,
	`email` 				VARCHAR(255)  NOT NULL ,
	`deleted_date` 			DATE 		  ,
	`last_activity_date`    DATE 		  NOT NULL,	  
);

CREATE TABLE IF NOT EXISTS `users_roles` (
	`id` 		 			SERIAL 		 PRIMARY KEY,
	`user_id`	 			BIGINT 		 NOT NULL ,
	`role_id` 	 			BIGINT 	 	 NOT NULL ,	  
);

CREATE TABLE IF NOT EXISTS `roles` (
	`id` 		 			SERIAL 		 PRIMARY KEY,
	`name` 		 			BIGINT 		 NOT NULL ,	  
);

CREATE TABLE IF NOT EXISTS `locations` (
	`id` 		 			SERIAL 		 PRIMARY KEY,,
	`name` 		 			VARCHAR(50)  NOT NULL ,
	`description`    		VARCHAR(255) ,
	`poster` 				VARCHAR(255) ,
	`file` 		 			VARCHAR(255) ,	  
);

CREATE TABLE IF NOT EXISTS `game_sessions` (
	`id` 		 			SERIAL 		 PRIMARY KEY,,
	`location_id` 			BIGINT 		 NOT NULL ,
	`start_time`	 		TIME 		 NOT NULL ,
	`end_time` 	 			TIME 		 NOT NULL ,
	`max_users`	 			INT 		 NOT NULL,
	`name` 					VARCHAR(50)  NOT NULL,
	  
);

CREATE TABLE IF NOT EXISTS `user_session` (
	`id` 		 			SERIAL 		PRIMARY KEY,,
	`user_id` 	 			BIGINT 		NOT NULL ,
	`session_id`	 		BIGINT 		NOT NULL ,	  
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