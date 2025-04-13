# Projet d'initiation a la recherche "Généalogie localisée"
s
## Introduction
Ce formulaire, élaboré dans le cadre du projet d'initiation à la recherche par Mohamed RIZKI et Marie GRARD, vise à recueillir des données essentielles pour le développement et l'analyse du projet.

## Configuration Requise
- **PHP**: Version 8.0.1
- **MySQL**: Version 5.7.24
- **MAMP**:  Version 5.0.0
- **Framework Flight pour PHP**: Version 2.0.1

## Installation
1. **Installer MAMP**: Téléchargez et installez MAMP.
2. **Clonage du Projet**: Placez le chemin de projet qui contient index.php (../Genealogie-Localisee) dans Documentation de MAMP. Pour ce faire cliquer sur MAMP, Préférence et apres server.
3. **Configuration de la Base de Données**: Installez la base de données `genealogie` et la table `utilisateurs.sql` dans MySQL.

## Utilisation
Après configuration, lancez MAMP et démarrez les modules Apache et MySQL. Accédez au projet via `localhost/` dans votre navigateur.

## À propos des Développeurs
- **Mohamed RIZKI**
- **Marie Grard**

## Support
Pour toute question ou support technique, nous par mail Mohamed.Rizki@ensg.eu/Marie.Grard@ensg.eu

## Licence
Ce projet est distribué sous licence libre.

## Remerciements
Merci à tous ceux qui ont contribué à ce projet, pour leur soutien technique et inspiration historique.


```markdown
# Projet Généalogie – ENSG

Ce projet est une application web développée en PHP permettant de collecter et visualiser des informations généalogiques via un questionnaire interactif avec une carte Leaflet. Il a été réalisé dans le cadre d’un projet encadré à l'ENSG.

---

## Structure du dépôt

```
.
├── code/               # Code source PHP du projet
│   ├── index.php
│   └── views/
│       ├── page_de_garde.php
│       ├── questionnaire.php
│       └── submit.php
│
├── bdd/                # Dump SQL de la base de données
│   └── utilisateurs.sql
│
└── README.md           # Ce fichier
```

---

## ⚙️ Technologies utilisées

- **Langage principal** : PHP 7.3+
- **Base de données** : MariaDB / MySQL
- **Frontend** : HTML, CSS, Leaflet.js
- **Serveur local** : XAMPP / MAMP / WAMP

---

## 🚀 Installation et configuration

### 1. Télécharger ou cloner le dépôt

```bash
git clone https://github.com/votre-utilisateur/projet-genealogie.git
```

Ou simplement télécharger le ZIP via GitHub et extraire le dossier.

---

### 2. Configurer le serveur local

1. Installez **XAMPP** (ou **MAMP**/**WAMP**) si ce n’est pas déjà fait.
2. Démarrez **Apache** et **MySQL** depuis le panneau de contrôle.
3. Placez le dossier `code/` dans le répertoire `htdocs/` (XAMPP) ou `www/` (MAMP).
   - Exemple : `C:/xampp/htdocs/code`

---

### 3. Créer la base de données

1. Ouvrez `http://localhost/phpmyadmin`.
2. Créez une base nommée **`id21537883_genealogie`**.
3. Importez le fichier `bdd/utilisateurs.sql` via l’onglet "Importer".

---

### 4. Configurer la connexion à la base de données (si nécessaire)

Si vous utilisez un autre nom de base, utilisateur ou mot de passe, modifiez le fichier de connexion (si présent) ou dans `submit.php` :

```php
$host = "localhost";
$dbname = "id21537883_genealogie";
$username = "root";
$password = ""; // MAMP : "root"
```

---

### 5. Lancer l’application

Dans votre navigateur, ouvrez :

```
http://localhost/code/index.php
```

---

## ✨ Fonctionnalités

- ✅ Page d’accueil explicative
- ✅ Questionnaire interactif
- ✅ Localisation des lieux via Leaflet
- ✅ Enregistrement des données en base MySQL
- 🔜 Visualisation des données (graphiques ou généalogie à venir)

---

## 🔐 Sécurité & Confidentialité

> Toutes les données sont anonymes et utilisées uniquement dans un cadre pédagogique. Aucun traitement commercial ou externe n’est réalisé.

---

## 🧼 `.gitignore` recommandé

À la racine du projet :

```
# Fichiers système
.DS_Store
Thumbs.db

# Config locales
.env
*.log

# Dépendances éventuelles
vendor/
node_modules/
```

---

## 📜 Licence

Projet pédagogique – non destiné à un usage professionnel.

---

## 👥 Équipe & contact

- 👩‍🎓 Étudiants : [Votre nom ici]
- 🧑‍🏫 Encadrant : [Nom encadrant] – [email@ensg.eu]
```
