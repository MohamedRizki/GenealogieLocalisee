-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : dim. 24 déc. 2023 à 19:57
-- Version du serveur : 10.5.20-MariaDB
-- Version de PHP : 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `id21537883_genealogie`
--

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `nom_complet` text NOT NULL,
  `date_de_naissance` text NOT NULL,
  `genre` text NOT NULL,
  `adresse_actuelle` text NOT NULL,
  `lieu_de_naissance` text NOT NULL,
  `nombre_freres_soeurs` text NOT NULL,
  `nombre_demi_freres_soeurs` text NOT NULL,
  `profession_actuelle` text NOT NULL,
  `structure_famille` text NOT NULL,
  `raisons_lieux_marquants` text NOT NULL,
  `trajectoire_sociale` text NOT NULL,
  `nom_complet_pere` text NOT NULL,
  `date_de_naissance_Pere` text NOT NULL,
  `lieu_naissance_pere` text NOT NULL,
  `date_deces_pere` text NOT NULL,
  `lieu_residence_pere` text NOT NULL,
  `profession_pere` text NOT NULL,
  `structure_familiale_pere` text NOT NULL,
  `lieux_significatifs_pere` text NOT NULL,
  `trajectoire_sociale_pere` text NOT NULL,
  `inegalite_sociale_pere` text NOT NULL,
  `nom_complet_mere` text NOT NULL,
  `date_de_naissance_Mere` text NOT NULL,
  `lieu_naissance_Mere` text NOT NULL,
  `date_deces_mere` text NOT NULL,
  `adresse_mere` text NOT NULL,
  `profession_mere` text NOT NULL,
  `structure_familiale_mere` text NOT NULL,
  `lieux_significatifs_mere` text NOT NULL,
  `trajectoire_sociale_mere` text NOT NULL,
  `inegalite_sociale_mere` text NOT NULL,
  `nom_grand_pere_paternel` text NOT NULL,
  `date_naissance_grpp` text NOT NULL,
  `lieu_naissance_grpp` text NOT NULL,
  `date_deces_grpp` text NOT NULL,
  `adresse_grand_pere_paternel` text NOT NULL,
  `profession_grand_pere_paternel` text NOT NULL,
  `structure_familiale_grpp` text NOT NULL,
  `lieux_importants_grpp` text NOT NULL,
  `nom_grand_mere_paternel` text NOT NULL,
  `date_naissance_grmp` text NOT NULL,
  `lieu_naissance_grmp` text NOT NULL,
  `date_deces_grmp` text NOT NULL,
  `adresse_grand_mere_paternel` text NOT NULL,
  `profession_grand_mere_paternel` text NOT NULL,
  `structure_familiale_grmp` text NOT NULL,
  `lieux_importants_grmp` text NOT NULL,
  `nom_grand_pere_maternelle` text NOT NULL,
  `date_naissance_grpm` text NOT NULL,
  `lieu_naissance_grpm` text NOT NULL,
  `date_deces_grpm` text NOT NULL,
  `adresse_grand_pere_maternelle` text NOT NULL,
  `profession_grand_pere_maternelle` text NOT NULL,
  `structure_familiale_grpm` text NOT NULL,
  `lieux_importants_grpm` text NOT NULL,
  `nom_grand_mere_maternelle` text NOT NULL,
  `date_naissance_grmm` text NOT NULL,
  `lieu_naissance_grmm` text NOT NULL,
  `date_deces_grmm` text NOT NULL,
  `adresse_grand_mere_maternelle` text NOT NULL,
  `profession_grand_mere_maternelle` text NOT NULL,
  `structure_familiale_grmm` text NOT NULL,
  `lieux_importants_grmm` text NOT NULL,
  `prenom_user` text NOT NULL,
  `prenom_pere` text NOT NULL,
  `prenom_mere` text NOT NULL,
  `prenom_grand_pere_paternel` text NOT NULL,
  `prenom_grand_mere_paternel` text NOT NULL,
  `prenom_grand_pere_maternel` text NOT NULL,
  `prenom_grand_mere_maternelle` text NOT NULL,
  `nbr_frsoeur_pere` text NOT NULL,
  `nbr_demi_frsoeur_pere` text NOT NULL,
  `nbr_frsoeur_mere` text NOT NULL,
  `nbr_demi_frsoeur_mere` text NOT NULL,
  `nbr_frsoeur_grpp` text NOT NULL,
  `nbr_demi_frsoeur_grpp` text NOT NULL,
  `nbr_frsoeur_grmp` text NOT NULL,
  `nbr_demi_frsoeur_grpm` text NOT NULL,
  `nbr_frsoeur_grpm` text NOT NULL,
  `nbr_demi_frsoeur_grmp` text NOT NULL,
  `nbr_frsoeur_grmm` text NOT NULL,
  `nbr_demi_frsoeur_grmm` text NOT NULL,
  `niveau_richesse_grpp` text NOT NULL,
  `niveau_richesse_grmp` text NOT NULL,
  `niveau_richesse_grpm` text NOT NULL,
  `niveau_richesse_grmm` text NOT NULL,
  `id` int(11) NOT NULL,
  `zoom_carte_naissance_pere` varchar(2) NOT NULL,
  `zoom_carte_adresse_pere` varchar(2) NOT NULL,
  `zoom_carte_adresse_mere` int(2) NOT NULL,
  `zoom_carte_naissance_mere` int(2) NOT NULL,
  `zoom_carte_naissance_grpp` int(2) NOT NULL,
  `zoom_carte_adresse_grpp` int(2) NOT NULL,
  `zoom_carte_naissance_grmp` int(2) NOT NULL,
  `zoom_carte_adresse_grmp` int(2) NOT NULL,
  `zoom_carte_naissance_grpm` int(2) NOT NULL,
  `zoom_carte_adresse_grpm` int(2) NOT NULL,
  `zoom_carte_naissance_grmm` int(2) NOT NULL,
  `zoom_carte_adresse_grmm` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `utilisateurs`
--
--
-- Index pour les tables déchargées
--

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
