## 字节难度的sql知识
关系型数据库 每个表都是行列式的
写一条mysql sql，创建一个表 avatar 用户头像
    索引，要建 为了查询 当时也不能乱建
    思考以后的查询需求，先写出select语句
        主键 Primary 
        普通索引 首页文章列表\个人主页 都要根据用户id 查头像
        唯一索引
        联合索引


create database blog;

CREATE TABLE `user` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `avatar` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `mimetype` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `filename` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `size` int(11) NOT NULL,
    `userId` int(11) NOT NULL,
    PRIMARY KEY (`id`),
    KEY `userId` (`userId`),
    CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `post` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    `userId` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `userId` (`userId`),
    CONSTRAINT `post_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `comment` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `content` LONGTEXT COLLATE UTF8MB4_UNICODE_CI,
    `postId` INT(11) NOT NULL,
    `userId` INT(11) NOT NULL,
    `parentId` INT(11) DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `postId` (`postId`),
    KEY `userId` (`userId`),
    KEY `parentId` (`parentId`),
    CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `post` (`id`),
    CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
    CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`parentId`) REFERENCES `comment` (`id`)
)  ENGINE=INNODB AUTO_INCREMENT=34 DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE `user_like_post` (
    `userId` int(11) NOT NULL,
    `postId` int(11) NOT NULL,
    PRIMARY KEY (`userId`,`postId`),
    KEY `postId` (`postId`),
    CONSTRAINT `user_like_post_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
    CONSTRAINT `user_like_post_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `user` (`id`, `name`, `password`) VALUES
('1', '王皓', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq'),
('2', '小雪', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq'),
('3', '李白', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq'),
('4', '杜甫', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq'),
('5', '白居易', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq'),
('6', '张三', '$2b$10$CsO/ykedPpuxqUETBZTYm.F2U4TXDdo01rLmoRPwjKBv3pIL5pnWq');

- 部署
    - 本地部署
        测试数据和服务端代码 blog.sql
    - 远程部署
        阿里云服务器 blog.sql
    - 分布式部署
        blog.sql mysql 运行一下




