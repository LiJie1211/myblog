/*
 Navicat Premium Data Transfer

 Source Server         : aliyun
 Source Server Type    : MySQL
 Source Server Version : 50727
 Source Host           : 120.27.146.169:3306
 Source Schema         : myblog

 Target Server Type    : MySQL
 Target Server Version : 50727
 File Encoding         : 65001

 Date: 16/12/2019 17:48:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for archives
-- ----------------------------
DROP TABLE IF EXISTS `archives`;
CREATE TABLE `archives`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `archiveName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of archives
-- ----------------------------
INSERT INTO `archives` VALUES (1, '2018年07月');
INSERT INTO `archives` VALUES (2, '2018年08月');
INSERT INTO `archives` VALUES (3, '2019年11月');
INSERT INTO `archives` VALUES (4, '2019年12月');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `articleId` bigint(20) NOT NULL,
  `author` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `originalAuthor` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `articleTitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `articleContent` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `articleTags` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `articleType` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `articleCategories` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `publishDate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `updateDate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `articleUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `articleTabloid` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `likes` int(11) NOT NULL,
  `lastArticleId` bigint(20) NULL DEFAULT NULL,
  `nextArticleId` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (2, 1533196734, '李杰', '李杰', 'SpringBoot之从零搭建博客网站', '![](https://lijiewmq.oss-cn-chengdu.aliyuncs.com/public/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/blogArticles/2019-12-16/1576486936.gif)\n> 文字不够，图片来凑。\n\n## 前言\n#### 为什么想要搭建这个博客？\n我还记得，某某神秘的一天，同往常一样的在家解决这某个bug，不停地问度娘，很巧的碰到了一个同行在他的博客中完美的记录了我的bug的解决方案，随后我又看了看他写的其他博客文章，觉得都非常的不错，并且同时也被他博客网站的简约清新吸引，也就在那刻，心中埋下了准备自己搭建myblog的种子...\n\n然后我就在网上开始找一些模板和学习一些前后端的知识。\n\n自己在本子上设计了网站的所有页面的大致样式(也借鉴了许多大佬的博客样式)，列出了应该有的功能，当时看来并不算多。\n\n一件事情在开头总是想的很美好，然而事实总会跟你对着干。在博客搭建的过程中也遇到很多困难，网上不停地查找问题解决bug，可能这才是提升能力的真正的一个过程吧，O(∩_∩)O哈哈~\n\n> 编程是个脑力活，如果把它做成了体力活，这就代表是时候改变一下了\n\n#### 文章概述\n- 关于项目，对于学习Springboot是个挺不错的练手项目，可以让你在烦恼的业务逻辑中保持一颗纯洁的心\n- 如何从零开始，使用Springboot开发项目\n- 开发前的一些准备工作，以及思考项目整体结构与思路\n- 记录开发过程中遇到的一些难题以及bug\n- 总结目前博客网站的一些优缺点\n- 思考整个项目有哪些可以优化的地方，以及有哪些可增加的功能\n\n## 页面展示\n\n##### 首页展示\n![](https://lijiewmq.oss-cn-chengdu.aliyuncs.com/public/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA/index.png)\n<br>\n##### 文章编辑\n![](https://lijiewmq.oss-cn-chengdu.aliyuncs.com/public/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA/edit.png)\n<br>\n##### 后台管理\n![](https://lijiewmq.oss-cn-chengdu.aliyuncs.com/public/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA/houtai.png)\n<br>\n##### 用户个人中心\n![](https://lijiewmq.oss-cn-chengdu.aliyuncs.com/public/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA/user.png)\n\n## 项目需求\n#### 项目背景\n对于初学Springboot的朋友来说，最好的一个学习方式就是那一个功能俱全的项目来练练手，通过自己重构项目来发现其中的潜在难题，并且也能很好的在编码过程中总结和发现问题、解决问题。使用Springboot开发的博客系统，简单并且实用，适合做练手项目。\n\n#### 功能需求\n###### 主页\n- 博客汇总，以列表形式展示文章，并附上文章作者、发布日期、分类情况以及文章简要\n\n- 能够以分类形式查看文章\n\n- 能够以时间列表方式归档文章\n\n- 可实现通过标签查找所有相关文章\n\n- 个人介绍、联系方式\n\n- 博客网站更新记录\n\n- 友链链接\n\n###### 后台管理\n- 网站仪表盘，记录网站访客量情况\n\n- 文章管理\n1.分页展示文章信息\n2.可对文章进行再编辑以及删除文章\n\n- 发布文章\n1.使用markdown编辑器，支持插入代码，插入图片等功能\n2.文章可选择分类和标签，以及转载文章支持链接原作者文章\n\n- 分类管理，支持增加、删除、修改分类\n\n- 友情链接\n1.支持增加友情链接\n2.支持删除友情链接\n\n- 反馈信息管理，可查看用户反馈信息\n\n#### 安装部署需求\n- 可以使用docker方式部署，也可支持-jar方式\n- 使用springboot自带方式打包\n\n#### 非功能需求\n##### 性能需求\n- 首页响应时间不超过2秒钟\n- 文章页响应时间不超过3秒钟\n\n## 项目设计\n\n#### 总体设计\n- **本项目用到的技术和框架**<br>\n1.项目构建：Maven<br>\n2.web框架：Springboot<br>\n3.数据库ORM：Mybatis<br>\n4.数据库连接池： Druid<br>\n5.分页插件：PageHelper<br>\n6.数据库：MySql<br>\n7.缓存：Redis<br>\n8.前端模板：Thymeleaf<br>\n9.文章展示：Editor.md<br>\n\n- **本项目中的关键点**<br>\n1.采用Springboot开发，数据库使用连接池加orm框架的模式，对于系统的关键业务使用Redis缓存，加快相应速度。<br>\n2.整体系统采用门户网站+后台管理+用户个人中心的方式搭建，门户网站展示博客内容以及博主介绍，后台管理用于编辑文章，查看反馈，管理评论留言。<br>\n3.使用阿里云OSS进行静态资源存储，以及CDN全站加速。<br>\n\n- **环境**\n\n|  工具 | 名称 \n| ------------ | ------------\n| 开发工具  | IDEA \n|  语言 | JDK1.8、HTML、css、js \n| 数据库  | Mysql5.6 \n| 项目框架  | SSM \n| ORM  | Mybatis \n| 安全框架  | SpringSecurity \n| 缓存  | Redis \n| 项目构建  | Maven \n| 运行环境  | 阿里云Centos7 \n\n#### 结构设计\n\n![](https://lijiewmq.oss-cn-chengdu.aliyuncs.com/public/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA/construct.png)\n对于熟悉Spring开发的朋友来说，相信对此结构也不会陌生。平时的开发过程中，结构设计是重要的环节，特别是协作开发的时候，明细的分包，模块化，可减少代码提交时的冲突。并且明确的结构有助于我们快速的寻找所对应的类。\n\n## 业务设计\n#### 发布文章流程\n\n![](https://lijiewmq.oss-cn-chengdu.aliyuncs.com/public/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/%E6%B5%81%E7%A8%8B%E5%9B%BE/article.png)\n\n#### 登录流程\n\n![](https://lijiewmq.oss-cn-chengdu.aliyuncs.com/public/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/%E6%B5%81%E7%A8%8B%E5%9B%BE/login.png)\n\n#### 用户个人资料修改流程\n\n![](https://lijiewmq.oss-cn-chengdu.aliyuncs.com/public/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/%E6%B5%81%E7%A8%8B%E5%9B%BE/change.png)\n\n## 打包、部署和运行\n- 本项目采用Springboot的maven插件进行打包，打包结果：****.jar\n- 部署方式：使用 nohup java -jar ******.jar >******.log 2>&1 &的方式，后台启动项目，并在该路径下生成运行日志\n\n## 数据设计\n\n###### 用户表：user\n| 名称  | 类型  |  长度 |  主键 | 非空  | 描述 \n| ------------ | ------------ | ------------ | ------------ | ------------ | ------------\n| id  | int  |  11 |  true |  true | 主键，自增 \n| phone  | varchar  | 255  | false  | true  | 手机号 \n| username  | varchar  | 255  |  false | true  |  用户名\n| password  |  varchar |  255 |  false | true  | 密码 \n| gender  | char  | 50  | false  |  true | 性别 \n| trueName  | varchar  | 255  |  false | false  | 姓名 \n| birthday  |  char | 100  |  false | false  | 生日 \n| email  | varchar  | 255  | false  | false  | 邮箱 \n| personalBrief  |  varchar | 255  | false  | false  |  个人简介\n| avatarImgUrl  |  varchar |  255 | false  |  true | 头像url\n| recentlyLanded  | varchar  |  255 |  false | false  |  最近登录时间\n\n###### 文章表：article\n| 名称  | 类型  |  长度 |  主键 | 非空  | 描述 \n| ------------ | ------------ | ------------ | ------------ | ------------ | ------------\n| id  | int  |  11 |  true |  true | 主键，自增 \n| articleId  | bigint  | 20  | false  | true  | 文章id \n| author  | varchar  | 255  |  false | true  |  作者\n| originalAuthor  |  varchar |  255 |  false | true  | 文章原作者 \n| articleTitle  | varchar  | 255  | false  |  true | 文章标题 \n| articleContent  | longtext  | 0  |  false | true  | 文章内容 \n| articleTags  |  varchar | 255  |  false | true  | 文章标签 \n| articleType  | varchar  | 255  | false  | true  | 文章类型 \n| articleCategories  |  varchar | 255  | false  | true  |  文章分类\n| publishDate  |  varchar |  255 | false  |  true | 发布文章日期\n| updateDate  | varchar  |  255 |  false | true  |  更新文章日期\n| articleUrl  | varchar  |  255 |  false | true  |  文章url\n| articleTabloid  | 0  |  255 |  false | true  |  文章摘要\n| likes  | int  |  11 |  false | true  |  文章喜欢数\n| lastArticleId  | bigint  |  20 |  false | false  |  上一篇文章id\n| nextArticleId  | bigint  |  20 |  false | false  |  下一篇文章id\n\n###### 评论记录表：comment_record\n| 名称  | 类型  |  长度 |  主键 | 非空  | 描述 \n| ------------ | ------------ | ------------ | ------------ | ------------ | ------------\n| id  | bigint  |  20 |  true |  true | 主键，自增 \n| pId  | bigint  | 20  | false  | true  | 父id \n| articleId  | bigint  | 20  |  false | true  |  文章id\n| originalAuthor  |  varchar |  255 |  false | true  | 文章原作者 \n| answererId  | int  | 11  | false  |  true | 评论者id \n| respondentId  | int  | 11  |  false | true  | 被评论者id \n| commentDate  |  varchar | 100  |  false | true  | 评论日期 \n| likes  | int  | 11  | false  | true  | 评论点赞数 \n| commentContent  |  text | 0  | false  | true  |  评论内容\n\n## 开发流程\n###### 数据库CRUD\n- controller层中编写前端接口，接收前端参数\n- service层中编写所需业务接口，供controller层调用\n- 实现service层中的接口，并注入mapper层中的sql接口\n- 采用Mybatis的JavaConfig方式编写Sql语句。由于并没有使用Mybatis的逆向功能，需要自己手写所有sql语句\n- 关于事务的实现，在启动类中开启事务，并在service层需要实现事务的业务接口上使用`@Transactional`注解，还是十分方便的\n- 本项目开发并不是很难，只是在业务的实现上比较复杂\n\n###### 页面与展示\n- 作为一名后端开发，这里我使用了[妹子UI主题](http://amazeui.org/ \"妹子UI主题\")，极大的减少了页面的开发难度。\n- 前端页面与后端的交互主要是在controller包中，并使用Thymeleaf渲染页面。\n- 自定义异常处理页面，通过重写`WebMvcConfigurerAdapter`实现自动跳转到404、403页面。\n\n###### 其他功能\n- 使用lazyload插件实现页面图片懒加载\n- 后台实时记录当天访客量，便于了解博客日常访问量\n- 分析访问量最多的数据，主要在于文章访问部分，将文章放入redis缓存。每次编辑完文章后，更新缓存\n- 使用阿里云互联网中间件的业务实时监控服务，对于网站性能的了解以及优化有很大的帮助\n\n###### 网站建设\n- 服务器选用的是阿里云centos7\n- 域名是阿里云上购买的.cn的域名\n- 网站备案以及公安机关备案，可能这个步骤时间比较久。\n- 网站配置了ssl安全证书，可实现https访问以及自动从http跳转到https\n\n## 总结\n\n#### 博客网站优缺点\n- 首先最大的一个缺点就是在前端页面设计过程中混用了一些Bootstrap，导致依赖过于复杂，不便于后期修改，已经网站上有一些隐藏的bug\n- 对于页面用户体验以及反馈功能的设计便于用户对于浏览过程中出现的问题进行反馈\n- 后端部分低耦合有利于项目的理解与维护\n\n#### 项目整体优化\n- 目前项目首页以及文章页响应时间过长，后期最好优化到1s响应时间\n- 定时定期进行数据库的备份，防止出现网站被攻击后数据丢失的风险\n- 写文章部分目前仅支持插入网络图片，无法从本地上传图片（已解决）\n- 手机端浏览文章页面会出现代码自动换行问题，不便于浏览过程（已解决）\n\n#### 未来需增加的功能\n- 暂无计划\n\n#### 建站大概步骤\n- 1.购买服务器（服务器上安装JDK、mysql、tomcat、nginx、redis）\n- 2.购买域名\n- 3.域名备案（时间周期较长，可同时进行编码）\n- 4.域名进行解析绑定在服务器上\n- 5.购买免费的个人域名SSL证书\n- 6.安装证书到nginx里面（https://help.aliyun.com/document_detail/98728.html?spm=5176.2020520163.0.0.3090HLMMHLMMnE）\n- 7.修改Tomcat、nginx配置（https://www.cnblogs.com/wuzm/p/11110534.html）\n- 8.将项目打包成war上传至服务器（https://blog.csdn.net/qq_33591903/article/details/90715370）\n- 9.运行nginx\n\n#### *以上就是我在博客网站搭建过程后的所有总结记录，可能会有遗缺部分，等以后想起来了再来修改吧。*\n\n> 本人秉持开源原则，待后期网站功能完善之后会同步源码至Github、码云中。需要搭建个人博客的朋友欢迎使用本博客，只要给我个stars就好啦，哈哈。如果搭建过程中有各种问题欢迎来骚。\n', 'SpringBoot,个人博客,原创', '原创', 'SpringBoot', '2019-11-20', '2019-12-16', 'https://www.lijiewmq.cn/article/1533196734', '文字不够，图片来凑。前言为什么想要搭建这个博客？我还记得，某某神秘的一天，同往常一样的在家解决这某个bug，不停地问度娘，很巧的碰到了一个同行在他的博客中完美的记录了我的bug的解决方案，随后我又看了看他写的其他博客文章，觉得都非常的不错，并且同时也被他博客网站的简约清新吸引，也就在那刻，心中埋下了准备自己搭建myblog的种子…然后我就在网上开始找一些模板和学习一些前后端的知识。自己在本子...', 3, 0, 1575623339);
INSERT INTO `article` VALUES (3, 1575623339, '李杰', '李杰', '测试博客', '李杰测试博客', '心情,SpringBoot,原创', '原创', '我的故事', '2019-12-06', '2019-12-09', 'https://www.lijiewmq.cn/article/1575623339', '李杰测试博客...', 2, 1533196734, 0);

-- ----------------------------
-- Table structure for article_likes_record
-- ----------------------------
DROP TABLE IF EXISTS `article_likes_record`;
CREATE TABLE `article_likes_record`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `articleId` bigint(20) NOT NULL,
  `likerId` int(11) NOT NULL,
  `likeDate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `isRead` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_likes_record
-- ----------------------------
INSERT INTO `article_likes_record` VALUES (2, 1533196734, 1, '2018-08-02 21:24', 0);
INSERT INTO `article_likes_record` VALUES (3, 1533196734, 2, '2019-12-09 17:16', 0);
INSERT INTO `article_likes_record` VALUES (4, 1575623339, 2, '2019-12-09 17:17', 0);
INSERT INTO `article_likes_record` VALUES (5, 1575623339, 1, '2019-12-09 17:28', 0);

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES (1, '我的故事');
INSERT INTO `categories` VALUES (2, 'SpringBoot');

-- ----------------------------
-- Table structure for comment_likes_record
-- ----------------------------
DROP TABLE IF EXISTS `comment_likes_record`;
CREATE TABLE `comment_likes_record`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `articleId` bigint(20) NOT NULL,
  `pId` int(11) NOT NULL,
  `likerId` int(11) NOT NULL,
  `likeDate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment_likes_record
-- ----------------------------
INSERT INTO `comment_likes_record` VALUES (1, 1575623339, 9, 1, '2019-12-16 13:39');

-- ----------------------------
-- Table structure for comment_record
-- ----------------------------
DROP TABLE IF EXISTS `comment_record`;
CREATE TABLE `comment_record`  (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `pId` bigint(20) NOT NULL,
  `articleId` bigint(20) NOT NULL,
  `answererId` int(11) NOT NULL,
  `respondentId` int(11) NOT NULL,
  `commentDate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `likes` int(255) NOT NULL,
  `commentContent` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `isRead` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment_record
-- ----------------------------
INSERT INTO `comment_record` VALUES (2, 0, 1533196734, 1, 1, '2018-08-03 00:13', 1, '测试评论功能', 0);
INSERT INTO `comment_record` VALUES (3, 2, 1533196734, 1, 1, '2018-08-03 00:15', 0, '一切正常', 0);
INSERT INTO `comment_record` VALUES (4, 0, 1533196734, 1, 1, '2019-12-06 17:02', 0, '测试测试', 0);
INSERT INTO `comment_record` VALUES (5, 0, 1533196734, 1, 1, '2019-12-06 17:02', 0, '测试测试', 0);
INSERT INTO `comment_record` VALUES (7, 0, 1533196734, 1, 1, '2019-12-06 17:06', 0, '评论文章博客创建', 0);
INSERT INTO `comment_record` VALUES (9, 0, 1575623339, 2, 1, '2019-12-09 17:18', 1, '测试评论测试博客', 0);

-- ----------------------------
-- Table structure for feedback
-- ----------------------------
DROP TABLE IF EXISTS `feedback`;
CREATE TABLE `feedback`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `feedbackContent` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `contactInfo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `personId` int(11) NOT NULL,
  `feedbackDate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of feedback
-- ----------------------------
INSERT INTO `feedback` VALUES (1, '11111', '1227478204', 1, '2019-12-04 13:45:07');
INSERT INTO `feedback` VALUES (2, '阿杰反馈', 'lijie13452646414', 2, '2019-12-09 17:19:31');
INSERT INTO `feedback` VALUES (3, '阿杰反馈', 'lijie13452646414', 2, '2019-12-09 17:19:31');

-- ----------------------------
-- Table structure for friendlink
-- ----------------------------
DROP TABLE IF EXISTS `friendlink`;
CREATE TABLE `friendlink`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `blogger` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `url` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of friendlink
-- ----------------------------
INSERT INTO `friendlink` VALUES (1, 'naget的小屋', 'https://naget.github.io');
INSERT INTO `friendlink` VALUES (2, 'Li Pan\'s 博客', 'http://www.lipan.xyz');
INSERT INTO `friendlink` VALUES (3, '陈晓雷个人博客', 'http://www.csxll.top');
INSERT INTO `friendlink` VALUES (4, 'SAn Blog', 'https://sanii.cn');
INSERT INTO `friendlink` VALUES (5, '会打篮球的程序猿', 'http://www.liuzhaopo.top');
INSERT INTO `friendlink` VALUES (6, 'Mr_曾中杰', 'https://www.zengzhongjie.com');
INSERT INTO `friendlink` VALUES (8, 'Face2Object', 'https://www.bossding.com.cn');
INSERT INTO `friendlink` VALUES (9, '小海博客', 'https://www.celess.cn');

-- ----------------------------
-- Table structure for leave_message_likes_record
-- ----------------------------
DROP TABLE IF EXISTS `leave_message_likes_record`;
CREATE TABLE `leave_message_likes_record`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pageName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pId` int(11) NOT NULL,
  `likerId` int(11) NOT NULL,
  `likeDate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of leave_message_likes_record
-- ----------------------------
INSERT INTO `leave_message_likes_record` VALUES (1, 'aboutme', 25, 1, '2019-12-16 13:40');
INSERT INTO `leave_message_likes_record` VALUES (2, 'aboutme', 19, 1, '2019-12-16 15:08');

-- ----------------------------
-- Table structure for leave_message_record
-- ----------------------------
DROP TABLE IF EXISTS `leave_message_record`;
CREATE TABLE `leave_message_record`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pageName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pId` int(255) NOT NULL,
  `answererId` int(11) NOT NULL,
  `respondentId` int(11) NOT NULL,
  `leaveMessageDate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `likes` int(11) NOT NULL,
  `leaveMessageContent` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `isRead` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 26 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of leave_message_record
-- ----------------------------
INSERT INTO `leave_message_record` VALUES (14, 'categories', 0, 1, 1, '2018-09-19 13:53', 0, '分类留言测试', 0);
INSERT INTO `leave_message_record` VALUES (15, 'archives', 0, 1, 1, '2018-09-19 13:53', 0, '归档留言', 0);
INSERT INTO `leave_message_record` VALUES (16, 'tags', 0, 1, 1, '2018-09-19 13:53', 0, '标签留言', 0);
INSERT INTO `leave_message_record` VALUES (17, 'update', 0, 1, 1, '2018-09-19 13:53', 0, '更新留言', 0);
INSERT INTO `leave_message_record` VALUES (18, 'friendlylink', 0, 1, 1, '2018-09-19 13:54', 0, '需要添加友链的朋友可在www.zhyocean.cn/friendlylink下方留言（网站名称+网址），随后验证后会在本人博客中添加友链链接', 0);
INSERT INTO `leave_message_record` VALUES (19, 'aboutme', 0, 1, 1, '2019-12-06 13:34', 1, '111', 0);
INSERT INTO `leave_message_record` VALUES (20, 'archives', 0, 1, 1, '2019-12-06 17:02', 0, '归档留言测试', 0);
INSERT INTO `leave_message_record` VALUES (21, 'categories', 0, 1, 1, '2019-12-06 17:03', 0, '分类留言测试', 0);
INSERT INTO `leave_message_record` VALUES (22, 'tags', 0, 1, 1, '2019-12-06 17:03', 0, '标签留言测试', 0);
INSERT INTO `leave_message_record` VALUES (23, 'update', 0, 1, 1, '2019-12-06 17:03', 0, '更新留言测试', 0);
INSERT INTO `leave_message_record` VALUES (24, 'friendlylink', 0, 1, 1, '2019-12-06 17:04', 0, '友链留言测试', 0);
INSERT INTO `leave_message_record` VALUES (25, 'aboutme', 0, 1, 1, '2019-12-06 17:04', 1, '关于我留言测试', 0);

-- ----------------------------
-- Table structure for privateword
-- ----------------------------
DROP TABLE IF EXISTS `privateword`;
CREATE TABLE `privateword`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `privateWord` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `publisherId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `replierId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `replyContent` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `publisherDate` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of privateword
-- ----------------------------
INSERT INTO `privateword` VALUES (8, '悄悄话测试', '1', '1', '122222222', '2018-09-19 14:13:32');
INSERT INTO `privateword` VALUES (9, '悄悄话', '1', '1', '你好', '2019-12-09 10:14:35');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, 'ROLE_USER');
INSERT INTO `role` VALUES (2, 'ROLE_ADMIN');
INSERT INTO `role` VALUES (3, 'ROLE_SUPERADMIN');

-- ----------------------------
-- Table structure for tags
-- ----------------------------
DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tagName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tagSize` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tags
-- ----------------------------
INSERT INTO `tags` VALUES (1, '随笔感悟', 15);
INSERT INTO `tags` VALUES (4, 'SpringBoot', 17);
INSERT INTO `tags` VALUES (5, '个人博客', 18);
INSERT INTO `tags` VALUES (18, '原创', 20);
INSERT INTO `tags` VALUES (19, '心情', 20);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gender` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trueName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `birthday` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `personalBrief` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `avatarImgUrl` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `recentlyLanded` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '13452646414', '李杰', 'a3caed36f0fe5a01e5f144db8927235e', 'male', '李杰', '1997-09-24', '1227478204@qq.com', '222', 'https://lijiewmq.oss-cn-chengdu.aliyuncs.com/public/个人博客/user/avatar/李杰/1575536442.png', '2019-12-16 16:59:42');
INSERT INTO `user` VALUES (2, '17623303014', '小号', 'a3caed36f0fe5a01e5f144db8927235e', 'male', '阿杰', '2000-02-03', 'lijiewmq1@163.com', '111', 'https://lijiewmq.oss-cn-chengdu.aliyuncs.com/public/个人博客/user/avatar/小号/1575882928.jpeg', '2019-12-09 16:47:48');

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role`  (
  `User_id` int(11) NOT NULL,
  `Role_id` int(11) NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES (1, 3);
INSERT INTO `user_role` VALUES (1, 1);
INSERT INTO `user_role` VALUES (2, 1);

-- ----------------------------
-- Table structure for visitor
-- ----------------------------
DROP TABLE IF EXISTS `visitor`;
CREATE TABLE `visitor`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `visitorNum` bigint(20) NOT NULL,
  `pageName` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of visitor
-- ----------------------------
INSERT INTO `visitor` VALUES (1, 4051, 'totalVisitor');
INSERT INTO `visitor` VALUES (2, 1159, 'visitorVolume');
INSERT INTO `visitor` VALUES (3, 52, 'article/1532884460');
INSERT INTO `visitor` VALUES (5, 76, 'article/1533196734');
INSERT INTO `visitor` VALUES (6, 5, 'article/1575623339');

SET FOREIGN_KEY_CHECKS = 1;
