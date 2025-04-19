# Research Initiation Project — *Localized Genealogy*

This interactive form was developed as part of a research initiation project by **Mohamed RIZKI** and **Marie GRARD** at ENSG.  
Its goal is to collect personal, familial, and geographical data to explore patterns of kinship across space through a geographically enriched family tree.

---

## Requirements :

To run this project locally, we recommend the following setup:

- **PHP**: 8.0.1  
- **MySQL**: 5.7.24  
- **MAMP**: 5.0.0 (or alternative: XAMPP / WAMP)  
- **FlightPHP**: 2.0.1 (lightweight PHP micro-framework)  
- **Leaflet.js**: for interactive mapping

---

## Project Structure :

```
.
├── Genealogie-Localisee/
│   ├── assets/
│   │   ├── style_formulaire_mobile.css
│   │   ├── style_formulaire.css
│   │   ├── style_popup_mobile.css
│   │   └── style.css
│   ├── flight/                         # Flight framework
│   ├── images/                         # Logos and icons
│   ├── JavaScript/
│   │   ├── cancellationConfirmation.js
│   │   ├── elementConnectionVisualizer.js
│   │   ├── formFieldDynamics.js
│   │   ├── grandparentSocialLevelAlert.js
│   │   ├── java.js
│   │   └── updateGrandparentLevelOptions.js
│   ├── tests/                          # Leaflet tests (not used in production)
│   ├── views/
│   │   ├── page_de_garde.php           # Introduction page
│   │   ├── questionnaire.php           # Main form
│   │   └── submit.php                  # Data submission and insertion
│   ├── .gitignore
│   ├── .htaccess
│   ├── index.php                       # Main entry point
│   ├── LICENCE                         # Leaflet license
│   ├── Readme.ld                       # Leaflet's README
│   └── Version                         # Leaflet version file
├── bdd/
│   └── genealogie/
│   │   └── utilisateurs.sql            # SQL script to create the database and table
└── README.md                           # README project
```

---

## Installation Guide

### 1. Install MAMP :

Download MAMP from: [https://www.mamp.info](https://www.mamp.info)  
Install it like any standard application.

### 2. Add the project to MAMP :

1. Open MAMP > **Preferences** > **Server**  
2. Set the document root to the folder containing `index.php`  
   Example: `../Genealogie-Localisee`

### 3. Start Apache and MySQL servers :

Launch both services by clicking "Start Servers" in MAMP.

### 4. Set up the database :

1. Go to [http://localhost/phpmyadmin](http://localhost/phpmyadmin)  
2. Create a new database called `genealogie`  
3. Import the `bdd/genealogie/utilisateurs.sql` file

### 5. Check database connection :

Edit `submit.php` if needed:

```php
$host = "localhost";
$dbname = "genealogie";
$username = "root";
$password = "root"; // or "" depending on your MAMP configuration
```

### 6. Launch the application

Open your browser and go to: [http://localhost/index.php](http://localhost/index.php)

---

## Technologies Used :

- [FlightPHP](https://flightphp.com/) – lightweight PHP framework for routing and views  
- [Leaflet.js](https://leafletjs.com/) – JavaScript library for interactive maps  
- HTML5, CSS3, JavaScript  
- MySQL – relational database

---
