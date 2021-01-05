-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 04 jan. 2021 à 09:21
-- Version du serveur :  10.5.8-MariaDB
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `lme`
--
CREATE DATABASE IF NOT EXISTS `lme` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `lme`;

-- --------------------------------------------------------

--
-- Structure de la table `artistes`
--

DROP TABLE IF EXISTS `artistes`;
CREATE TABLE IF NOT EXISTS `artistes` (
  `id` int(80) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `biographie` text NOT NULL,
  `id_mouvement` int(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `artistes`
--

INSERT INTO `artistes` (`id`, `nom`, `img`, `biographie`, `id_mouvement`) VALUES
(2, 'Caspar David Friedrich', 'caspar-david-friedrich.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum elementum vestibulum. Fusce dapibus, mi ut ultrices ornare, enim elit fringilla turpis, at aliquet justo eros et nulla.', 1),
(3, 'Claude Monet', 'claude-monet.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum elementum vestibulum. Fusce dapibus, mi ut ultrices ornare, enim elit fringilla turpis, at aliquet justo eros et nulla.', 2),
(4, 'Alexandre Cabanel', 'alexandre-cabanel.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum elementum vestibulum. Fusce dapibus, mi ut ultrices ornare, enim elit fringilla turpis, at aliquet justo eros et nulla.', 3),
(5, 'Théophile Alexandre Steinlen', 'theophile-alexandre-steinlen.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum elementum vestibulum. Fusce dapibus, mi ut ultrices ornare, enim elit fringilla turpis, at aliquet justo eros et nulla.', 4),
(6, 'Zdzisław Beksiński', 'zdzisław-beksiński.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum elementum vestibulum. Fusce dapibus, mi ut ultrices ornare, enim elit fringilla turpis, at aliquet justo eros et nulla.', 5);

-- --------------------------------------------------------

--
-- Structure de la table `favoris`
--

DROP TABLE IF EXISTS `favoris`;
CREATE TABLE IF NOT EXISTS `favoris` (
  `id` int(80) NOT NULL,
  `id_utilisateur` int(80) NOT NULL,
  `id_oeuvre` int(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `mouvements`
--

DROP TABLE IF EXISTS `mouvements`;
CREATE TABLE IF NOT EXISTS `mouvements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `mouvements`
--

INSERT INTO `mouvements` (`id`, `nom`) VALUES
(1, 'Romantisme'),
(2, 'Impressionnisme'),
(3, 'Art Académique'),
(4, 'Art nouveau'),
(5, 'Surréalisme');

-- --------------------------------------------------------

--
-- Structure de la table `oeuvres`
--

DROP TABLE IF EXISTS `oeuvres`;
CREATE TABLE IF NOT EXISTS `oeuvres` (
  `id` int(80) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `date` int(11) NOT NULL,
  `img` varchar(255) NOT NULL,
  `id_mouvement` int(11) NOT NULL,
  `id_artiste` int(11) NOT NULL,
  `anecdote` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `oeuvres`
--

INSERT INTO `oeuvres` (`id`, `titre`, `date`, `img`, `id_mouvement`, `id_artiste`, `anecdote`) VALUES
(1, 'Untitled', 1985, 'untitled.jpg', 5, 6, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum elementum vestibulum. Fusce dapibus, mi ut ultrices ornare, enim elit fringilla turpis, at aliquet justo eros et nulla.'),
(2, 'L\'ange déchu', 1847, 'l-ange-dechu.jpg', 3, 4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum elementum vestibulum. Fusce dapibus, mi ut ultrices ornare, enim elit fringilla turpis, at aliquet justo eros et nulla.'),
(3, 'Le Voyageur contemplant une mer de nuages', 1818, 'le-voyageur-contemplant-une-mer-de-nuages.jpg', 1, 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum elementum vestibulum. Fusce dapibus, mi ut ultrices ornare, enim elit fringilla turpis, at aliquet justo eros et nulla.'),
(4, 'Impression soleil Levant', 1872, 'impression-soleil-levant.jpg', 2, 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum elementum vestibulum. Fusce dapibus, mi ut ultrices ornare, enim elit fringilla turpis, at aliquet justo eros et nulla.'),
(5, 'La Tournée du Chat noir', 1896, 'tournee-du-chat-noir.jpg', 4, 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum elementum vestibulum. Fusce dapibus, mi ut ultrices ornare, enim elit fringilla turpis, at aliquet justo eros et nulla.');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` int(80) NOT NULL,
  `identifiant` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  `mdp` varchar(255) NOT NULL,
  `role` int(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
