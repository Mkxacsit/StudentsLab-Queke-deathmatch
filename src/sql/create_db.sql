CREATE DATABASE IF NOT EXISTS quake_db;
USE quake_db;

CREATE TABLE IF NOT EXISTS users
(
id			SERIAL			PRIMARY KEY,
login		VARCHAR(50)		NOT NULL,
password	VARCHAR(255)	NOT NULL,
UNIQUE(login)
);

 `create_at` DATETIME NOT NULL DEFAULT 1642118034952, `deleted_at` DATETIME, PRIMARY KEY (`id`), FOREIGN 
KEY (`creator_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS  user_info
(
id			SERIAL			PRIMARY KEY,
user_id		BIGINT			UNSIGNED NOT NULL,
username	VARCHAR(255)	NOT NULL,
avatar		BLOB,
about		TEXT,
UNIQUE(username)	
);

CREATE TABLE IF NOT EXISTS  roles
(
id			SERIAL			PRIMARY KEY,
name		CHARACTER(50)	NOT NULL
);

CREATE TABLE IF NOT EXISTS  users_roles
(
id			SERIAL			PRIMARY KEY,
user_id		BIGINT			UNSIGNED NOT NULL,
role_id		BIGINT			UNSIGNED NOT NULL
);

CREATE TABLE IF NOT EXISTS user_sessions
(
id			SERIAL			PRIMARY KEY,
user_id		BIGINT			UNSIGNED NOT NULL,
session_id  BIGINT			UNSIGNED NOT NULL
);


CREATE TABLE IF NOT EXISTS locations
(
id			SERIAL			PRIMARY KEY,
name 		VARCHAR(255)	NOT NULL,
discription TEXT,
poster 		VARCHAR(255),
file 		BLOB
);

CREATE TABLE IF NOT EXISTS game_sessions
(
id			SERIAL			PRIMARY KEY,
location_id	BIGINT			UNSIGNED NOT NULL,
name        VARCHAR(255)	NOT NULL,
start_time  TIMESTAMP		NOT NULL ,
end_time    TIMESTAMP,
activity_status BOOLEAN		DEFAULT TRUE,
max_users    BIGINT			UNSIGNED NOT NULL
);


ALTER TABLE  user_info 
ADD CONSTRAINT fk_user_info_user_id_users_id
 FOREIGN KEY (user_id) REFERENCES users(id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;

ALTER TABLE  users_roles 
ADD CONSTRAINT fk_users_roles_user_id_users_id
 FOREIGN KEY (user_id) REFERENCES users(id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;

ALTER TABLE  users_roles 
ADD CONSTRAINT fk_users_roles_role_id_roles_id
 FOREIGN KEY (role_id) REFERENCES roles(id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;

ALTER TABLE  user_sessions 
ADD CONSTRAINT fk_user_sessions_user_id_users_id
 FOREIGN KEY (user_id) REFERENCES users(id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;

ALTER TABLE  user_sessions 
ADD CONSTRAINT fk_user_sessions_session_id_game_sessions_id
 FOREIGN KEY (session_id) REFERENCES game_sessions(id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;


ALTER TABLE  game_sessions 
ADD CONSTRAINT fk_game_sessions_location_id_locations_id
 FOREIGN KEY (location_id) REFERENCES locations(id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;

