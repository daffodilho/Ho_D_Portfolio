-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Dec 08, 2019 at 08:16 PM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `works`
--

DROP TABLE IF EXISTS `works`;
CREATE TABLE IF NOT EXISTS `works` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `preview` varchar(100) NOT NULL,
  `info` varchar(500) NOT NULL,
  `tech` varchar(500) NOT NULL,
  `team` varchar(500) NOT NULL,
  `video` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `works`
--

INSERT INTO `works` (`ID`, `title`, `preview`, `info`, `tech`, `team`, `video`, `image`) VALUES
(1, 'Arbora', 'arbora.png', '\'Arbora\' is a pre-existing brand with two main type of products--tree saplings and seed bombs.  The challenge was to make a point-of-purchase(POP) displays that were functional, beautiful, and sells the brand at the same time.', 'Maxon Cinema 4d, Adobe Illustrator, Adobe Photoshop', 'Daffodil Ho', 'arbora_vid.mp4', 'arbora_img.jpg'),
(2, 'Thor Ragnarok', 'beer.png', 'Strong and powerful Thor Ragnarok Lager Beer is the concept for this design project.  The ultimate goal is to showcase the product in a magazine ad.', 'Maxon Cinema 4d, Adobe Illustrator, Adobe Photoshop', 'Daffodil Ho', '', 'beer_img.jpg'),
(3, 'My Favourite Things', 'mft.png', 'An app showcasing three of my favourite things.  Utilizes databases to display dynamic data.', 'HTML5, Sass, NodeJS', 'Daffodil Ho', 'mft_vid.mp4', 'mft_img.jpg'),
(4, 'float:left', 'fl.png', 'Website for a start-up creative agency.  ', 'HTML5, CSS(SCSS), JavaScript, Adobe Illustrator, Adobe Photoshop, Adobe After Effects ', 'Daffodil Ho, Jeffrey Helder, Lee Soyoon, Lee Sujin', 'fl_vid.mp4', 'fl_img.jpg'),
(5, 'Musical Soda Cans', 'mm.png', 'Fun and nteractive app where you can drag and drop the soda cans into the dispenser to play music.  Original artwork by me.', 'HTML5, CSS, JavaScript, Adobe Illustrator, Logic X Pro', 'Daffodil Ho, Lee Soyoon', 'mm_vid.mp4', 'mm_img.jpg'),
(6, 'Thames River Anglers Association', 'traa.png', 'Redesigned multi-pages website for Thames River Anglers Association(TRAA) with thoughtful reconsideration of colour and layout. ', 'HTML5, CSS, JavaScript, Sketch, Adobe Photoshop, Adobe Illustrator', 'Daffodil Ho, Megan Nguyen', 'traa_vid.mp4', 'traa_img.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
