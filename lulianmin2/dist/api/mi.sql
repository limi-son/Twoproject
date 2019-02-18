/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : mi

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2019-02-18 13:52:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(255) NOT NULL,
  `uid` int(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `num` int(255) DEFAULT NULL,
  `sum` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('13', '17', '小米电视4 65英寸全面屏旗舰版', 'pms_1540366231.87578189.jpg', '5999', '1', '5999');
INSERT INTO `cart` VALUES ('11', '16', '小米电视4C 50英寸', 'pms_1522318330.86967810.jpg', '1999', '2', '3998');
INSERT INTO `cart` VALUES ('9', '16', '小米电视4 55英寸', 'pms_1510111588.69169839.jpg', '3699', '1', '3699');
INSERT INTO `cart` VALUES ('5', '17', '红米6A', 'pms_1528719461.07717556.jpg', '599', '3', '1797');

-- ----------------------------
-- Table structure for com_list
-- ----------------------------
DROP TABLE IF EXISTS `com_list`;
CREATE TABLE `com_list` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `ids` int(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(255) DEFAULT NULL,
  `imges` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `Gift` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of com_list
-- ----------------------------
INSERT INTO `com_list` VALUES ('1', '1', '小米MIX 2S 8GB+256GB', '3399', '../images/pms_2.jpg', '../images/mix2s80-80white.png', 'xin');
INSERT INTO `com_list` VALUES ('2', '1', '小米6X 6GB+128GB', '1499', '../images/pms_3.jpg', '../images/80808080808080.jpg', null);
INSERT INTO `com_list` VALUES ('3', '1', '红米6 Pro', '1209', '../images/pms_5.jpg', '../images/6pro140-140.png', null);
INSERT INTO `com_list` VALUES ('4', '1', '小米8 SE 6GB+64GB', '1699', '../images/pms_6.jpg', '../images/m8se-80.png', 'xin');
INSERT INTO `com_list` VALUES ('5', '1', '红米6A 2GB+16GB', '549', '../images/pms_7.jpg', '../images/666666.png', null);
INSERT INTO `com_list` VALUES ('6', '1', '小米Max 3 4GB+64GB', '1599', '../images/pms_8.jpg', '../images/max3-80-80.png', null);
INSERT INTO `com_list` VALUES ('7', '1', '小米Play', '1099', '../images/pms_9.png', '../images/note780-80.png', null);
INSERT INTO `com_list` VALUES ('8', '2', '小米电视4X 43英寸', '1399', '../images/pm1.jpg', '../images/TV4X-43xin.png', null);
INSERT INTO `com_list` VALUES ('9', '2', '小米电视4 55英寸', '3699', '../images/pm2.jpg', '../images/TV4-55.png', null);
INSERT INTO `com_list` VALUES ('10', '2', '小米电视4A 32英寸', '899', '../images/pm3.jpg', '../images/TV4C-32.png', null);
INSERT INTO `com_list` VALUES ('11', '2', '小米电视4C 50英寸', '1899', '../images/pm4.jpg', '../images/TV4C-50.png', null);
INSERT INTO `com_list` VALUES ('12', '2', '小米电视4A 58英寸', '2499', '../images/pm5.jpg', '../images/TV4A-58-x.png', null);
INSERT INTO `com_list` VALUES ('13', '2', '小米电视4 65英寸全面屏旗舰版', '5999', '../images/pm6.jpg', '../images/TV4X-55.png', null);
INSERT INTO `com_list` VALUES ('14', '3', '15.6\"笔记本 i7 8G MX110\r\n', '4999', '../images/p1.jpg', '../images/pc1.jpg', null);
INSERT INTO `com_list` VALUES ('15', '3', '13.3\"小米笔记本Air 四核i5 8G 256G 集显 银色', '4999', '../images/p2.jpg', '../images/pc2.jpg', null);
INSERT INTO `com_list` VALUES ('16', '3', '12.5\"小米笔记本Air M3 4G 128G 金色', '3999', '../images/p3.jpg', '../images/pc3.jpg', null);
INSERT INTO `com_list` VALUES ('17', '3', '小米游戏本15.6”8代i5 8G 1T+256G 1060 6G', '7999', '../images/p4.jpg', '../images/pc4.jpg', null);
INSERT INTO `com_list` VALUES ('18', '3', '小米平板4 Plus', '1499', '../images/p5.jpg', '../images/pingban2.jpg', null);
INSERT INTO `com_list` VALUES ('19', '3', '悦米机械键盘Pro静音版', '599', '../images/p6.jpg', '../images/pc6.jpg', null);
INSERT INTO `com_list` VALUES ('20', '1', '黑鲨游戏手机', '1999', '../images/heisha-80.png', '../images/heisha-80.png', null);
INSERT INTO `com_list` VALUES ('21', '1', '黑鲨游戏手机 Helo', '1999', '../images/pms_1539913759.18356169.jpg', '../images/pms_1539913759.18356169.jpg', null);
INSERT INTO `com_list` VALUES ('22', '1', '小米8 屏幕指纹版', '1999', '../images/pms_1538019355.46916163.jpg', '../images/pms_1538019355.46916163.jpg', null);

-- ----------------------------
-- Table structure for detail
-- ----------------------------
DROP TABLE IF EXISTS `detail`;
CREATE TABLE `detail` (
  `ids` int(255) NOT NULL,
  `uid` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `p` varchar(255) DEFAULT NULL,
  `Give` varchar(255) DEFAULT NULL,
  `Edition1` varchar(255) DEFAULT NULL,
  `Edition2` varchar(255) DEFAULT NULL,
  `Accident` varchar(255) DEFAULT NULL,
  `Accidentp` varchar(255) DEFAULT NULL,
  `Broken` varchar(255) DEFAULT NULL,
  `Brokenp` varchar(255) DEFAULT NULL,
  `Pprice` varchar(255) DEFAULT NULL,
  `Oprice` varchar(255) DEFAULT NULL,
  `color1` varchar(255) DEFAULT NULL,
  `color2` varchar(255) DEFAULT NULL,
  `Eprice1` varchar(255) DEFAULT NULL,
  `Eprice2` varchar(255) DEFAULT NULL,
  `images1` varchar(255) DEFAULT NULL,
  `images2` varchar(255) DEFAULT NULL,
  `images3` varchar(255) DEFAULT NULL,
  `num` int(255) DEFAULT NULL,
  `sum` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ids`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of detail
-- ----------------------------
INSERT INTO `detail` VALUES ('1', null, '小米MIX 2S', '陶瓷机身 手机中的艺术品 / 搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 高效 Qi 无线充电', '赠米粉卡，最高含100元话费', '6GB+128GB', '6GB+64GB', '意外保障服务', '手机意外摔落/进水/碾压等损坏', '碎屏保障服务', '手机意外碎屏', '2699', '3599', '黑色', '白色', '2699', '2399', 'pms_1522034005.26178961.jpg', 'pms_1522034001.74522415.jpg', null, '1', '2699');
INSERT INTO `detail` VALUES ('2', null, '小米6X', '轻薄美观的拍照手机 / 前置2000万“治愈系”自拍 / 后置2000万 AI双摄 / 标配骁龙660 AIE处理器', '赠米粉卡，最高含100元话费', '6GB+128GB', '6GB+64GB', '意外保障服务', '手机意外摔落/进水/碾压等损坏', '碎屏保障服务', '手机意外碎屏', '1299', '1799', '曜石黑', '赤焰红', '1299', '1499', 'pms_1524621222.66011593.jpg', 'pms_1524621225.83162698.jpg', null, '1', '1299');
INSERT INTO `detail` VALUES ('3', null, '红米6 Pro', '高颜值大电量 红米旗舰 / 异形全面屏 19:9 FHD＋ / 后置1200万 AI双摄', '赠米粉卡，最高含100元话费', '6GB+64GB', null, '意外保障服务', '手机意外摔落/进水/碾压等损坏', '碎屏保障服务', '手机意外碎屏', '1029', '1299', '曜石黑', '樱花粉', '1029', null, 'pms_1529635747.42979757.jpg', 'pms_1529635751.98631070.jpg', null, '1', '1029');
INSERT INTO `detail` VALUES ('4', null, '小米8 SE', '三星 AMOLED 全面屏 小屏旗舰 / 骁龙710处理器 / AI 超感光双摄 / 前置2000万柔光自拍', '赠米粉卡，最高含100元话费', '6GB+128GB全网通', '6GB+64GB全网通', '意外保障服务', '手机意外摔落/进水/碾压等损坏', '碎屏保障服务', '手机意外碎屏', '1599', '1999', '深灰', '金色', '1799', '1599', 'pms_1530807181.61769467.jpg', 'pms_1530806530.04313699.jpg', null, '1', '1599');
INSERT INTO `detail` VALUES ('5', null, '红米6A', '好用好看不贵 / 12nm高性能处理器 / 1300万高清相机 / “小杨柳腰”机身', '赠米粉卡，最高含100元话费', '2GB+16GB', '3GB+32GB', '意外保障服务', '手机意外摔落/进水/碾压等损坏', '碎屏保障服务', '手机意外碎屏', '599', '699', '流沙金', '樱花粉', '549', '599', 'pms_1528719461.07717556.jpg', 'pms_1528719455.74358029.jpg', null, '1', '599');
INSERT INTO `detail` VALUES ('6', null, '小米Max 3', '大屏大电量 震撼视界 / 5500mAh 电量，支持给多个设备充电 / AI 双摄超大像素，双核对焦 / 单手可握纤薄全金属机身', '赠米粉卡，最高含100元话费', '4GB+64GB', '6GB+128GB', '意外保障服务', '手机意外摔落/进水/碾压等损坏', '碎屏保障服务', '手机意外碎屏', '1599', '1699', '黑色', '金色', '1599', '1899', 'pms_1531878144.55329994.jpg', 'pms_1531878001.22998509.jpg', null, '1', '1599');
INSERT INTO `detail` VALUES ('7', null, '小米Play', '内置每月10GB高速流量 / 高颜值流光渐变色 / 5.84\"小水滴全面屏 / 后置1200万 AI 双摄 / 八核高性能处理器', '赠米粉卡，最高含100元话费', '4GB+64GB', null, '意外保障服务', '手机意外摔落/进水/碾压等损坏', '碎屏保障服务', '手机意外碎屏', '1099', '1299', '梦幻蓝', '黑色', '1099', null, 'pms_1545457703.71734471.png', 'pms_1545457714.33536054.png', null, '1', '1099');
INSERT INTO `detail` VALUES ('8', null, '小米电视4X 43英寸', 'FHD全高清屏/ 人工智能语音 / 大储存 / 高性能 / 海量内容 / 钢琴烤漆', '赠米粉卡，最高含100元话费', '43英尺', null, '电视座装服务', '50-59英寸电视座装', '电视挂装服务', '50-59英寸电视挂装（含电视挂架）', '1499', '1599', '黑色', null, '1499', null, 'pms_1539315570.63599432.jpg', null, null, '1', '1499');
INSERT INTO `detail` VALUES ('9', null, '小米电视4 55英寸', '4.9mm 极超薄机身 / 无边框式设计 / 2GB+8GB大内存', '赠米粉卡，最高含100元话费', '55英尺', null, '电视座装服务', '50-59英寸电视座装', '电视挂装服务', '50-59英寸电视挂装（含电视挂架）', '3699', '3999', '黑色', null, '3699', null, 'pms_1510111588.69169839.jpg', null, null, '1', '3699');
INSERT INTO `detail` VALUES ('10', null, '小米电视4A 32英寸', '64位四核处理器 / 1GB+4GB大内存 / 高清液晶屏 / 第6代画质引擎 / 人工智能系统PatchWall / 轻至4kg', '赠米粉卡，最高含100元话费', '32英尺', null, '电视座装服务', '50-59英寸电视座装', '电视挂装服务', '50-59英寸电视挂装（含电视挂架）', '899', '999', '黑色', null, '899', null, 'pms_1500287084.72131750.jpg', null, null, '1', '899');
INSERT INTO `detail` VALUES ('11', null, '小米电视4C 50英寸', '4K HDR / 人工智能语音 / 钢琴烤漆 / 超窄边 / 2GB+8GB大存储 / 海量片源 / 杜比音效', '赠米粉卡，最高含100元话费', '50英尺', null, '电视座装服务', '50-59英寸电视座装', '电视挂装服务', '50-59英寸电视挂装（含电视挂架）', '1999', '2199', '黑色', null, '1999', null, 'pms_1522318330.86967810.jpg', null, null, '1', '1999');
INSERT INTO `detail` VALUES ('12', null, '小米电视4A 58英寸', '4K HDR / 语音搜片 / 海量片源 / 震撼音效 / 高性能 / 大储存', '赠米粉卡，最高含100元话费', '58英尺', null, '电视座装服务', '50-59英寸电视座装', '电视挂装服务', '50-59英寸电视挂装（含电视挂架）', '2699', '2999', '黑色', null, '2699', null, 'pms_1539855763.04646220.jpg', null, null, '1', '2699');
INSERT INTO `detail` VALUES ('13', null, '小米电视4 65英寸全面屏旗舰版', '7.5mm超薄金属机身/视觉无边框式全面屏设计 / 4K HDR / 人工智能语音系统 / 2GB+16GB / Dolby+DTS音频双解码', '赠米粉卡，最高含100元话费', '65英尺', null, '电视座装服务', '50-59英寸电视座装', '电视挂装服务', '50-59英寸电视挂装（含电视挂架）', '5999', '699', '黑色', null, '5999', null, 'pms_1540366231.87578189.jpg', null, null, '1', '5999');
INSERT INTO `detail` VALUES ('14', null, '小米笔记本 15.6\"', '全新第八代 ／ 独立显卡，2GB显存 ／ 双风扇散热系统 ／ 双内存大硬盘可扩展 ／ 7大接口 ／ 独立数字键盘', '赠米粉卡，最高含100元话费', 'i5 4G 128G SATA+1TB  ', 'i7 8G 128G SATA+1TB ', null, null, null, null, '4199', '5199', '深空灰', null, '4199', ' 4999', 'pms_1535357046.36178878.jpg', null, null, '1', '4199');
INSERT INTO `detail` VALUES ('15', null, '小米笔记本Air 13.3\" 四核增强', '四核增强版 / 带独立显卡的轻薄笔记本 / MX150 2G独显 / 指纹解锁', '赠米粉卡，最高含100元话费', '   13.3英寸 四核增强 i5版  ', '   13.3英寸 四核增强 i7版 ', null, null, null, null, '5399', '5599', '深空灰', '银色', '5399', '4999', 'pms_1525231442.13261362.jpg', 'pms_1524636075.71677607.jpg', null, '1', '5399');
INSERT INTO `detail` VALUES ('16', null, '小米笔记本Air 12.5英寸', '轻薄全金属机身 / 超长续航，支持1C快充 / FHD 全贴合屏幕 / 高能量密度电池', '赠米粉卡，最高含100元话费', '12.5英寸 i5 4G 256G ', '12.5英寸 M3 4G 128G ', null, null, null, null, '4299', '5299', '银色', '黑色', '4299', '3599', 'pms_1545035186.7073283.jpg', null, null, '1', '4299');
INSERT INTO `detail` VALUES ('17', null, '15.6寸游戏本 八代增强版', '第八代酷睿处理器 ／ 72%NTSC高色域窄边框全高清屏 ／ 256G PCIe高速固态 ／ 双烤不限频不降频', '赠米粉卡，最高含100元话费', '   i5 8G 1T+256G 1050Ti 4G ', '   i7 16G 1T+256G 1060 6G ', null, null, null, null, '6699', '7799', '黑色', null, '6699', '8999', 'pms_1533196264.93016093.jpg', null, null, '1', '6699');
INSERT INTO `detail` VALUES ('18', null, '小米平板4 / 小米平板4 Plus', '大电量，超长续航 / 支持AI人脸识别 / 后置1300万，前置500万摄像头 / 金属机身，超窄边框 / 骁龙660八核处理器', '赠米粉卡，最高含100元话费', '8英寸 LTE版 64GB ', '10英寸 LTE版 128GB ', null, null, null, null, '1499', '1599', '金色', '黑色', '1499', '2099', 'pms_1529842987.88097905.jpg', 'pms_1529842983.87383073.jpg', null, '1', '1499');
INSERT INTO `detail` VALUES ('19', null, '悦米机械键盘Pro静音版', 'CNC全铝机身，精致由内到外 ／ TTC静音红轴，享受静谧好手感 ／ 细腻触感，经久耐用', '赠米粉卡，最高含100元话费', '静音版', null, null, null, null, null, '599', '699', '白色', '黑色', '599', null, 'pms_1524541903.00355516.jpg', 'pms_1524541900.12582186.jpg', null, '1', '599');
INSERT INTO `detail` VALUES ('20', null, '黑鲨游戏手机', 'CNC全铝机身，精致由内到外 ／ TTC静音红轴，享受静谧好手感 ／ 细腻触感，经久耐用', '赠米粉卡，最高含100元话费', '6GB+12GB', null, null, null, null, null, '1999', '2000', '黑色', null, null, null, 'heisha-80.png', null, null, null, null);
INSERT INTO `detail` VALUES ('21', null, '黑鲨游戏手机 Helo', '大电量，超长续航 / 支持AI人脸识别 / 后置1300万，前置500万摄像头 / 金属机身，超窄边框 / 骁龙660八核处理器', '赠米粉卡，最高含100元话费', '6GB+12GB', null, null, null, null, null, '1999', '2011', '黑色', null, null, null, 'pms_1539913759.18356169.jpg', '', null, null, null);
INSERT INTO `detail` VALUES ('22', null, '小米8 屏幕指纹版', '大电量，超长续航 / 支持AI人脸识别 / 后置1300万，前置500万摄像头 / 金属机身，超窄边框 / 骁龙660八核处理器', '赠米粉卡，最高含100元话费', null, null, null, null, null, null, '1999', '2033', '黑色', null, null, null, 'pms_1538019355.46916163.jpg', null, null, null, null);

-- ----------------------------
-- Table structure for index_list
-- ----------------------------
DROP TABLE IF EXISTS `index_list`;
CREATE TABLE `index_list` (
  `id` int(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `p` varchar(255) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `Pprice` float(255,2) DEFAULT NULL,
  `Oprice` float(255,2) DEFAULT NULL,
  `commenter` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `hot` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of index_list
-- ----------------------------
INSERT INTO `index_list` VALUES ('16', '2', '小米电视4 65英寸旗舰版', null, null, 'images/pm4.jpg', '1402.00', '1602.00', null, '朋友同事来家都说电视超值，非常棒，花最少的钱，享最好...', null);
INSERT INTO `index_list` VALUES ('15', '2', '小米电视4 55英寸', null, '64位四核处理器 / 1GB+4GB大内存', 'images/pm3.jpg', '1401.00', '1601.00', null, '已安装好了，是不是很气派', null);
INSERT INTO `index_list` VALUES ('14', '2', '小米电视4A 58英寸', null, '4.9mm 极超薄机身 / 2GB+8GB 大内存空间', 'images/pm2.jpg', '1400.00', '1600.00', null, '很惊艳，全家人都很喜欢，感觉有点买小了！效果也不错', null);
INSERT INTO `index_list` VALUES ('12', '1', '红米6A', '2GB+16GB', null, 'images/pms_5.jpg', '549.00', '599.00', null, null, null);
INSERT INTO `index_list` VALUES ('13', '2', '小米电视4X 43英寸', null, null, 'images/pm1.jpg', '1399.00', '1599.00', null, '已安装好了，是不是很气派', null);
INSERT INTO `index_list` VALUES ('11', '1', '红米6', '4GB+64GB', '高颜值大电量 红米旗舰', 'images/pms_3.jpg', '1029.00', '1299.00', null, null, null);
INSERT INTO `index_list` VALUES ('10', '1', '小米6X', '6GB+128GB', '轻薄美观的拍照手机', 'images/pms_2.jpg', '1499.00', '1999.00', null, null, null);
INSERT INTO `index_list` VALUES ('8', '1', '小米8 青春版', '4GB+64GB', '潮流镜面渐变色，2400万自拍旗舰', 'images/pms_1537324004.08544830.jpg', '1299.00', '1399.00', null, null, null);
INSERT INTO `index_list` VALUES ('9', '1', '小米8 SE', '4GB+64GB', 'AI 超感光双摄，三星 AMOLED 屏幕', 'images/pms_1530806532.69052620.jpg', '1699.00', '1999.00', null, null, null);
INSERT INTO `index_list` VALUES ('7', '1', '小米Max 3', '4GB+64GB', 'AI 超感光双摄，三星 AMOLED 屏幕', 'images/pms_1531878144.55329994 (1).jpg', '1599.00', '1699.00', null, null, null);
INSERT INTO `index_list` VALUES ('6', '1', '小米MIX 2S', '8GB+256GB', '骁龙845 年度旗舰处理器', 'images/pms_2.jpg', '3399.00', '3999.00', null, null, null);
INSERT INTO `index_list` VALUES ('4', '1', '小米8', '4GB+66GB', '高颜值大电量 红米旗舰', 'images/pms_1530806532.69052620.jpg', '1399.00', '1489.00', null, null, null);
INSERT INTO `index_list` VALUES ('5', '1', '黑鲨游戏手机', '8GB+256GB', 'AI 超感光双摄，三星 AMOLED 屏幕', 'images/heisha-80.png', '1400.00', '1499.00', null, null, null);
INSERT INTO `index_list` VALUES ('3', '1', '小米8 屏幕指纹版', '4GB+65GB', '高颜值大电量 ', 'images/pms_1538019355.46916163.jpg', '1388.00', '1499.00', null, null, null);
INSERT INTO `index_list` VALUES ('1', '1', '小米MIX 3', '4GB+64GB', '高颜值大电量 红米旗舰', 'images/pms_1548732345.08642868.jpg', '2399.00', '2499.00', null, null, null);
INSERT INTO `index_list` VALUES ('2', '1', '黑鲨游戏手机 Helo', '4GB+64GB', '高颜值大电量 红米旗舰', 'images/pms_1539913759.18356169.jpg', '2299.00', '2399.00', null, null, null);
INSERT INTO `index_list` VALUES ('17', '2', '小米电视4A 32英寸', null, '4K HDR / 人工智能语音', 'images/pm5.jpg', '1403.00', '1603.00', null, '电视非常好，大气，非常清楚。我是相信小米，希望小米的...', null);
INSERT INTO `index_list` VALUES ('18', '2', '小米电视4C 50英寸 ', null, null, 'images/pm6.jpg', '1404.00', '1604.00', null, '电视非常大，智能语言遥控，画面清析，效果好，这是第二...', null);
INSERT INTO `index_list` VALUES ('19', '3', '小米笔记本 15.6', null, null, 'images/bijiben.jpg\r\n', null, null, null, null, null);
INSERT INTO `index_list` VALUES ('20', '3', '小米笔记本 13.3\"', null, null, 'images/80x80.png\r\n', null, null, null, null, null);
INSERT INTO `index_list` VALUES ('21', '3', '小米笔记本 12.5\"', null, null, 'images/bijiben80.jpg\r\n', null, null, null, null, null);
INSERT INTO `index_list` VALUES ('22', '3', '小米游戏本\r\n', null, null, 'images/youxiben-80.jpg\r\n', null, null, null, null, null);
INSERT INTO `index_list` VALUES ('23', '3', '小米平板4\r\n', null, null, 'images/pingban2.jpg\r\n', null, null, null, null, null);
INSERT INTO `index_list` VALUES ('24', '3', '键盘', null, null, 'images/yuemijianpan80.jpg\r\n', null, null, null, null, null);
INSERT INTO `index_list` VALUES ('26', '4', '小米净水器滤芯 前置活性炭', null, null, 'images/pms_1525317107.95571913!200x200.jpg', '69.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('25', '4', '小米净水器滤芯 PP棉', null, null, 'images/pms_1525317355.64747798!200x200.jpg', '59.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('27', '4', '米家空气净化器MAX', null, null, 'images/pms_1514092107.15719247!200x200.jpg', '1999.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('28', '4', '米家PM2.5检测仪', null, null, 'images/pms_1477980865.4569720!200x200.jpg', '399.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('29', '4', '米家电磁炉', null, null, 'images/pms_1513822496.31335198!200x200.jpg', '299.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('30', '4', '知吾煮汤锅 米家定制', null, null, 'images/pms_1513864376.45999722!200x200.jpg', '99.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('31', '5', '小米手环3', null, null, 'images/pms_1527754949.17141338!200x200.jpg', '169.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('32', '5', '小米VR一体机 超级玩家版', null, null, 'images/pms_1540191915.27975634!200x200.jpg', '1799.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('33', '5', '九号平衡车', null, null, 'images/T1PXhgBbdT1RXrhCrK!200x200.jpg', '1999.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('34', '5', '小米米家电动滑板车', null, null, 'images/pms_1488272686.62666302!200x200.jpg', '1999.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('35', '5', '米家车载逆变器', null, null, 'images/pms_1515737497.86741163!200x200.jpg', '199.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('36', '5', '九号平衡车Plus载物套装', null, null, 'images/pms_1516586512.64068731!200x200.jpg', '3598.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('51', '8', '米家电动剃须刀', null, null, 'images/pms_1522204891.45957856!200x200.jpg', '199.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('38', '6', '照片打印机彩色相纸套装', null, null, 'images/pms_1545098713.39497754!200x200.jpg', '59.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('39', '6', '小米路由器4Q', null, null, 'images/pms_1529131568.29222117.jpg', '99.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('40', '6', '小米米家对讲机1S', null, null, 'images/pms_1539319113.52231249!200x200.jpg', '249.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('41', '6', '米家无线开关', null, null, 'images/pms_1481272632.26582088!200x200.jpg', '39.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('42', '6', '米家多功能网关', null, null, 'images/pms_1480474019.52478532!200x200.jpg', '149.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('43', '6', '小米无人机4K版套装', null, null, 'images/pms_1487824962.01314237!200x200.jpg', '2999.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('52', '8', '贝医生儿童牙刷（单支装）', null, null, 'images/pms_1520924234.30299725!200x200.jpg', '199.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('45', '7', '新小米移动电源2', null, null, 'images/pms_1513857241.9291821!200x200.jpg', '79.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('46', '7', '小米USB-C数据线 编织线版 ', null, null, 'images/pms_1517399998.788493!200x200.jpg', '19.90', null, null, null, null);
INSERT INTO `index_list` VALUES ('47', '7', '小米车载充电器快充版', null, null, 'images/pms_1497595116.43497902!200x200.jpg', '69.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('48', '7', '小米USB充电器（4口）', null, null, 'images/pms_1510291188.31088548!200x200.jpg', '59.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('49', '7', '小米无线充电器', null, null, 'images/pms_1535440524.10478102!200x200.jpg', '69.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('50', '7', '小米自拍杆（线控版）', null, null, 'images/pms_1511162363.30926502!200x200.jpg', '49.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('53', '8', '小米体脂秤', null, null, 'images/pms_1520305448.69043497!200x200.jpg', '199.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('54', '8', '小米体重秤', null, null, 'images/T1sWd_B7VT1RXrhCrK!200x200.jpg', '99.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('55', '8', '米兔儿童电话手表3 4G', null, null, 'images/pms_1532316921.6367858!200x200.png', '599.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('56', '8', '米兔指尖积木', null, null, 'images/pms_1533025582.1891478!200x200.jpg', '9.90', null, null, null, null);
INSERT INTO `index_list` VALUES ('57', '9', '小米小爱音箱mini', null, null, 'images/pms_1524571235.37826274.jpg', '169.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('58', '9', '小米活塞耳机 清新版', null, null, 'images/pms_1482321199.12589253!200x200.jpg', '29.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('59', '9', '小米蓝牙耳机青春版', null, null, 'images/pms_1478248761.54944181!200x200.jpg', '53.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('60', '9', '小米头戴式耳机 轻松版', null, null, 'images/pms_1482301662.61336109!200x200.jpg', '195.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('61', '9', '小米小爱蓝牙音箱随身版', null, null, 'images/pms_1543389479.71079032!200x200.jpg', '49.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('62', '9', '小米AI音箱', null, null, 'images/pms_1522666970.27937468.jpg', '299.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('63', '10', '小米极简都市双肩包', null, null, 'images/T1a3DvB7hv1RXrhCrK!200x200.jpg', '149.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('64', '10', '90分简约头层小牛皮手包', null, null, 'images/pms_1522312944.15363044!200x200.jpg', '99.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('65', '10', '90分轻户外旅行洗漱包', null, null, 'images/pms_1469429887.76894954!200x200.jpg', '29.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('66', '10', '90分旅行箱 1A 20英寸', null, null, 'images/pms_1534906375.47962399!200x200.jpg', '299.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('67', '10', '米家运动鞋2 男款', null, null, 'images/pms_1528368095.99082693!200x200.jpg', '199.00', null, null, null, null);
INSERT INTO `index_list` VALUES ('68', '10', '小米棒球帽2', null, null, 'images/pms_1546584430.78773603!200x200.jpg', '49.00', null, null, null, null);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `uid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` char(16) DEFAULT NULL,
  `password` char(32) DEFAULT NULL,
  `avatar` tinyint(1) unsigned DEFAULT '1',
  `login_key` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('16', '??', '202cb962ac59075b964b07152d234b70', '1', null);
INSERT INTO `users` VALUES ('17', 'jjj', '202cb962ac59075b964b07152d234b70', '1', null);
SET FOREIGN_KEY_CHECKS=1;
