
<!DOCTYPE html>
<!-- 
    Ce fichier HTML est une partie du projet de Généalogie Localisée de l'ENSG. 
    Il a été développé par Marie GRARD et Mohamed RIZKI.
    
    Ce document contient la structure de la page d'accueil du questionnaire sur la généalogie localisée.
    Il vise à recueillir des informations sur l'histoire familiale des participants dans le cadre d'une étude 
    de recherche.
-->
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <link rel="stylesheet" href="assets/style.css" />
    <link rel="icon" href="images/page_de_garde.jpg" sizes="16x16" type="image/jpg"> 
    <title>GÉNÉALOGIE LOCALISÉE - ENSG</title>
</head>

<body>

    <div class="container">
        <div class="login-left">
            <div class="login-header">
                <img src="images/ENSG-Geomatique_logo.png" alt="Logo de l'école" class="school-logo">
                <h1>Généalogie Localisée</h1>
                <p>Cher(e) participant(e),</p>
                <p>Nous vous invitons à participer à une enquête sur la généalogie localisée, conçue pour mieux comprendre l'histoire et les mouvements des familles au fil du temps. Cette enquête vise à recueillir des informations précieuses sur votre héritage familial, vos expériences personnelles, ainsi que sur les lieux qui ont joué un rôle significatif dans l'histoire de votre famille.</p>
                <p>Veuillez noter que la plupart des questions ne sont pas obligatoires, et si vous ne souhaitez pas répondre il vous suffit de cocher la case correspondante.</p>
                <p>Nous tenons à vous assurer que toutes les informations que vous fournirez resteront strictement confidentielles et seront utilisées exclusivement à des fins de recherche. </p>
                <p>Nous comprenons que répondre à ces questions peut demander un peu de temps, mais nous vous remercions chaleureusement pour l'effort que vous consacrerez à cette enquête. Votre contribution nous permettra d'améliorer notre compréhension collective de l'histoire et des mouvements familiaux au fil des générations.</p>
                <p>Avec toute notre gratitude,</p>
                <p><strong>Marie GRARD</strong></p>
                <p><strong>Mohamed RIZKI</strong></p>
            </div>
            <form class="login-form" action="views/questionnaire.php" method="GET" autocomplete="off">
                <div class="login-form-content">
                    <button type="submit">DÉMARRER LE QUESTIONNAIRE</button>
                </div>
            </form>
        </div>
        <div class="login-right">
            <img src="images/page_de_garde.jpg" alt="image de la généalogie">
        </div>
    </div>
    <script src="JavaScript/java.js"></script>
</body>
</html>