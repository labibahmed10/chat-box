CREATE TABLE `message` (
	`id` int AUTO_INCREMENT NOT NULL,
	`sender_id` varchar(255) NOT NULL,
	`receiver_id` varchar(255) NOT NULL,
	`message` varchar(1000) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `message_id` PRIMARY KEY(`id`)
);
