CREATE TABLE `Library` (
	`title` varchar(50) NOT NULL,
	`artist` varchar(50) NOT NULL,
	`duration` int NOT NULL,
	`last_played` DATETIME NOT NULL,
	`id` int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);