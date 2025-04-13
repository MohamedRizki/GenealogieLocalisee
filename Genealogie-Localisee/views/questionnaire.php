<!DOCTYPE html>
<!-- 
    Ce document HTML fait partie du projet de Généalogie Localisée de l'ENSG. 
    Il concerne spécifiquement la section du formulaire de saisie des données généalogiques.

    Développé par Marie GRARD et Mohamed RIZKI.
-->
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="../assets/style_formulaire.css" />
    <link rel="stylesheet" href="../assets/style_formulaire_mobile.css" />
    <link rel="stylesheet" href="../assets/style_popup_mobile.css" />
    <link rel="stylesheet" href="../assets/style_popup.css" />
    <link rel="icon" href="../images/page_de_garde.jpg" sizes="16x16" type="image/jpg"> 
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    <script src="../JavaScript/cancellationConfirmation.js" defer></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css" />
    <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
    <title>GÉNÉALOGIE LOCALISÉE - ENSG</title>
</head>
<body>
<div class="header">
  <span class="title">PROJET D'INITIATION A LA RECHERCHE 2022/2023 - ENSG <br> GÉNÉALOGIE LOCALISÉE </br></span>
</div>
<div class="square-container">
    <div class="square" id="first-saquare">
        <div class="inner-container">
            <button class="centered-button" id="button1">Moi</button>
                <!-- Popup pour la saisie des informations de l'utilisateur -->
                    <div id="userInfoPopup" class="popup">
                        <div class="popup-contenu">
                            <span class="close">&times;</span>
                            <form action="submit.php" method="POST" id="userInfoForm">
                                <p>Veuillez remplir les informations suivantes :</p>
                                <fieldset>
                                    <legend>Informations Générales</legend>
                            <!-- Genre l'utilisateur -->
                                    <label for="userGender">Genre :</label>
                                        <div id="genderOptions">
                                            <input type="radio" id="male" name="userGender" value="Homme" required>
                                                <label for="male">Homme</label>
                                            <input type="radio" id="female" name="userGender" value="Femme" required>
                                                <label for="female">Femme</label>
                                        </div>
                                <div class="row">
                            <!-- Nom de l'utilisateur -->
                                    <div class="column">
                                        <label for="fullName">Nom de famille :</label>
                                        <input type="text" id="fullName" name="nom de famille" required placeholder="Merci d'entrer votre nom de famille ">
                                    </div>
                            <!-- Prénom de l'utilisateur -->
                                    <div class="column">
                                        <label for="fullPrenom">Prénom(s) :</label>
                                            <input type="text" id="fullPrenom" name="prenom" required placeholder="Merci d'entrer votre prénom ">
                                    </div>
                            <!--Date de naissance de l'utilisateur -->
                                    <div class="column">
                                        <label for="birthDate">Date de naissance :</label>
                                            <input type="date" id="birthDate" name="date de naissance" required>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="column">
                            <!-- Lieu de naissance de l'utilisateur -->
                                        <label for="userBirth">Lieu de naissance :</label>
                                            <input type="hidden" id="userBirth" name="lieu de naissance" required>
                                                <div id="mapid" style="height: 300px; border: 2px solid #000;"></div>
                                    </div>
                            <!-- Adresse actuelle de l'utilisateur-->
                                    <div class="column">
                                        <label for="userAddress">Adresse actuelle :</label>
                                        <input type="hidden" id="userAddress" name="adresse actuelle" required>
                                            <div id="userMap" style="height: 300px; border: 2px solid #000;"></div>
                                    </div>
                                </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Informations Personnelles</legend>
                                <div class="row">
                                    <div class="column">
                            <!-- Nombre de frères et soeurs de l'utilisateur-->
                                        <label for="nbfrere">Nombre de frères et sœurs qui sont nés des mêmes parents</label>
                                            <div class="checkbox-container">
                                                <input type="checkbox" id="noAnswernbfrer" name="noAnswernbfrer">
                                                    <label for="noAnswernbfrer">Je ne souhaite pas répondre à cette question</label>
                                            </div>
                                            <input type="number" id="nbfrere" name="nombre de frères et sœurs" required placeholder="Entrez le nombre de frères et sœurs (Exemple: 3)">
                                    </div>
                            <!-- Nombre de sœurs de l'utilisateur-->
                                    <div class="column">
                                        <label for="nbsoeur">Nombre de demi-sœurs et demi-frères</label>
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="noAnswernbsoeur" name="noAnswernbsoeur">
                                                <label for="noAnswernbsoeur">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                            <input type="number" id="nbsoeur" name="nombre de demi-sœurs et demi-frères" required required placeholder="Le nombre de demi-sœurs et demi-frères (Exemple: 2)">
                                    </div>
                            <!-- Profession actuelle de l'utilisateur-->
                                    <div class="column">
                                        <label for="professionactuelle">Profession actuelle :</label>
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="noAnswer" name="noAnswer">
                                                <label for="noAnswer">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                        <input type="text" id="professionactuelle" name="profession actuelle" required placeholder="Entrez votre profession">
                                    </div>
                                </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Trajectoires et histoires familiales</legend>
                            <!-- structure familaile de l'utilisateur-->
                                <div class="row">
                                    <div class="column">
                                        <label for="familyStructure">Comment décririez-vous la structure de votre famille si vous êtes marié (e), bien sûr ?</label>
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="noAnswerStructureFamille" name="noAnswerStructureFamille">
                                                <label for="noAnswerStructureFamille">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                        <select id="familyStructure" name="structure de votre famille">
                                            <option value="" disabled selected>Renseigner la structure de votre famille</option>
                                            <option value="Traditionnelle">Traditionnelle</option>
                                            <option value="Recomposée">Recomposée</option>
                                            <option value="Monoparentale">Monoparentale</option>
                                            <option value="Autre">Autre</option>
                                        </select>
                                        <input type="text" id="otherfamilyStructure" name="otherfamilyStructure" placeholder="Précisez" style="display:none;">
                                    </div>
                                    <div class="column">
                            <!-- Trajectoire sociale de l'utilisateur-->
                                        <label for="trajectoireSociale">Comment qualifieriez-vous votre trajectoire sociale par rapport à celle de vos parents?</label>
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="noAnswerTrajectoireSociale" name="noAnswerTrajectoireSociale">
                                                <label for="noAnswerTrajectoireSociale">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                        <select id="trajectoireSociale" name="trajectoire sociale" required>
                                            <option value="" disabled selected>Renseigner votre trajectoire sociale</option>
                                            <option value="Ascendante">Ascendante</option>
                                            <option value="Descendante">Descendante</option>
                                            <option value="Similaire">Similaire</option>
                                        </select>
                                    </div>
                                </div>
                            <!-- Les lieux qui ont marqué l'utilisateur-->
                            <label for="lieuxmarquants">Parmi les déménagements que vous avez effectués, y en a-t-il qui ont coïncidé avec un changement de profession où de situation sociale ?</label>
                            <select id="lieuxmarquants" name="des déménagements que vous avez effectués ?" required>
                                <option value="" disabled selected>Sélectionnez une option</option>
                                <option value="Non">Non</option>
                                <option value="Oui">Oui</option>
                            </select>
                            <input type="text" id="precisezlieuxmarquants" name="precisezlieuxmarquants" placeholder="Précisez" style="display:none;">
                                </fieldset>
                                <input type="button" id="submitInfo" value="OK">
                            </form>
                        </div>
                    </div>
                </div>
            <div class="action-button-container">
                <button onclick="confirmAnnulation()" class="action-button cancel-button">ANNULER</button>
            </div>
        </div>
            <div class="square" id="second-square">
                <div class="half-rectangle">
                    <button class="centered-button" id="button2">Père</button>
                    <div id="fatherInfoPopup" class="popup">
                        <div class="popup-contenu">
                            <span class="close" id="closeFatherPopup">&times;</span>
                            <!-- Contenu du popup -->
                            <p>Veuillez remplir les informations suivantes :</p>
                            <!-- Checkbox je ne connais pas mon père-->
                            <div class="checkbox-container">
                                <input type="checkbox" id="fatherinconnu" name="fatherinconnu">
                                    <label for="fatherinconnu">Je ne connais pas mon père</label>
                            </div>
                            <fieldset>
                            <legend>Informations sur votre père</legend>
                            <!-- Div pour masquer le champ -->
                            <div id="divPere">
                                <div class="row">
                                    <div class="column">
                            <!-- Nom de famille de votre Père-->
                                        <label for="fullNamePere">Nom de famille :</label>
                                        <input type="text" id="fullNamePere" name="Nom de famille " required placeholder="Merci d'entrer de famille de votre père">
                                    </div>
                            <!-- Prenom de famille de votre Père-->
                                    <div class="column">
                                        <label for="fullPrenomPere">Prénom(s) :</label>
                                        <input type="text" id="fullPrenomPere" name="Prenom(s) " required placeholder="Merci d'entrer le prénom de votre père">
                                    </div>
                                    <div class="column">
                            <!-- Date de naissance de votre Père-->
                                        <label for="birthDatePere">Date de naissance :</label>
                                        <input type="date" id="birthDatePere" name="Date de naissance " required>
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="birthDatePereCheckbox" name="birthDatePereCheckbox">
                                                <label for="birthDatePereCheckbox">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                    </div>
                                </div>
                            <!-- nombre de frère de votre père-->
                                <div class="row">
                                    <div class="column">
                                        <label for="nbfrerepere">Nombre de frères et sœurs :</label>
                                            <input type="number" id="nbfrerepere" name="nombre de frères et sœurs" required placeholder="Entrez le nombre de frères et sœurs de votre père">
                                            <div class="checkbox-container">
                                                <input type="checkbox" id="noAnswernbfrerepere" name="noAnswernbfrerepere">
                                                    <label for="noAnswernbfrerepere">Je ne souhaite pas répondre à cette question</label>
                                            </div>
                                    </div>
                            <!-- nombre de demi et freres   de votre père-->
                                    <div class="column">
                                        <label for="nbdemifreresoeurpere">Nombre de demi-sœurs et demi-frères</label>
                                        <input type="number" id="nbdemifreresoeurpere" name="nombre de demi-sœurs et demi-frères " required placeholder="Le nombre de demi-sœurs et demi-frères de votre père">
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="noAnswernbdemifreresoeurpere" name="noAnswernbdemifreresoeurpere">
                                                <label for="noAnswernbdemifreresoeurpere">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                    </div>
                            <!-- Date de décès éventuelle-->
                                    <div class="column">
                                        <label for="decesDatePere">La date de décès :</label>
                                        <input type="date" id="decesDatePere" name="Date de décès de votre père" required>
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="fatherAliveCheckbox" name="fatherAliveCheckbox">
                                                <label for="fatherAliveCheckbox">Mon père est toujours vivant</label>
                                        </div>
                                </div>
                            </div>
                                <div class="row">
                                    <div class="column">
                            <!-- Lieu de naissance de votre Père-->
                                        <label for="userBirthPere">Lieu de naissance :</label>
                                        <input type="hidden" id="userBirthPere" name="Lieu de naissance" required>
                                        <div id="mapidp" style="height: 300px; border: 2px solid #000;"></div>
                                    </div>
                            <!-- Adresse actuel de votre père où lieu de résidence au moment du décès-->
                                    <div class="column">
                                        <label for="adressePere">Adresse de votre père (où lieu de résidence au moment du décès):</label>
                                        <input type="hidden" id="adressePere" name="Adresse actuelle du parent (Où lieu de résidence au moment du décès)" required>
                                        <div id="mapadressePere" style="height: 300px; border: 2px solid #000;"></div>
                                    </div>
                                </div>
                            <!-- Informations  personelles :-->
                                <div class="row">
                                    <div class="column">
                            <!-- Profession de votre père-->
                                        <label for="professionactuellepere">La profession de votre père où celle qu'il exerçait avant son décès:</label>
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="noAnswerprofessionpere" name="noAnswerprofessionpere">
                                                <label for="noAnswerprofessionpere">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                        <input type="text" id="professionactuellepere" name="Profession de votre père" required placeholder="Entrez la profession de votre père">
                            <!-- Trajectoires et histoire familiales  de Père-->
                                    </div>
                                <div class="column">
                            <!-- Structure familiale de Père-->
                                    <label for="familyStructurepere">Comment pouvez-vous décrire la structure de la famille de votre père ?</label>
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="noAnswerStructureFamilleP" name="noAnswerStructureFamilleP">
                                            <label for="noAnswerStructureFamilleP">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                        <select id="familyStructurepere" name="Structure de votre famille">
                                            <option value="" disabled selected>Renseigner la structure de la famille de votre père</option>
                                            <option value="Traditionnelle">Traditionnelle</option>
                                            <option value="Recomposée">Recomposée</option>
                                            <option value="Monoparentale">Monoparentale</option>
                                            <option value="Autre">Autre</option>
                                        </select>
                                        <input type="text" id="otherfamilyStructurep" name="otherfamilyStructurep" placeholder="Précisez" style="display:none;">
                                </div>
                            </div>
                    <div class="row">
                        <div class="column">
                            <!--La  trajectoire sociale de votre père-->
                            <label for="trajectoireSocialePere">Comment qualifieriez-vous la trajectoire sociale de votre père par rapport à celle de ses parents?</label>
                            <div class="checkbox-container">
                                <input type="checkbox" id="noAnswerTrajectoireSocialePere" name="noAnswerTrajectoireSocialePere">
                                    <label for="noAnswerTrajectoireSocialePere">Je ne souhaite pas répondre à cette question</label>
                            </div>
                                <select id="trajectoireSocialePere" name="Trajectoire Sociale Pere" required>
                                    <option value="" disabled selected>Renseigner la trajectoire sociale de votre père</option>
                                    <option value="Ascendante">Ascendante</option>
                                    <option value="Descendante">Descendante</option>
                                    <option value="Similaire">Similaire</option>
                                </select>
                        </div>
                        <div class="column">
                            <!-- Avez-vous remarqué des inégalités, par exemple, liées au milieu social ? -->
                            <label for="inegalitesocialePere">Avez-vous observé des différences où des inégalités de milieu social entre votre père et votre mère ?</label>
                            <div class="checkbox-container">
                                <input type="checkbox" id="noAnswerinegalitesocialePere" name="noAnswerinegalitesocialePere">
                                <label for="noAnswerinegalitesocialePere">Je ne souhaite pas répondre à cette question</label>
                            </div>
                            <input type="text" id="inegalitesocialePere" name="inegalite_sociale_pere" required placeholder="Veuillez indiquer si des inégalités ont été observées (comme celles liées au milieu social).">
                        </div>
                    </div>
                            <!--Parmi les lieux où il a vécu, y en a-t-il qui ont joué un rôle particulier dans l’histoire de la famille ?  -->
                            <label for="lieuxSignificatifsPere">Parmi les lieux où il a vécu, y en a-t-il qui ont joué un rôle particulier dans son histoire ?</label>
                            <select id="lieuxSignificatifsPere" name="Parmi les lieux où il a vécu, y en a-t-il qui ont joué un rôle particulier dans l’histoire de votre père ?" required>
                                <option value="" disabled selected>Sélectionnez une option</option>
                                <option value="Non">Non</option>
                                <option value="Oui">Oui</option>
                            </select>
                            <input type="text" id="precisezlieuxsignificatif" name="precisezlieuxsignificatif" placeholder="Précisez" style="display:none;">
                </div>
                        </fieldset>
                        <input type="button" id="submitInfoPere" value="OK">
                    </div>
                </div>
            </div>
                <div class="half-rectangle">
                    <button class="centered-button" id="button3">Mère</button>
                        <div id="MotherInfoPopup" class="popup">
                            <div class="popup-contenu">
                                <span class="close" id="closeMotherPopup">&times;</span>
                            <!-- Contenu du popup Mère-->
                                <p>Veuillez remplir les informations suivantes :</p>
                            <!-- Checkbox je ne connais pas ma mère-->
                                <div class="checkbox-container">
                                    <input type="checkbox" id="motherinconnu" name="motherinconnu">
                                        <label for="motherinconnu">Je ne connais pas ma mère</label>
                                </div>
                            <!--Informations Générales-->
                            <fieldset>
                                <legend>Informations sur votre mère</legend>
                            <!-- Div pour masquer le champ -->
                                <div id="divMere">
                                    <div class="row">
                                        <div class="column">
                            <!-- Nom de famille de votre maman -->
                                            <label for="fullNameMere">Nom de famille :</label>
                                            <input type="text" id="fullNameMere" name="fullNameMere" required placeholder="Merci d'entrer le nom de famille de votre mère">
                                        </div>
                                        <div class="column">
                            <!-- Nom de famille de votre maman -->
                                            <label for="fullPrenomMere">Prénom(s) </label>
                                            <input type="text" id="fullPrenomMere" name="fullPrenomMere" required placeholder="Merci d'entrer le prénom de votre mère ">
                                        </div>
                                        <div class="column">
                            <!-- date de naissance de votre mère-->
                                            <label for="birthDateMere">Date de naissance :</label>
                                            <input type="date" id="birthDateMere" name="Date de naissance de votre mère" required>
                                            <div class="checkbox-container">
                                                <input type="checkbox" id="birthDateMereCheckbox" name="birthDateMereCheckbox">
                                                <label for="birthDateMereCheckbox">Je ne souhaite pas répondre à cette question</label>
                                            </div>
                                        </div>
                                    </div>
                            <!-- nombre de frère et soeurs de votre mère-->
                                    <div class="row">
                                        <div class="column">
                                            <label for="nbfreremere">Nombre de frères et sœurs</label>
                                                    <input type="number" id="nbfreremere" name="nombre de frères et sœurs de votre mère" required placeholder="Entrez le nombre de frères et sœurs de votre mère ">
                                                <div class="checkbox-container">
                                                    <input type="checkbox" id="noAnswernbfreremere" name="noAnswernbfreremere">
                                                    <label for="noAnswernbfreremere">Je ne souhaite pas répondre à cette question</label>
                                                </div>
                                        </div>
                            <!-- nombre de demi-frère et demi-soeurs de votre mère-->
                                        <div class="column">
                                            <label for="nbdemifreremere">Nombre de demi-sœurs et demi-frères</label>
                                            <input type="number" id="nbdemifreremere" name="nombre de demi-sœurs et demi-frères de votre mère" required placeholder="Entrez le nombre nombre de demi-sœurs et demi-frères de votre mère ">
                                            <div class="checkbox-container">
                                                <input type="checkbox" id="noAnswernbdemifreremere" name="noAnswernbdemifreremere">
                                                    <label for="noAnswernbdemifreremere">Je ne souhaite pas répondre à cette question</label>
                                            </div>
                                        </div>
                            <!--date de decès de votre mère-->
                                        <div class="column">
                                            <label for="decesDateMere">Date de décès :</label>
                                            <input type="date" id="decesDateMere" name="Date de décès de votre mère" required>
                                            <div class="checkbox-container">
                                                <input type="checkbox" id="motherAliveCheckbox" name="motherAliveCheckbox">
                                                <label for="motherAliveCheckbox">Ma mère est toujours en vie</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="column">
                            <!-- Lieu de naissance de votre mère-->
                                            <label for="userBirthMere">Lieu de naissance :</label>
                                            <input type="hidden" id="userBirthMere" name="Lieu de naissance de votre Mère" required>
                                            <div id="mapidm" style="height: 300px; border: 2px solid #000;"></div>
                                        </div>
                            <!-- Adresse actuel de la maman où lieu de résidence au moment du décès-->
                                        <div class="column">
                                            <label for="adresseMere">Adresse de votre mère (Où lieu de résidence au moment du décès):</label>
                                            <input type="hidden" id="adresseMere" name="Adresse actuelle du parent (Où lieu de résidence au moment du décès)" required>
                                                <div id="mapadresseMere" style="height: 300px; border: 3px solid #000;"></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="column">
                            <!--Profession de votre mère-->
                                            <label for="professionactuellemere">La profession de votre mère où celle qu'elle exerçait avant son décès:</label>
                                            <div class="checkbox-container">
                                                <input type="checkbox" id="noAnswerprofessionmere" name="noAnswerprofessionmere">
                                                    <label for="noAnswerprofessionmere">Je ne souhaite pas répondre à cette question</label>
                                            </div>
                                            <input type="text" id="professionactuellemere" name="Profession de votre mère" required placeholder="Entrez la profession de votre mère">
                            <!--Trajectoire sociale de votre mère-->
                                        </div>
                                        <div class="column">
                                            <label for="familyStructuremere">Comment décririez-vous la structure de la famille de votre mère ?</label>
                                            <div class="checkbox-container">
                                                <input type="checkbox" id="noAnswerStructureFamilleM" name="noAnswerStructureFamilleM">
                                                    <label for="noAnswerStructureFamilleM">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                        <select id="familyStructuremere" name="Structure famille mere">
                                            <option value="" disabled selected>Renseigner la structure de la famille de votre mère</option>
                                            <option value="Traditionnelle">Traditionnelle</option>
                                            <option value="Recomposée">Recomposée</option>
                                            <option value="Monoparentale">Monoparentale</option>
                                            <option value="Autre">Autre</option>
                                        </select>
                                        <input type="text" id="otherfamilyStructurem" name="otherfamilyStructurem" placeholder="Précisez" style="display:none;">
                                    </div>
                                </div>
                            <div class="row">
                                <div class="column">
                            <!--Qualifieriez-vous la  trajectoire sociale de votre mère d’ascendante, descendante où de similaire par rapport à celle des grands-parents ? -->
                                <label for="trajectoireSocialeMere">Comment qualifieriez-vous votre trajectoire sociale de votre mère par rapport à celle de ses parents ?</label>
                                    <div class="checkbox-container">
                                        <input type="checkbox" id="noAnswerTrajectoireSocialeMere" name="noAnswerTrajectoireSocialeMere">
                                            <label for="noAnswerTrajectoireSocialeMere">Je ne souhaite pas répondre à cette question</label>
                                    </div>
                                    <select id="trajectoireSocialeMere" name="Trajectoire Sociale Mere" required>
                                        <option value="" disabled selected>Renseigner la trajectoire sociale de votre mère</option>
                                        <option value="Ascendante">Ascendante</option>
                                        <option value="Descendante">Descendante</option>
                                        <option value="Similaire">Similaire</option>
                                    </select>
                                </div>
                            <!--Y a-t-il eu des inégalités observées (de milieu social par exemple) ?-->
                            <div class="column">
                                <label for="inegalitesocialeMere">Avez-vous observé des différences où des inégalités de milieu social entre votre père et votre mère ?</label>
                                    <div class="checkbox-container">
                                        <input type="checkbox" id="noAnswerinegalitesocialeMere" name="noAnswerinegalitesocialeMere">
                                            <label for="noAnswerinegalitesocialeMere">Je ne souhaite pas répondre à cette question</label>
                                    </div>
                                <input type="text" id="inegalitesocialeMere" name="inegalite_sociale_mere" required placeholder="Y a-t-il eu des inégalités observées (de milieu social par exemple) ?">
                                </div>
                            </div>
                            <!--Parmi les lieux où il a vécu, y en a-t-il qui ont joué un rôle particulier dans l’histoire de votre mère ?  -->
                                <label for="lieuxSignificatifsMere">Parmi les lieux où elle a vécu, y en a-t-il qui ont joué un rôle particulier dans son l’histoire?</label>
                                    <select id="lieuxSignificatifsMere" name="Parmi les lieux où elle a vécu, y en a-t-il qui ont joué un rôle particulier dans l’histoire de votre mère ?" required>
                                        <option value="" disabled selected>Sélectionnez une option</option>
                                        <option value="Non">Non</option>
                                        <option value="Oui">Oui</option>
                                    </select>
                                    <input type="text" id="precisezlieuxsignificatifmere" name="precisezlieuxsignificatifmere" placeholder="Précisez" style="display:none;">
                            </fieldset>
                            <input type="button" id="submitInfoMere" value="OK">
                        </div>
                    </div>
                </div>
            <div class="action-button-container">
                <button class="action-button submit-button" id="validerButton">VALIDER</button>
            </div>
        </div>
    <div class="square">
        <div class="quarter-rectangle">
                            <button class="centered-button" id="button5">Grand-mère paternelle</button>
                    <div id="grandmotherpaternelInfoPopup" class="popup">
                        <div class="popup-contenu">
                            <span class="close" id="closeGrandMotherPaternelPopup">&times;</span>
                        <!-- Contenu du popup -->
                            <p>Veuillez remplir les informations suivantes :</p>
                        <!-- Checkbox mon père ne connais pas sa grand-mère-->
                        <div class="checkbox-container">
                            <input type="checkbox" id="grandmerepaternelinconnu" name="grandmerepaternelinconnu">
                                <label for="grandmerepaternelinconnu">Mon père ne connaît pas sa mère</label>
                        </div>
                        <!-- Contenu du popup -->
                        <fieldset>
                            <legend>Informations sur votre grand-mère paternelle</legend>
                        <!-- Div pour masquer le champ -->
                            <div id="divGrandMerePaternel">
                        <!-- Contenu du popup -->
                                <div class="row">
                                    <div class="column"> 
                        <!-- Nom de famille de votre grand-mère paternelle -->
                                        <label for="fullNameGrandMerePaternel">Nom de famille :</label>
                                            <input type="text" id="fullNameGrandMerePaternel" name="fullNameGrandMerePaternel" required placeholder="Merci d'entrer le nom de famille de votre grand-mère paternelle ">
                                    </div>
                                    <div class="column">
                        <!-- Prénom de votre grand-mère paternelle -->
                                        <label for="fullPrenomGrandMerePaternel">Prénom(s) :</label>
                                        <input type="text" id="fullPrenomGrandMerePaternel" name="fullPrenomGrandMerePaternel" required placeholder="Merci d'entrer le prénom complet de votre grand-mère paternelle ">
                                    </div>
                                    <div class="column"> 
                        <!-- Date de naissance de votre grand-mère paternelle -->
                                        <label for="birthDateGrandMerePaternelle">Date de naissance :</label>
                                            <input type="date" id="birthDateGrandMerePaternelle" name="Date de naissance de votre grand-mère paternelle" required>
                                            <div class="checkbox-container">
                                                <input type="checkbox" id="birthDateGrandMerePaternelleAliveCheckbox" name="birthDateGrandMerePaternelleAliveCheckbox">
                                                <label for="birthDateGrandMerePaternelleAliveCheckbox">Je ne souhaite pas répondre à cette question</label>
                                            </div>
                                    </div>
                                </div>
                                <div class="row">
                        <!--Nombre de freres et soeurs de votre grand mère  paternelle-->
                                    <div class="column">
                                        <label for="nbfreregrandmerepaternel">Nombre de frères et sœurs</label>
                                            <input type="number" id="nbfreregrandmerepaternel" name="nombre de frères et sœurs de votre grand-mère paternelle" required placeholder="Entrez le nombre de frères et sœurs de votre grand-mère paternelle">
                                            <div class="checkbox-container">
                                                <input type="checkbox" id="noAnswernbfreregrandmerepaternel" name="noAnswernbfreregrandmerepaternel">
                                                <label for="noAnswernbfreregrandmerepaternel">Je ne souhaite pas répondre à cette question</label>
                                            </div>
                                    </div>
                        <!--Nombre de demi-freres et demi-soeurs de votre grand mère  paternelle-->
                                    <div class="column">
                                        <label for="nbdmfreregrandmerepaternel">Nombre de demi-frères et demi-sœurs</label>
                                            <input type="number" id="nbdmfreregrandmerepaternel" name="nombre de demi-frères et demi-sœurs de votre grand-mère paternelle" required placeholder="Entrez le nombre de frères et sœurs de votre grand-mère paternelle">
                                            <div class="checkbox-container">
                                                <input type="checkbox" id="noAnswernbdmfreregrandmerepaternel" name="noAnswernbdmfreregrandmerepaternel">
                                                <label for="noAnswernbdmfreregrandmerepaternel">Je ne souhaite pas répondre à cette question</label>
                                            </div>
                                    </div>
                        <!-- Date de décès éventuelle de votre grand-mère paternelle -->
                                    <div class="column"> 
                                        <label for="decesDateGrandMerePaternel">Date de décès :</label>
                                        <input type="date" id="decesDateGrandMerePaternel" name="Date de décès de votre grand-mère paternel" required>
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="grandmotherpaternelAliveCheckbox" name="grandmotherpaternelAliveCheckbox">
                                            <label for="grandmotherpaternelAliveCheckbox">Ma grand-mère paternelle est toujours vivant</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="column">
                        <!-- Lieu de naissance de votre Père-->
                                        <label for="userBirthGrandMerePaternel">Lieu de naissance :</label>
                                            <input type="hidden" id="userBirthGrandMerePaternel" name="Lieu de naissance de votre grand-mère paternel" required>
                                    <div id="mapidngmp" style="height: 300px; border: 3px solid #000;"></div>
                        <!-- Adresse actuel de votre grand-mère paternelle où lieu de résidence au moment du décès-->
                                    </div>
                                    <div class="column"> 
                                        <label for="adresseGrandMereParental">Adresse de votre grand-mère paternelle (où lieu de résidence au moment du décès):</label>
                                        <input type="hidden" id="adresseGrandMereParental" name="Adresse actuelle de votre grand-mère paternelle (Où lieu de résidence au moment du décès)" required>
                                        <div id="mapadresseGrandMereParental" style="height: 300px; border: 2px solid #000;"></div>
                                    </div>
                                </div>
                        <!-- Profession de Grand-Mère paternel-->
                                <div class="row">
                                    <div class="column">
                                        <label for="professionactuellegrandmerepaternel">La profession de votre grand-mère paternelle où celle qu'elle exerçait avant son décès:</label>
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="noAnswerprofessiongrandmerepaternel" name="noAnswerprofessiongrandmerepaternel">
                                                <label for="noAnswerprofessiongrandmerepaternel">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                            <input type="text" id="professionactuellegrandmerepaternel" name="Profession actuelle de votre grand-mère paternelle" required placeholder="Entrez la profession de votre grand-mère paternelle">
                                    </div>
                        <!-- Trajectoires et histoire familiales  de grand-mère paternel-->
                                    <div class="column">
                        <!-- Structure familiale de votre grand-mère paternelle-->
                                        <label for="familyStructuregrandmerepaternel">Comment décririez-vous la structure familiale de votre grand-mère paternelle ?</label>
                                            <div class="checkbox-container">
                                                <input type="checkbox" id="noAnswerStructureFamilleGRM" name="noAnswerStructureFamilleGRM">
                                                    <label for="noAnswerStructureFamilleGRM">Je ne souhaite pas répondre à cette question</label>
                                            </div>
                                            <select id="familyStructuregrandmerepaternel" name="Structure de votre famille">
                                                <option value="" disabled selected>Renseigner la structure familiale de votre grand-mère paternelle</option>
                                                <option value="Traditionnelle">Traditionnelle</option>
                                                <option value="Recomposée">Recomposée</option>
                                                <option value="Monoparentale">Monoparentale</option>
                                                <option value="Autre">Autre</option>
                                            </select>
                                            <input type="text" id="otherfamilyStructuregrm" name="otherfamilyStructuregrm" placeholder="Précisez" style="display:none;">
                                    </div>
                                </div>
                        <!--Quels sont les lieux qui revêtent une importance particulière pour votre grand-mère, les lieux de mémoire ? -->
                                <label for="lieuximportgrandmerepaternel">Y a-t-il des lieux où a vécu votre grand-mère paternelle qui sont ensuite devenus des lieux significatifs pour votre famille, des lieux d'ancrage ?</label>
                                <select id="lieuximportgrandmerepaternel" name="Y a-t-il des lieux où a vécu votre grand-mère paternelle qui sont ensuite devenus des lieux significatifs pour votre famille, des lieux d'ancrage ?" required>
                                    <option value="" disabled selected>Sélectionnez une option</option>
                                    <option value="Non">Non</option>
                                    <option value="Oui">Oui</option>
                                </select>
                                <input type="text" id="precisezlieuximportgrandmerepaternel" name="precisezlieuximportgrandmerepaternel" placeholder="Précisez" style="display:none;">
                        <!--Niveau de richesse de votre grand p-re paternel -->
                            <label for="niveauderichesseprmp">Pourriez-vous estimer le niveau social de votre grand-mère paternelle par rapport à celui de vos autres grands-parents (4 étant le niveau le plus élevé et 1 le moins élevé)?</label>
                            <div class="checkbox-container">
                                <input type="checkbox" id="noAnswerniveauderichesseprmp" name="noAnswerniveauderichesseprmp">
                                    <label for="noAnswerniveauderichesseprmp">Je ne souhaite pas répondre à cette question</label>
                            </div>
                                <select id="niveauderichesseprmp" name="Pourriez-vous classer votre grand-mère paternelle par rapport à vos autres grands-parents en termes de niveau social (4 étant la personne au niveau le plus élevé et 1 la personne au niveau le moins élevé)?" required>
                                    <option value="" disabled selected>Sélectionnez une option</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                        </div>
                        </fieldset>
                        <input type="button" id="submitInfograndmerepaternel" value="OK">
                    </div>
                </div>
            </div>
            <div class="quarter-rectangle">
            <button class="centered-button" id="button4">Grand-père paternel</button>
                <div id="grandfatherpaternelInfoPopup" class="popup">
                    <div class="popup-contenu">
                        <span class="close" id="closeGrandFatherPaternelPopup">&times;</span>
                            <p>Veuillez remplir les informations suivantes :</p>
                            <!-- Checkbox mon père ne connais pas son grand-père-->
                            <div class="checkbox-container">
                                <input type="checkbox" id="grandperepaternelinconnu" name="grandperepaternelinconnu">
                                <label for="grandperepaternelinconnu">Mon père ne connaît pas son père</label>
                            </div>
                            <!-- Contenu du popup -->
                            <fieldset>
                                <legend>Informations sur votre grand-père paternel</legend>
                            <!-- Div pour masquer le champ -->
                                <div id="divGrandPerePaternel">
                                    <div class="row">
                                        <div class="column">       
                            <!--Nom de famille de votre grand-père paternel-->
                                            <label for="fullNameGrandPerePaternel">Nom de famille :</label>
                                            <input type="text" id="fullNameGrandPerePaternel" name="fullNameGrandPerePaternel" required placeholder="Merci d'entrer le nom de famille de votre grand-père paternels">
                                        </div>
                                        <div class="column"> 
                            <!--Prenom de votre grand-père paternel-->
                                            <label for="fullPrenomGrandPerePaternel">Prénom(s) :</label>
                                                <input type="text" id="fullPrenomGrandPerePaternel" name="fullPrenomGrandPerePaternel" required placeholder="Merci d'entrer le prénom de votre grand-père paternel">
                                        </div>
                                        <div class="column">  
                            <!--Date de naissance de votre grand-père paternel-->
                                            <label for="birthDateGrandPerePaternelle">Date de naissance :</label>
                                            <input type="date" id="birthDateGrandPerePaternelle" name="Date de naissance de votre grand-père paternel" required>
                                            <div class="checkbox-container">
                                                <input type="checkbox" id="birthDateGrandPerePaternelleAliveCheckbox" name="birthDateGrandPerePaternelleAliveCheckbox">
                                                    <label for="birthDateGrandPerePaternelleAliveCheckbox">Je ne souhaite pas répondre à cette question</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                            <!--Nombre de freres et soeurs de votre grand pere paternel-->
                                        <div class="column">
                                            <label for="nbfreregrandperepaternel">Nombre de frères et sœurs</label>
                                                <input type="number" id="nbfreregrandperepaternel" name="nombre de frères et sœurs de votre grand-père paternel" required placeholder="Entrez le nombre de frères et sœurs de votre grand-père paternel">
                                                <div class="checkbox-container">
                                                    <input type="checkbox" id="noAnswernbfreregrandperepaternel" name="noAnswernbfreregrandperepaternel">
                                                        <label for="noAnswernbfreregrandperepaternel">Je ne souhaite pas répondre à cette question</label>
                                                </div>
                                        </div>
                            <!--Nombre de demi freres et soeurs votre grand pere paternel-->
                                        <div class="column">
                                            <label for="nbdemifreregrandperepaternel">Nombre de demi-frères et demi-sœurs</label>
                                                <input type="number" id="nbdemifreregrandperepaternel" name="nombre de demi-frères et demi-sœurs de votre grand-père paternel" required placeholder="Le nombre de demi-frères et demi-sœurs de votre grand-père paternel">
                                                <div class="checkbox-container">
                                                    <input type="checkbox" id="noAnswernbdemifreregrandperepaternel" name="noAnswernbdemifreregrandperepaternel">
                                                        <label for="noAnswernbdemifreregrandperepaternel">Je ne souhaite pas répondre à cette question</label>
                                                </div>
                                        </div>
                                        <div class="column"> 
                            <!--Date de décès éventuelle de votre grand-père paternel-->
                                            <label for="decesDateGrandPerePaternel">Date de décès :</label>
                                                <input type="date" id="decesDateGrandPerePaternel" name="Date de décès de votre grand-père" required>
                                            <div class="checkbox-container">
                                                <input type="checkbox" id="grandfatherpaternelAliveCheckbox" name="grandfatherpaternelAliveCheckbox">
                                                    <label for="grandfatherpaternelAliveCheckbox">Mon grand-père paternel est toujours vivant</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="column"> 
                            <!--Lieu de naissance de votre grand-père paternel-->
                                            <label for="userBirthGrandPerePaternel">Lieu de naissance :</label>
                                                <input type="hidden" id="userBirthGrandPerePaternel" name="Lieu de naissance de votre grand-père paternel" required>
                                                    <div id="mapidngpp" style="height: 300px; border: 2px solid #000;"></div>
                                        </div>
                                        <div class="column"> 
                            <!-- Adresse actuel de votre grand-père paternel où lieu de résidence au moment du décès-->
                                            <label for="adresseGrandPereParental">Adresse de votre grand-père paternel (où lieu de résidence au moment du décès) :</label>
                                            <input type="hidden" id="adresseGrandPereParental" name="Adresse actuelle de votre grand-père paternel(Où lieu de résidence au moment du décès)" required>
                                                <div id="mapadresseGrandPereParental" style="height: 300px; border: 2px solid #000;"></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="column"> 
                            <!-- Profession de votre grand-père paternel-->
                                            <label for="professionactuellegrandperepaternel">La profession de votre grand-père paternel où celle qu'il exerçait avant son décès :</label>
                                            <div class="checkbox-container">
                                                <input type="checkbox" id="noAnswerprofessiongrandperepaternel" name="noAnswerprofessiongrandperepaternel">
                                                <label for="noAnswerprofessiongrandperepaternel">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                        <input type="text" id="professionactuellegrandperepaternel" name="Profession actuelle de votre père" required placeholder="Entrez la profession de votre grand-père paternel">
                                    </div>
                            <!-- Trajectoires et histoire familiales  de grand-Père paternel-->
                                    <div class="column"> 
                            <!-- Structure familiale de grand-père paternel-->
                                        <label for="familyStructuregrandperepaternel">Comment décririez-vous la structure de la famille de votre grand-père paternel ?</label>
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="noAnswerStructureFamilleGRP" name="noAnswerStructureFamilleGRP">
                                                <label for="noAnswerStructureFamilleGRP">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                        <select id="familyStructuregrandperepaternel" name="Structure de votre famille">
                                            <option value="" disabled selected>Renseigner la structure de la famille de votre grand-père paternel</option>
                                            <option value="Traditionnelle">Traditionnelle</option>
                                            <option value="Recomposée">Recomposée</option>
                                            <option value="Monoparentale">Monoparentale</option>
                                            <option value="Autre">Autre</option>
                                        </select>
                                        <input type="text" id="otherfamilyStructuregrp" name="otherfamilyStructuregrp" placeholder="Précisez" style="display:none;">
                                    </div>
                                </div>
                            <!--Quels sont les lieux qui revêtent une importance particulière pour votre grand-père paternel, les lieux de mémoire ? -->
                                <label for="lieuximportgrandperepaternel">Y a-t-il des lieux où a vécu votre grand-père paternel qui sont ensuite devenus des lieux significatifs pour votre famille, des lieux d'ancrage ?</label>
                                <select id="lieuximportgrandperepaternel" name="Y a-t-il des lieux où a vécu votre grand-père paternel qui sont ensuite devenus des lieux significatifs pour votre famille, des lieux d'ancrage ?" required>
                                    <option value="" disabled selected>Sélectionnez une option</option>
                                    <option value="Non">Non</option>
                                    <option value="Oui">Oui</option>
                                </select>
                                <input type="text" id="precisezlieuximportgrandperepaternel" name="precisezlieuximportgrandperepaternel" placeholder="Précisez" style="display:none;">
                            <!--Niveau de richesse de votre grand p-re paternel -->
                                <label for="niveauderichesseprpp">Pourriez-vous estimer le niveau social de votre grand-père paternel par rapport à celui de vos autres grands-parents (4 étant le niveau le plus élevé et 1 le moins élevé)?</label>
                                    <div class="checkbox-container">
                                        <input type="checkbox" id="noAnswerniveauderichesseprpp" name="noAnswerniveauderichesseprpp">
                                            <label for="noAnswerniveauderichesseprpp">Je ne souhaite pas répondre à cette question</label>
                                    </div>
                                    <select id="niveauderichesseprpp" name="Pourriez-vous classer votre grand-père paternel par rapport à vos autres grands-parents en termes de niveau social (4 étant la personne au niveau le plus élevé et 1 la personne au niveau le moins élevé)?" required>
                                        <option value="" disabled selected>Sélectionnez une option</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                        </div>
                        </fieldset>
                        <input type="button" id="submitInfograndperepaternel" value="OK">
                    </div>
                </div>
            </div>
                <div class="quarter-rectangle">
 <button class="centered-button" id="button7">Grand-mère maternelle</button>
            <div id="grandmothermaternelleInfoPopup" class="popup">
                <div class="popup-contenu">
                    <span class="close" id="closeGrandMotherMaternellePopup">&times;</span>
                        <!-- Contenu du popup -->
                        <p>Veuillez remplir les informations suivantes :</p>
                        <!-- Checkbox mon père ne connais pas son grand-mère maternelle-->
                        <div class="checkbox-container">
                            <input type="checkbox" id="grandmerematernelleinconnu" name="grandmerematernelleinconnu">
                            <label for="grandmerematernelleinconnu">Ma mère ne connaît pas sa mère</label>
                        </div>
                        <!-- Contenu du popup -->
                        <fieldset>
                            <legend>Informations sur votre grand-mère maternelle</legend>
                        <!-- Div pour masquer le champ -->
                        <div id="divGrandMereMaternelle">
                        <!-- Contenu du popup -->
                            <div class="row">
                                <div class="column">  
                        <!-- Nom de famille de votre grand-Père maternelle-->
                                    <label for="fullNameGrandMereMaternelle">Nom de famille :</label>
                                    <input type="text" id="fullNameGrandMereMaternelle" name="fullNameGrandMereMaternelle" required placeholder="Merci d'entrer le nom de famille de votre grand-mère maternelle ">
                                </div>
                        <!-- Prénom de votre grand-Père maternelle-->
                                <div class="column">
                                    <label for="fullPrenomGrandMereMaternelle">Prénom(s) :</label>
                                        <input type="text" id="fullPrenomGrandMereMaternelle" name="fullPrenomGrandMereMaternelle" required placeholder="Merci d'entrer le prénom de votre grand-mère maternelle ">
                                </div>
                                <div class="column">  
                        <!-- Date de naissance de votre grand-mère maternelle-->
                                    <label for="birthDateGrandMereMaternelle">Date de naissance :</label>
                                        <input type="date" id="birthDateGrandMereMaternelle" name="Date de naissance de votre grand-mère Maternelle" required>
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="birthDateGrandMereMaternelleCheckbox" name="birthDateGrandMereMaternelleCheckbox">
                                                <label for="birthDateGrandMereMaternelleCheckbox">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                </div>
                            </div>
                            <div class="row">
                        <!--Nombre de freres et soeurs de votre grand mère maternelle-->
                            <div class="column">
                                <label for="nbfreregrandmerematernel">Nombre de frères et sœurs</label>
                                    <input type="number" id="nbfreregrandmerematernel" name="nombre de frères et sœurs de votre grand-mère maternelle" required placeholder="Entrez le nombre de frères et sœurs de votre grand-mère maternelle ">
                                    <div class="checkbox-container">
                                        <input type="checkbox" id="noAnswernbfreregrandmerematernel" name="noAnswernbfreregrandmerematernel">
                                            <label for="noAnswernbfreregrandmerematernel">Je ne souhaite pas répondre à cette question</label>
                                    </div>
                            </div>
                        <!--Nombre de freres et soeurs de votre grand mère maternelle-->
                                <div class="column">
                                    <label for="nbdmfreregrandmerematernel">Nombre de demi-frères et demi-sœurs</label>
                                        <input type="number" id="nbdmfreregrandmerematernel" name="nombre de demi-frères et demi-sœurs de votre grand-mère maternelle" required placeholder="Le nombre de demi-frères et demi-sœurs de votre grand-mère maternelle ">
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="noAnswernbdmfreregrandmerematernel" name="noAnswernbdmfreregrandmerematernel">
                                                <label for="noAnswernbdmfreregrandmerematernel">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                </div>
                        <!-- Date de décès éventuelle de votre grand-mère maternelle-->
                                <div class="column">
                                    <label for="decesDateGrandMereMaternelle">Date de décès :</label>
                                        <input type="date" id="decesDateGrandMereMaternelle" name="Date de décès de votre grand-mère maternelle" required>
                                    <div class="checkbox-container">
                                        <input type="checkbox" id="grandmothermaternelleAliveCheckbox" name="grandmothermaternelleAliveCheckbox">
                                            <label for="grandmothermaternelleAliveCheckbox">Ma grand-mère maternelle est toujours en vie</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="column">
                        <!-- Lieu de naissance de votre grand-mère maternelle-->
                                    <label for="userBirthGrandMereMaternelle">Lieu de naissance :</label>
                                        <input type="hidden" id="userBirthGrandMereMaternelle" name="Lieu de naissance de votre grand-mère maternelle" required>
                                            <div id="mapidngmm" style="height: 300px; border: 2px solid #000;"></div>
                                </div>
                        <!-- Adresse actuel de votre grand-mère maternelle où lieu de résidence au moment du décès-->
                                <div class="column">
                                    <label for="adresseGrandMereMaternelle">Adresse de votre grand-mère maternelle (où lieu de résidence au moment du décès):</label>
                                    <input type="hidden" id="adresseGrandMereMaternelle" name="Adresse actuelle de votre grand-mère maternelle(Où lieu de résidence au moment du décès)" required>
                                        <div id="mapadresseGrandMereMaternelle" style="height: 300px; border: 2px solid #000;"></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="column">
                        <!-- Profession de votre grand-mère maternelle-->
                                    <label for="professionactuellegrandmerematernelle">La profession de votre grand-mère maternelle où celle qu'elle exerçait avant son décès</label>
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="noAnswerprofessiongrandmerematernelle" name="noAnswerprofessiongrandmerematernelle">
                                                <label for="noAnswerprofessiongrandmerematernelle">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                        <input type="text" id="professionactuellegrandmerematernelle" name="profession de votre grand-mère maternelle" required placeholder="Entrez la profession de votre grand-mère maternelle"> 
                                </div>
                        <!-- Trajectoires et histoire familiales  de votre grand-mère maternelle-->
                                <div class="column">
                        <!-- Structure familiale de votre grand-mère maternelle-->
                                <label for="familyStructuregrandmerematernelle">Comment décririez-vous la structure familiale de votre grand-mère maternelle ?</label>
                                    <div class="checkbox-container">
                                        <input type="checkbox" id="noAnswerStructureFamilleGRMM" name="noAnswerStructureFamilleGRMM">
                                            <label for="noAnswerStructureFamilleGRMM">Je ne souhaite pas répondre à cette question</label>f
                                    </div>
                                    <select id="familyStructuregrandmerematernelle" name="Structure de votre famille">
                                        <option value="" disabled selected>Renseigner la structure familiale de votre grand-mère maternelle</option>
                                        <option value="Traditionnelle">Traditionnelle</option>
                                        <option value="Recomposée">Recomposée</option>
                                        <option value="Monoparentale">Monoparentale</option>
                                        <option value="Autre">Autre</option>
                                    </select>
                                    <input type="text" id="otherfamilyStructuregrmm" name="otherfamilyStructuregrmm" placeholder="Précisez" style="display:none;"> 
                                </div>
                                </div>
                            <!--Quels sont les lieux qui revêtent une importance particulière pour votre grand-mère maternelle, les lieux de mémoire ? -->
                                <label for="lieuximportgrandmerematernelle">Y a-t-il des lieux où a vécu votre grand-mère maternelle qui sont ensuite devenus des lieux significatifs pour votre famille, des lieux d'ancrage ?</label>
                                <select id="lieuximportgrandmerematernelle" name="Y a-t-il des lieux où a vécu votre grand-mère maternelle qui sont ensuite devenus des lieux significatifs pour votre famille, des lieux d'ancrage ?" required>
                                    <option value="" disabled selected>Sélectionnez une option</option>
                                    <option value="Non">Non</option>
                                    <option value="Oui">Oui</option>
                                </select>
                                <input type="text" id="precisezlieuximportgrandmerematernelle" name="precisezlieuximportgrandmerematernelle" placeholder="Précisez" style="display:none;">
                            <!--Niveau de richesse de votre grand mere maternelle -->
                            <label for="niveauderichesseprmm">Pourriez-vous estimer le niveau social de votre grand-mère maternelle par rapport à celui de vos autres grands-parents (4 étant le niveau le plus élevé et 1 le moins élevé)?</label>
                            <div class="checkbox-container">
                                <input type="checkbox" id="noAnswerniveauderichesseprmm" name="noAnswerniveauderichesseprmm">
                                    <label for="noAnswerniveauderichesseprmm">Je ne souhaite pas répondre à cette question</label>
                            </div>
                            <select id="niveauderichesseprmm" name="Pourriez-vous classer votre grand-mère maternelle par rapport à vos autres grands-parents en termes de niveau social (4 étant la personne au niveau le plus élevé et 1 la personne au niveau le moins élevé)?" required>
                                <option value="" disabled selected>Sélectionnez une option</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        </fieldset>
                    <input type="button" id="submitInfograndmerematernelle" value="OK">
                </div>
            </div>
        </div>
    <div class="quarter-rectangle">
<button class="centered-button" id="button6">Grand-père maternel</button>
                        <div id="grandfathermaternelleInfoPopup" class="popup">
                            <div class="popup-contenu">
                                <span class="close" id="closeGrandFatherMaternellePopup">&times;</span>
                        <!-- Contenu du popup -->
                                    <p>Veuillez remplir les informations suivantes :</p>
                        <!-- Checkbox mon père ne connais pas sa grand-père maternel-->
                                    <div class="checkbox-container">
                                        <input type="checkbox" id="grandperematernelinconnu" name="grandperematernelinconnu">
                                    <label for="grandperematernelinconnu">Ma mère ne connaît pas son père</label>
                            </div>
                        <!-- Contenu du popup -->
                        <fieldset>
                        <legend>Informations sur votre grand-père maternel</legend>
                        <!-- Div pour masquer le champ -->
                        <div id="divGrandPereMaternel">
                        <!-- Contenu du popup -->
                            <div class="row">
                                <div class="column">
                        <!-- Nom de famille de votre grand-père maternel-->
                                    <label for="fullNameGrandPereMaternelle">Nom de famille :</label>
                                    <input type="text" id="fullNameGrandPereMaternelle" name="fullNameGrandPereMaternelle" required placeholder="Merci d'entrer le nom de famille de votre grand-père maternel">
                                </div>
                <!-- Prénom de votre grand-père maternel-->
                            <div class="column">
                                <label for="fullPrenomGrandPereMaternelle">Prénom(s):</label>
                                    <input type="text" id="fullPrenomGrandPereMaternelle" name="fullPrenomGrandPereMaternelle" required placeholder="Merci d'entrer le prénom de votre grand-père maternel ">
                            </div>
                                <div class="column">
                <!-- Date de naissance de votre grand-Père maternel-->
                                    <label for="birthDateGrandPereMaternelle">Date de naissance :</label>
                                        <input type="date" id="birthDateGrandPereMaternelle" name="Date de naissance de votre grand-père maternel" required>
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="birthDateGrandPereMaternelleCheckbox" name="birthDateGrandPereMaternelleCheckbox">
                                                <label for="birthDateGrandPereMaternelleCheckbox">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                </div>
                        </div>
                            <div class="row">
                <!--Nombre de freres et soeurs de votre grand père maternel-->
                                <div class="column">
                                    <label for="nbfreregrandperematernel">Nombre de frères et sœurs</label>
                                        <input type="number" id="nbfreregrandperematernel" name="nombre de frères et sœurs de votre grand-père maternel" required placeholder="Entrez le nombre de frères et sœurs de votre grand-père maternel ">
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="noAnswernbfreregrandperematernel" name="noAnswernbfreregrandperematernel">
                                                <label for="noAnswernbfreregrandperematernel">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                </div>
                    <!--Nombre de demi-freres et demi-soeurs de votre grand père maternel-->
                                <div class="column">
                                    <label for="nbdemifreregrandperematernel">Nombre de demi-frères et demi-sœurs</label>
                                        <input type="number" id="nbdemifreregrandperematernel" name="nombre de demi-frères et demi-sœurs de votre grand-père maternel" required placeholder="Le nombre de demi-frères et demi-sœurs de votre grand-père maternel ">
                                        <div class="checkbox-container">
                                            <input type="checkbox" id="noAnswernbdemifreregrandperematernel" name="noAnswernbdemifreregrandperematernel">
                                                <label for="noAnswernbdemifreregrandperematernel">Je ne souhaite pas répondre à cette question</label>
                                        </div>
                                </div>
                <!-- Date de décès éventuelle de  votre grand-père maternel-->
                                <div class="column">
                                    <label for="decesDateGrandPereMaternelle">Date de décès :</label>
                                        <input type="date" id="decesDateGrandPereMaternelle" name="Date de décès de votre grand-père" required>
                                    <div class="checkbox-container">
                                        <input type="checkbox" id="grandfathermaternelleAliveCheckbox" name="grandfathermaternelleAliveCheckbox">
                                            <label for="grandfathermaternelleAliveCheckbox">Mon grand-père maternel est toujours vivant</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="column">
                    <!-- Lieu de naissance de votre grand-Père maternel-->
                                    <label for="userBirthGrandPereMaternelle">Lieu de naissance :</label>
                                        <input type="hidden" id="userBirthGrandPereMaternelle" name="Lieu de naissance de votre grand-Père maternel" required>
                                            <div id="mapidngpm" style="height: 300px; border: 2px solid #000;"></div>
                                </div>
                    <!-- Adresse actuel de votre grand-père maternel où lieu de résidence au moment du décès-->
                            <div class="column">
                                <label for="adresseGrandPereMaternelle">Adresse de votre grand-père maternel (où lieu de résidence au moment du décès) :</label>
                                    <input type="hidden" id="adresseGrandPereMaternelle" name="Adresse actuelle de votre grand-père maternel (Où lieu de résidence au moment du décès)" required>
                                        <div id="mapadresseGrandPereMaternelle" style="height: 300px; border: 2px solid #000;"></div>
                            </div>
                        </div>
                <!-- Profession de votre grand-père maternel-->
                        <div class="row">
                            <div class="column">
                                <label for="professionactuellegrandperematernelle">La profession de votre grand-père maternel où celle qu'il exerçait avant son décès :</label>
                                    <div class="checkbox-container">
                                        <input type="checkbox" id="noAnswerprofessiongrandperematernelle" name="noAnswerprofessiongrandperematernelle">
                                        <label for="noAnswerprofessiongrandperematernelle">Je ne souhaite pas répondre à cette question</label>
                                    </div>
                                    <input type="text" id="professionactuellegrandperematernelle" name="Profession de votre grand-père maternel" required placeholder="La profession de votre grand-père maternel">  
                            </div>
                <!-- Trajectoires et histoire familiales  de grand-Père maternel-->
                            <div class="column">
                <!-- Structure familiale de grand-Père maternel-->
                                <label for="familyStructuregrandperematernelle">Comment décririez-vous la structure de la famille de votre grand-père maternel?</label>
                                    <div class="checkbox-container">
                                        <input type="checkbox" id="noAnswerStructureFamilleGRPM" name="noAnswerStructureFamilleGRPM">
                                            <label for="noAnswerStructureFamilleGRPM">Je ne souhaite pas répondre à cette question</label>
                                    </div>
                                    <select id="familyStructuregrandperematernelle" name="Structure de votre famille">
                                        <option value="" disabled selected>Renseigner la structure de la famille de votre grand-père maternel</option>
                                        <option value="Traditionnelle">Traditionnelle</option>
                                        <option value="Recomposée">Recomposée</option>
                                        <option value="Monoparentale">Monoparentale</option>
                                        <option value="Autre">Autre</option>
                                    </select>
                                    <input type="text" id="otherfamilyStructuregrpm" name="otherfamilyStructuregrpm" placeholder="Précisez" style="display:none;">
                            </div>
                        </div>
                <!--Quels sont les lieux qui revêtent une importance particulière pour votre grand-père maternel, les lieux de mémoire ? -->
                        <label for="lieuximportgrandperematernelle">Y a-t-il des lieux où a vécu votre grand-père paternel qui sont ensuite devenus des lieux significatifs pour votre famille, des lieux d'ancrage ?</label>
                        <select id="lieuximportgrandperematernelle" name="Les lieux dans lesquels votre grand-père maternel a vécu" required>
                            <option value="" disabled selected>Sélectionnez une option</option>
                            <option value="Non">Non</option>
                            <option value="Oui">Oui</option>
                        </select>
                        <input type="text" id="precisezlieuximportgrandperematernelle" name="precisezlieuximportgrandperematernelle" placeholder="Précisez" style="display:none;">
                        <!--Niveau de richesse de votre grand p-re paternel -->
                        <label for="niveauderichesseprpm">Pourriez-vous estimer le niveau social de votre grand-père maternel par rapport à celui de vos autres grands-parents (4 étant le niveau le plus élevé et 1 le moins élevé)?</label>
                            <div class="checkbox-container">
                                <input type="checkbox" id="noAnswerniveauderichesseprpm" name="noAnswerniveauderichesseprpm">
                                    <label for="noAnswerniveauderichesseprpm">Je ne souhaite pas répondre à cette question</label>
                            </div>
                            <select id="niveauderichesseprpm" name="Pourriez-vous classer votre grand-père maternel par rapport à vos autres grands-parents en termes de niveau social (4 étant la personne au niveau le plus élevé et 1 la personne au niveau le moins élevé)?" required>
                                <option value="" disabled selected>Sélectionnez une option</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                    </div>
                    </fieldset>
                    <input type="button" id="submitInfograndperematernelle" value="OK">       
                </div>
            </div>
        </div>
    </div>
</div>
<script src="../JavaScript/grandparentSocialLevelAlert.js" defer></script>
<script src="../JavaScript/elementConnectionVisualizer.js" defer></script>
<script src="../JavaScript/java.js"></script> 
<script src="../JavaScript/updateGrandparentLevelOptions.js"></script> 
<script src="../JavaScript/formFieldDynamics.js"></script>
</body>
</html>