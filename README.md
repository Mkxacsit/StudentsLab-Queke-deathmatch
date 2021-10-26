
![image](https://user-images.githubusercontent.com/85260709/138115143-89c39d2e-9572-4fa2-9699-8f30fd8ee3ba.png)


CREATE TABLE `users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`login` VARCHAR(255) NOT NULL AUTO_INCREMENT,
	`password` VARCHAR(255) NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user_info` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL AUTO_INCREMENT,
	`email` VARCHAR(255) NOT NULL AUTO_INCREMENT,
	`deleted_date` DATE NOT NULL AUTO_INCREMENT,
	`last_activity_date` DATE NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `users_roles` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`role_id` INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `locations` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL AUTO_INCREMENT,
	`description` VARCHAR(255) NOT NULL AUTO_INCREMENT,
	`poster` VARCHAR(255) NOT NULL AUTO_INCREMENT,
	`file` VARCHAR(255) NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `game_session` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`locarion_id` INT NOT NULL AUTO_INCREMENT,
	`start_time` TIME NOT NULL AUTO_INCREMENT,
	`end_time` TIME NOT NULL AUTO_INCREMENT,
	`max_users` INT NOT NULL,
	`name` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user_session` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`session_id` INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

ALTER TABLE `user_info` ADD CONSTRAINT `user_info_fk0` FOREIGN KEY (`id`) REFERENCES `users`(`id`);

ALTER TABLE `users_roles` ADD CONSTRAINT `users_roles_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `users_roles` ADD CONSTRAINT `users_roles_fk1` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`);

ALTER TABLE `game_session` ADD CONSTRAINT `game_session_fk0` FOREIGN KEY (`locarion_id`) REFERENCES `locations`(`id`);

ALTER TABLE `user_session` ADD CONSTRAINT `user_session_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `user_session` ADD CONSTRAINT `user_session_fk1` FOREIGN KEY (`session_id`) REFERENCES `game_session`(`id`);







