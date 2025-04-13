/**
 * Ce script JavaScript a été développé par Mohamed RIZKI & Marie GRARD.
 *
 * Ce script JavaScript utilise jQuery pour gérer les interactions de l'utilisateur avec un formulaire.
 * Il se concentre principalement sur l'affichage et la gestion des popups d'informations pour les membres de la famille 
 * et les cartes interactives pour les lieux de naissance et de résidence.
 *
 * Fonctionnalités clés :
 * - Affichage de popups pour saisir des informations détaillées sur l'utilisateur et sa famille.
 * - Gestion des choix de l'utilisateur concernant la connaissance de ses parents et grands-parents.
 * - Initialisation et gestion des cartes interactives pour saisir les coordonnées géographiques.
 * - Validation des champs de formulaire et envoi des données.
 * - Masquage ou affichage de champs spécifiques en fonction des sélections de l'utilisateur.
 *
 * Ce script garantit une interaction fluide et une collecte de données précise pour un formulaire familial détaillé.
 */
$(document).ready(function() {
    // Initialisation des variables jQuery pour les boutons et les popups liés au père
    const fatherButton = $("#button2");
    const fatherPopup = $("#fatherInfoPopup");
    const closeFatherPopup = $(".close");
    const submitInfoPere = $("#submitInfoPere");

    // Variables pour le grand-père paternel
    const grandfatherpaternelButton = $("#button4");
    const grdFathPatPopup = $("#grandfatherpaternelInfoPopup");
    const closeGrandFatherPaternelPopup = $(".close");
    const submitInfograndperepaternel = $("#submitInfograndperepaternel");

    // Variables pour la grand-mère paternelle
    const grandmotherpaternelButton = $("#button5");
    const grdMothPatPopup = $("#grandmotherpaternelInfoPopup");
    const closeGrandMotherPaternelPopup = $(".close");
    const submitInfograndmerepaternel = $("#submitInfograndmerepaternel");

    // Variables pour la grand-père paternel
    const grandfathermaternelleButton = $("#button6");
    const grdFathMatPopup = $("#grandfathermaternelleInfoPopup");
    const closeGrandFatherMaternellePopup = $(".close");
    const submitInfograndperematernelle = $("#submitInfograndperematernelle");

    // Variables pour la grand-mère maternelle
    const grandmothermaternelleButton = $("#button7");
    const grdMothMatPopup = $("#grandmothermaternelleInfoPopup");
    const closeGrandMotherMaternellePopup = $(".close");
    const submitInfograndmerematernelle = $("#submitInfograndmerematernelle");

    // Variables pour la mère
    const motherButton = $("#button3");
    const motherPopup = $("#MotherInfoPopup");
    const closeMotherPopup = $(".close");
    const submitInfoMere = $("#submitInfoMere");

    // Afficher ou masquer le popup concernant la mère selon que l'utilisateur indique connaître ou non sa mère.
    const fatherCheckbox = $("#fatherinconnu");
    const divPere = $("#divPere");

    // Afficher ou masquer le popup concernant le père en fonction de si l'utilisateur indique connaître ou non son père.
    const motherCheckbox = $("#motherinconnu");
    const divMere = $("#divMere");

    // Afficher ou masquer le popup du grand-père paternel en fonction de si le père de l'utilisateur connaît ou non son propre père.
    const grandPerePaternelCheckbox = $("#grandperepaternelinconnu");
    const divGrandPerePaternel = $("#divGrandPerePaternel");

    // Afficher ou masquer le popup de la grand-mère paternelle selon que le père de l'utilisateur connaît ou non sa mère.
    const grandMerePaternelCheckbox = $("#grandmerepaternelinconnu");
    const divGrandMerePaternel = $("#divGrandMerePaternel");

    // Afficher ou masquer le popup du grand-père maternel en fonction de si la mère de l'utilisateur connaît ou non son père.
    const grandPereMaternelCheckbox = $("#grandperematernelinconnu");
    const divGrandPereMaternel = $("#divGrandPereMaternel");

    // Afficher ou masquer le popup de la grand-mère maternelle selon que la mère de l'utilisateur connaisse ou non sa propre mère.
    const grandMereMaternelleCheckbox = $("#grandmerematernelleinconnu");
    const divGrandMereMaternelle = $("#divGrandMereMaternelle");

    // Afficher ou désactiver les boutons des grands-parents maternels (grand-père et grand-mère maternels) en fonction de la connaissance de l'utilisateur sur sa mère.
    const grandpereMaternelleButton = $("#button6");
    const grandmereMaternelleButton = $("#button7");

    // Afficher ou désactiver les boutons des grands-parents paternels (grand-père et grand-mère paternels) selon que l'utilisateur connaisse ou non son père.
    const grandperePaternelButton = $("#button4");
    const grandmerePaternelButton = $("#button5");

    // Initialisation de l'élément bouton de l'utilisateur en tant qu'objet jQuery pour une manipulation facile.
    const utilisateurButton = $("#button1");
    const utilisateurInfoPopup = $("#userInfoPopup");
    const closePopup = $(".close");
    const submitInfo = $("#submitInfo");
    const validerButton = $("#validerButton");

// Les cartes 
function initializeMap(mapId, inputId) {
  const map = L.map(mapId).setView([46.603354, 1.888334], 4);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(map);

  let marker;
  map.on('click', function(e) {
    if (marker) {
      map.removeLayer(marker);
    }
    marker = new L.marker(e.latlng).addTo(map);
    $(`#${inputId}`).val(e.latlng.lat + ', ' + e.latlng.lng);
  });

  // Ajouter le contrôle de géocodage
  var geocoder = L.Control.Geocoder.nominatim();
  var geocoderControl = L.Control.geocoder({
    query: '',
    placeholder: 'Recherchez un lieu...',
    geocoder: geocoder
  }).addTo(map);

  geocoderControl.on('markgeocode', function(e) {
    var latlng = e.geocode.center;
    map.setView(latlng, 16);
    if (marker) {
      map.removeLayer(marker);
    }
    marker = new L.marker(latlng).addTo(map);
    $(`#${inputId}`).val(latlng.lat + ', ' + latlng.lng);
  });

  return map;
}

// Initialisez toutes les cartes avec les entrées respectives
const birthMap = initializeMap('mapid', 'userBirth');
const addressMap = initializeMap('userMap', 'userAddress');
const birthMapPere = initializeMap('mapidp', 'userBirthPere');
const adressMapPere = initializeMap('mapadressePere', 'adressePere');
const birthMapMere = initializeMap('mapidm', 'userBirthMere');
const adresseMapMere = initializeMap('mapadresseMere', 'adresseMere');
const birthMapGrandPerePaternel = initializeMap('mapidngpp', 'userBirthGrandPerePaternel');
const adresseMapGrandPerePaternel = initializeMap('mapadresseGrandPereParental', 'adresseGrandPereParental');
const birthMapGrandMerePaternel = initializeMap('mapidngmp', 'userBirthGrandMerePaternel');
const adresseMapGrandMerePaternel = initializeMap('mapadresseGrandMereParental', 'adresseGrandMereParental');
const brithGrandMereMaternelle = initializeMap('mapidngmm', 'userBirthGrandMereMaternelle');
const adresseGrandMereMaternelle = initializeMap('mapadresseGrandMereMaternelle', 'adresseGrandMereMaternelle');
const brithGrandPereMaternelle = initializeMap('mapidngpm', 'userBirthGrandPereMaternelle');
const adresseGrandPereMaternelle = initializeMap('mapadresseGrandPereMaternelle', 'adresseGrandPereMaternelle');

// Fonction pour obtenir le niveau de zoom de la carte
function getMapZoom(map) {
  return map.getZoom();
}

  // Fonction pour gérer l'ouverture d'un popup et l'invalidation de la taille de la carte
  function setupPopupAndMap(button, popup, maps) {
    button.click(function() {
      popup.show();
      setTimeout(function() {
        maps.forEach(function(map) {
          if (map) map.invalidateSize();
        });
      }, 0);
    });
  }

  // Configuration des popups et des cartes
  setupPopupAndMap(utilisateurButton, utilisateurInfoPopup, [birthMap, addressMap]);
  setupPopupAndMap(fatherButton, fatherPopup, [birthMapPere, adressMapPere]);
  setupPopupAndMap(motherButton, motherPopup, [birthMapMere, adresseMapMere]);
  setupPopupAndMap(grandfatherpaternelButton, grdFathPatPopup, [birthMapGrandPerePaternel, adresseMapGrandPerePaternel]);
  setupPopupAndMap(grandmotherpaternelButton, grdMothPatPopup, [birthMapGrandMerePaternel, adresseMapGrandMerePaternel]);
  setupPopupAndMap(grandfathermaternelleButton, grdFathMatPopup, [brithGrandPereMaternelle, adresseGrandPereMaternelle]);
  setupPopupAndMap(grandmothermaternelleButton, grdMothMatPopup, [brithGrandMereMaternelle, adresseGrandMereMaternelle]);

function setupPopup(button, popup, closeBtn) {
    button.click(function() { popup.show(); });
    closeBtn.click(function() { popup.hide(); });
}

// Configurations pour chaque paire de boutons et popups
setupPopup(fatherButton, fatherPopup, closeFatherPopup);
setupPopup(motherButton, motherPopup, closeMotherPopup);
setupPopup(grandfatherpaternelButton, grdFathPatPopup, closeGrandFatherPaternelPopup);
setupPopup(grandmotherpaternelButton, grdMothPatPopup, closeGrandMotherPaternelPopup);
setupPopup(grandfathermaternelleButton, grdFathMatPopup, closeGrandFatherMaternellePopup);
setupPopup(grandmothermaternelleButton, grdMothMatPopup, closeGrandMotherMaternellePopup);
setupPopup(utilisateurButton, utilisateurInfoPopup, closePopup);

// submit et verification des informations fournis par le boutton utlusateur
submitInfo.click(function(e) {
    e.preventDefault();

    var fields = [
        {selector: '#fullName', message: "Veuillez remplir le champ nom de famille"},
        {selector: '#fullPrenom', message: "Veuillez remplir le champ prénom"},
        {selector: '#userBirth', message: "Veuillez remplir le champ votre lieu de naissance"},
        {selector: '#userAddress', message: "Veuillez remplir le champ votre adresse actuelle"},
    ];

    var fieldsToCheck = fields.filter(function(field) {
        return $(field.selector).val().trim() === "";
    });

    if(fieldsToCheck.length > 0) {
        alert(fieldsToCheck[0].message);
        return;
    }

    // Vérifications supplémentaires pour des champs pour le boutton utilisateur

    // Vérfication de remplissage de la date de naissance
    if (!$("#birthDateCheckbox").is(":checked") && $("#birthDate").val().trim() === "") {
        alert("Veuillez remplir le champ date de naissance");
        return;
    }
    // Vérfication de remplissage du champs de la profession 
    if (!$("#noAnswer").is(":checked") && $('#professionactuelle').val().trim() === "") {
        alert("Veuillez remplir le champ profession actuelle");
        return;
    }
    // Vérfication de remplissage du champs de nombre de frères et sœurs
    if (!$("#noAnswernbfrer").is(":checked") && $('#nbfrere').val().trim() === "") {
        alert("Veuillez remplir le champ nombre de frères et sœurs");
        return;
    }
    // Vérfication de remplissage du champs de nombre de demi-frères et demi-sœurs
    if (!$("#noAnswernbsoeur").is(":checked") && $('#nbsoeur').val().trim() === "") {
        alert("Veuillez remplir le champ de nombre de demi-frères et demi-sœurs");
        return;
    }
    // Vérfication de remplissage du champs trajectoire sociale
    if (!$("#noAnswerTrajectoireSociale").is(":checked") && $('#trajectoireSociale').val() === null) {
        alert("Veuillez remplir le champ de votre trajectoire sociale");
        return;
    }
    // Vérfication de remplissage du champs de structure de la famille de l'utilisateur
    if (!$("#noAnswerStructureFamille").is(":checked")) {
        if ($("#familyStructure").val() === "Autre" && $("#otherfamilyStructure").val().trim() === "") {
            alert("Veuillez préciser la structure de votre famille");
            return;
        } else if ($("#familyStructure").val() === null || $("#familyStructure").val() === "") {
            alert("Veuillez renseigner ou préciser la structure de de votre famille");
            return;
        }
    }
    // Vérfication de remplissage du champs lieux significatifs dans l'histoire de l'utilisateur
    if ($("#lieuxmarquants").val() === "Oui" && $("#precisezlieuxmarquants").val().trim() === "") {
        alert("Veuillez préciser les lieux significatifs dans votre histoire.");
        return;
    } else if ($("#lieuxmarquants").val() === null || $("#lieuxmarquants").val() === "") {
        alert("Veuillez faire une sélection ou préciser les lieux significatifs dans votre histoire.");
        return;
    }
    // Vérfication de remplissage du champs de genre de l'utilisateur
    if (!$("input[name='userGender']:checked").val()) {
        alert("Veuillez sélectionner votre genre");
        return;
    }
    // Mise à jour des informations affichées sur le boutton et fermeture des popups
    $('#button1').html($('#fullName').val() + ' ' + $('#fullPrenom').val());
    updateConnections();
    utilisateurInfoPopup.hide();
});
    // message d'excuse si l'utilisateur ne connais pas son père
    fatherCheckbox.on("change", function() {
        if (fatherCheckbox.is(":checked")) {
            // Si la case est cochée, masquer le champ de saisie
            divPere.hide();
            // Afficher une alerte
            alert("Nous comprenons que certaines informations peuvent manquer. Merci de votre participation.");
        } else {
            // Si la case n'est pas cochée, afficher le champ de saisie
            divPere.show();
        }
    });

// Verification des infos saisie dans le popup Père
submitInfoPere.click(function(e) {
    e.preventDefault();
    
    // Vérification des champs relatifs au père : Nom, Prénom, Date de Naissance, Adresse Actuelle ou Lieu de Décès (si applicable)
    if (!$("#fatherinconnu").is(":checked")) {
        var fields = [
            {selector: '#fullNamePere', message: "Veuillez remplir le champ nom de famille de votre père"},
            {selector: '#fullPrenomPere', message: "Veuillez remplir le champ prénom de votre père"},
            {selector: '#userBirthPere', message: "Veuillez remplir le champ lieu de naissance de votre père"},
            {selector: '#adressePere', message: "Veuillez remplir le champ adresse actuelle de votre père (ou lieu de résidence au moment du décès)"},
        ];
        
        var fieldsToCheck = fields.filter(function(field) {
            return $(field.selector).val().trim() === "";
        });

        if(fieldsToCheck.length > 0) {
            alert(fieldsToCheck[0].message);
            return;
        }

        if (!$("#fatherAliveCheckbox").is(":checked") && $("#decesDatePere").val().trim() === "") {
            alert("Veuillez remplir le champ date de décès de votre père");
            return;
        }

        if (!$("#birthDatePereCheckbox").is(":checked") && $("#birthDatePere").val().trim() === "") {
            alert("Veuillez remplir le champ date de naissance de votre père");
            return;
        }


        if (!$("#noAnswerinegalitesocialePere").is(":checked") && $("#inegalitesocialePere").val().trim() === "") {
            alert("Veuillez remplir le champ 'y a-t-il eu des inégalités observées entre vos parents (de milieu social par exemple) ?'");
            return;
        }
        if (!$("#noAnswerprofessionpere").is(":checked") && $('#professionactuellepere').val().trim() === "") {
            alert("Veuillez remplir le champ profession actuelle de votre père");
            return;
        }
        if (!$("#noAnswernbfrerepere").is(":checked") && $('#nbfrerepere').val().trim() === "") {
            alert("Veuillez remplir le champ nombre de frères et sœurs de votre père");
            return;
        }

        if (!$("#noAnswernbdemifreresoeurpere").is(":checked") && $('#nbdemifreresoeurpere').val().trim() === "") {
            alert("Veuillez remplir le champ nombre de demi-sœurs et demi-frères de votre père");
            return;
        }

        if (!$("#noAnswerStructureFamilleP").is(":checked")) {
            if ($("#familyStructurepere").val() === "Autre" && $("#otherfamilyStructurep").val().trim() === "") {
                alert("Veuillez préciser la structure de la famille de votre père");
                return;
            } else if ($("#familyStructurepere").val() === null || $("#familyStructurepere").val() === "") {
                alert("Veuillez renseigner ou préciser la structure de la famille de votre père");
                return;
            }
        }
        if ($("#lieuxSignificatifsPere").val() === "Oui" && $("#precisezlieuxsignificatif").val().trim() === "") {
            alert("Veuillez préciser les lieux significatifs dans l'histoire de votre père.");
            return;
        } else if ($("#lieuxSignificatifsPere").val() === null || $("#lieuxSignificatifsPere").val() === "") {
            alert("Veuillez faire une sélection ou préciser les lieux significatifs dans l'histoire de votre père");
            return;
        }
        if (!$("#noAnswerTrajectoireSocialePere").is(":checked") &&
            ($("#trajectoireSocialePere").val() === null || $("#trajectoireSocialePere").val() === "")) {
            alert("Veuillez renseigner la trajectoire sociale de votre père");
            return;
        }        
    }
    var nom_Pere = $('#fullNamePere').val();
    var PrenomPere = $('#fullPrenomPere').val();
    $('#button2').html(nom_Pere + ' ' + PrenomPere) ;
    updateConnections();
    utilisateurInfoPopup.hide();
    fatherPopup.hide();
});

// Événement de changement de la case à cocher
fatherCheckbox.on("change", function() {
    if (fatherCheckbox.is(":checked")) {
        // Si la case est cochée, masquer les boutons
        grandperePaternelButton.hide();
        grandmerePaternelButton.hide();
    } else {
        // Si la case n'est pas cochée, afficher les boutons
        grandperePaternelButton.show();
        grandmerePaternelButton.show();
    }
});


// Vérification des informations saisies dans le popup concernant la mère : assure que tous les champs obligatoires sont correctement remplis.
submitInfoMere.click(function(e) {
    e.preventDefault();
    
    if (!$("#motherinconnu").is(":checked")) {
        var fields = [
            {selector: '#fullNameMere', message: "Veuillez remplir le champ nom de famille de votre mère"},
            
            {selector: '#fullPrenomMere', message: "Veuillez remplir le champ prénom de votre mère"},
            {selector: '#userBirthMere', message: "Veuillez remplir le champ lieu de naissance de votre mère"},
            {selector: '#adresseMere', message: "Veuillez remplir le champ adresse actuelle de votre mère (ou lieu de résidence au moment du décès)"},
        ];
        
        var fieldsToCheck = fields.filter(function(field) {
            return $(field.selector).val().trim() === "";
        });


        if(fieldsToCheck.length > 0) {
            alert(fieldsToCheck[0].message);
            return;
        }

        if (!$("#motherAliveCheckbox").is(":checked") && $("#decesDateMere").val().trim() === "") {
            alert("Veuillez remplir le champ date de décès de votre mère");
            return;
        }

        if (!$("#birthDateMereCheckbox").is(":checked") && $("#birthDateMere").val().trim() === "") {
            alert("Veuillez remplir le champ date de naissance de votre mère");
            return;
        }

        if (!$("#noAnswerinegalitesocialeMere").is(":checked") && $("#inegalitesocialeMere").val().trim() === "") {
            alert("Veuillez remplir le champ 'Y a-t-il eu des inégalités observées entre vos parents (de milieu social par exemple) ?");
            return;
        }
        if (!$("#noAnswerprofessionmere").is(":checked") && $('#professionactuellemere').val().trim() === "") {
            alert("Veuillez remplir le champ profession actuelle de votre mère");
            return;
        }

        if (!$("#noAnswernbfreremere").is(":checked") && $('#nbfreremere').val().trim() === "") {
            alert("Veuillez remplir le champ nombre de frères et sœurs de votre mère");
            return;
        }

        if (!$("#noAnswernbdemifreremere").is(":checked") && $('#nbdemifreremere').val().trim() === "") {
            alert("Veuillez remplir le champ nombre de demi-frères et demi-sœurs de votre mère");
            return;
        }

        if (!$("#noAnswerStructureFamilleM").is(":checked")) {
            if ($("#familyStructuremere").val() === "Autre" && $("#otherfamilyStructurem").val().trim() === "") {
                alert("Veuillez préciser la structure de la famille de votre mère.");
                return;
            } else if ($("#familyStructuremere").val() === null || $("#familyStructuremere").val() === "") {
                alert("Veuillez renseigner ou préciser la structure de la famille de votre mère.");
                return;
            }
        }
        if ($("#lieuxSignificatifsMere").val() === "Oui" && $("#precisezlieuxsignificatifmere").val().trim() === "") {
            alert("Veuillez préciser les lieux significatifs dans l'histoire de votre mère.");
            return;
        } else if ($("#lieuxSignificatifsMere").val() === null || $("#lieuxSignificatifsMere").val() === "") {
            alert("Veuillez faire une sélection ou préciser les lieux significatifs dans l'histoire de votre mère.");
            return;
        }
        if (!$("#noAnswerTrajectoireSocialeMere").is(":checked") &&
            ($("#trajectoireSocialeMere").val() === null || $("#trajectoireSocialeMere").val() === "")) {
            alert("Veuillez renseigner la trajectoire sociale de votre mère");
            return;
        }        
    }
    // changement de nom de boutton apres le remplissage des informations ...
    var nom_Mere = $('#fullNameMere').val();
    var prenom_mere = $('#fullPrenomMere').val();
    $('#button3').html(nom_Mere + ' ' + prenom_mere) ;
    updateConnections();
    utilisateurInfoPopup.hide();
    motherPopup.hide();
});

// Événement de changement de la case à cocher
motherCheckbox.on("change", function() {
    if (motherCheckbox.is(":checked")) {
        // Si la case est cochée, masquer les boutons et le champ de saisie
        grandpereMaternelleButton.hide();
        grandmereMaternelleButton.hide();
        divMere.hide();
        // Afficher une alerte
        alert("Nous comprenons que certaines informations peuvent manquer. Merci de votre participation.");
    } else {
        // Si la case n'est pas cochée, afficher les boutons et le champ de saisie
        grandpereMaternelleButton.show();
        grandmereMaternelleButton.show();
        divMere.show();
    }
});

// Vérification des informations saisies dans le popup concernant le grand-père paternel : assure que tous les champs obligatoires sont correctement remplis.
submitInfograndperepaternel.click(function(e) {
    e.preventDefault();

    if ( !$("#fatherinconnu").is(":checked")  && !$("#grandperepaternelinconnu").is(":checked")) {
        var fields = [
            { selector: '#fullNameGrandPerePaternel', message: "Veuillez remplir le champ nom de famille de votre grand-père paternel" },
            { selector: '#fullPrenomGrandPerePaternel', message: "Veuillez remplir le champ prénom de votre grand-père paternel" },

            { selector: '#userBirthGrandPerePaternel', message: "Veuillez remplir le champ lieu de naissance de votre grand-père paternel" },
            { selector: '#adresseGrandPereParental', message: "Veuillez remplir le champ adresse actuelle de votre grand-père paternel (ou lieu de résidence au moment du décès)" }
        ];
        
        for (var i = 0; i < fields.length; i++) {
            if ($(fields[i].selector).val().trim() === "") {
                alert(fields[i].message);
                return;
            }
        }

        if (!$("#grandfatherpaternelAliveCheckbox").is(":checked") && $("#decesDateGrandPerePaternel").val().trim() === "") {
            alert("Veuillez remplir le champ date de décès de votre grand-père paternel");
            return;
        }

        if (!$("#birthDateGrandPerePaternelleAliveCheckbox").is(":checked") && $("#birthDateGrandPerePaternelle").val().trim() === "") {
            alert("Veuillez remplir le champ date de naissance de votre grand-père paternel");
            return;
        }

        //
        if ($("#lieuximportgrandperepaternel").val() === "Oui" && $("#precisezlieuximportgrandperepaternel").val().trim() === "") {
            alert("Veuillez préciser les lieux significatifs dans l'histoire de votre grand-père paternel.");
            return;
        } else if ($("#lieuximportgrandperepaternel").val() === null || $("#lieuximportgrandperepaternel").val() === "") {
            alert("Veuillez faire une sélection ou préciser les lieux significatifs dans l'histoire de votre grand-père paternel");
            return;
        }

    if (!$("#noAnswerniveauderichesseprpp").is(":checked") && $('#niveauderichesseprpp').val() === null ) {
        alert("Veuillez choisir le niveau de richesse de votre grand père paternel");
        return;
    }

        if (!$("#noAnswerprofessiongrandperepaternel").is(":checked") && $('#professionactuellegrandperepaternel').val().trim() === "") {
            alert("Veuillez remplir le champ profession actuelle de votre grand- père paternel");
            return;
        }

        if (!$("#noAnswernbfreregrandperepaternel").is(":checked") && $('#nbfreregrandperepaternel').val().trim() === "") {
            alert("Veuillez remplir le champ nombre de frères et sœurs de votre grand- père paternel");
            return;
        }
        if (!$("#noAnswernbdemifreregrandperepaternel").is(":checked") && $('#nbdemifreregrandperepaternel').val().trim() === "") {
            alert("Veuillez remplir le champ nombre de demi-frères et demi-sœurs de votre grand- père paternel");
            return;
        }

        if (!$("#noAnswerStructureFamilleGRP").is(":checked")) {
            if ($("#familyStructuregrandperepaternel").val() === "Autre" && $("#otherfamilyStructuregrp").val().trim() === "") {
                alert("Veuillez préciser la structure de la famille de votre grand-père paternel.");
                return;
            } else if ($("#familyStructuregrandperepaternel").val() === null || $("#familyStructuregrandperepaternel").val() === "") {
                alert("Veuillez renseigner ou préciser la structure de la famille de votre grand-père paternel.");
                return;
            }
        }
    }

    // mettre a jour les informations qui s'affichent sur le boutton ...
    var nom_GrandPerePaternel = $('#fullNameGrandPerePaternel').val();
    var prenom_grandperepaternel = $('#fullPrenomGrandPerePaternel').val();
    $('#button4').html(nom_GrandPerePaternel + ' ' + prenom_grandperepaternel) ;
    updateConnections();
    grdFathPatPopup.hide();
});
// Gestionnaire d'événement pour la case à cocher grand-père paternel
grandPerePaternelCheckbox.on("change", function() {
    if (grandPerePaternelCheckbox.is(":checked")) {
        // Masquer les éléments si la case est cochée
        grandperePaternelButton.hide();
        divGrandPerePaternel.hide();
        // Afficher l'alerte
        alert("Nous comprenons que certaines informations peuvent manquer. Merci de votre participation.");
    } else {
        // Afficher les éléments si la case n'est pas cochée
        grandperePaternelButton.show();
        divGrandPerePaternel.show();
    }
});

// Vérification des informations saisies dans le popup concernant la grand-mère paternelle : assure que tous les champs obligatoires sont correctement remplis.
submitInfograndmerepaternel.click(function(e) {
    e.preventDefault();
    if (!$("#fatherinconnu").is(":checked") && !$("#grandmerepaternelinconnu").is(":checked")) {
        const fields = [
            { selector: '#fullNameGrandMerePaternel', message: "nom de famille de votre grand-mère paternelle" },
            { selector: '#fullPrenomGrandMerePaternel', message: "prénom de votre grand-mère paternelle" },
            { selector: '#userBirthGrandMerePaternel', message: "lieu de naissance de votre grand-mère paternelle" },
            { selector: '#adresseGrandMereParental', message: "adresse actuelle de votre grand-mère paternelle (ou lieu de résidence au moment du décès)" }
        ];
        for (const { selector, message } of fields) {
            if ($(selector).val().trim() === "") {
                alert(`Veuillez remplir le champ ${message}.`);
                return;
            }
        }
        if (!$("#grandmotherpaternelAliveCheckbox").is(":checked") && $("#decesDateGrandMerePaternel").val().trim() === "") {
            alert("Veuillez remplir le champ date de décès de votre grand-mère paternelle");
            return;
        }

        if (!$("#birthDateGrandMerePaternelleAliveCheckbox").is(":checked") && $("#birthDateGrandMerePaternelle").val().trim() === "") {
            alert("Veuillez remplir le champ date de naissance de votre grand-mère paternelle");
            return;
        }
        //
        if ($("#lieuximportgrandmerepaternel").val() === "Oui" && $("#precisezlieuximportgrandmerepaternel").val().trim() === "") {
            alert("Veuillez préciser les lieux significatifs dans l'histoire de votre grand-mère paternelle.");
            return;
        } else if ($("#lieuximportgrandmerepaternel").val() === null || $("#lieuximportgrandmerepaternel").val() === "") {
            alert("Veuillez faire une sélection ou préciser les lieux significatifs dans l'histoire de votre grand-mère paternelle.");
            return;
        }

    if (!$("#noAnswerniveauderichesseprmp").is(":checked") && $('#niveauderichesseprmp').val() === null ) {
        alert("Veuillez choisir le niveau de richesse de votre grand mère paternelle");
        return;
    }
        if (!$("#noAnswerprofessiongrandmerepaternel").is(":checked") && $('#professionactuellegrandmerepaternel').val().trim() === "") {
            alert("Veuillez remplir le champ profession actuelle de votre grand-mère paternelle");
            return;
        }
        if (!$("#noAnswernbfreregrandmerepaternel").is(":checked") && $('#nbfreregrandmerepaternel').val().trim() === "") {
            alert("Veuillez remplir le champ nombre de frères et sœurs de votre grand-mère paternelle");
            return;
        }
        if (!$("#noAnswernbdmfreregrandmerepaternel").is(":checked") && $('#nbdmfreregrandmerepaternel').val().trim() === "") {
            alert("Veuillez remplir le champ nombre de demi-frères et demi-sœurs de votre grand-mère paternelle");
            return;
        }

        if (!$("#noAnswerStructureFamilleGRM").is(":checked")) {
            if ($("#familyStructuregrandmerepaternel").val() === "Autre" && $("#otherfamilyStructuregrm").val().trim() === "") {
                alert("Veuillez préciser la structure de la famille de votre grand-mère paternelle.");
                return;
            } else if ($("#familyStructuregrandmerepaternel").val() === null || $("#familyStructuregrandmerepaternel").val() === "") {
                alert("Veuillez renseigner ou préciser la structure de la famille de votre grand-mère paternelle.");
                return;
            }
        }
    }
    // Mise à jour des informations affichées sur le bouton après avoir complété le formulaire concernant la grand-mère paternelle.
    var nom_GrandMerePaternel = $('#fullNameGrandMerePaternel').val();
    var prenom_grandmerepaternel = $('#fullPrenomGrandMerePaternel').val();
    $('#button5').html(nom_GrandMerePaternel + ' ' + prenom_grandmerepaternel) ;
    updateConnections();
    grdMothPatPopup.hide();
});

// Gestionnaire d'événement pour la case à cocher grand-mère paternelle
grandMerePaternelCheckbox.on("change", function() {
    if (grandMerePaternelCheckbox.is(":checked")) {
        // Masquer les éléments si la case est cochée
        grandmerePaternelButton.hide();
        divGrandMerePaternel.hide();
        // Afficher l'alerte
        alert("Nous comprenons que certaines informations peuvent manquer. Merci de votre participation.");
    } else {
        // Afficher les éléments si la case n'est pas cochée
        grandmerePaternelButton.show();
        divGrandMerePaternel.show();
    }
});

// Vérification des informations saisies dans le popup concernant le grand-père maternelle : assure que tous les champs obligatoires sont correctement remplis.
submitInfograndperematernelle.click(function(e) {
    e.preventDefault();
    if (!$("#motherinconnu").is(":checked") && !$("#grandperematernelinconnu").is(":checked")) {
        const fields = [
            {selector: '#fullNameGrandPereMaternelle', message: "le champ nom de famille de votre grand-père maternel"},
            {selector: '#fullPrenomGrandPereMaternelle', message: "le champ prénom de votre grand-père maternel"},
            {selector: '#userBirthGrandPereMaternelle', message: "le champ lieu de naissance de votre grand-père maternel"},
            {selector: '#adresseGrandPereMaternelle', message: "le champ Adresse actuelle de votre grand-père maternel"}
        ];

        for (let {selector, message} of fields) {
            if ($(selector).val().trim() === "") {
                alert(`Veuillez remplir ${message}`);
                return;
            }
        }
        if (!$("#noAnswerprofessiongrandperematernelle").is(":checked") && $('#professionactuellegrandperematernelle').val().trim() === "") {
            alert("Veuillez remplir le champ profession actuelle de votre grand-père maternel");
            return;
        }

        if ($("#lieuximportgrandperematernelle").val() === "Oui" && $("#precisezlieuximportgrandperematernelle").val().trim() === "") {
            alert("Veuillez préciser les lieux significatifs dans l'histoire de votre grand-père maternel.");
            return;
        } else if ($("#lieuximportgrandperematernelle").val() === null || $("#lieuximportgrandperematernelle").val() === "") {
            alert("Veuillez faire une sélection ou préciser les lieux significatifs dans l'histoire de votre grand-père maternel");
            return;
        }

        if (!$("#noAnswerniveauderichesseprpm").is(":checked") && $('#niveauderichesseprpm').val() === null ) {
            alert("Veuillez choisir le niveau de richesse de votre grand père maternel");
            return;
        }

        if (!$("#noAnswernbfreregrandperematernel").is(":checked") && $('#nbfreregrandperematernel').val().trim() === "") {
            alert("Veuillez remplir le champ nombre de frères et sœurs de votre grand-père maternel");
            return;
        }
        if (!$("#noAnswernbdemifreregrandperematernel").is(":checked") && $('#nbdemifreregrandperematernel').val().trim() === "") {
            alert("Veuillez remplir le champ nombre de demi-frères et demi-sœurs de votre grand-père maternel");
            return;
        }

        if (!$("#grandfathermaternelleAliveCheckbox").is(":checked") && $("#decesDateGrandPereMaternelle").val().trim() === "") {
            alert("Veuillez remplir le champ date de décès de votre grand-père maternel");
            return;
        }

        if (!$("#birthDateGrandPereMaternelleCheckbox").is(":checked") && $("#birthDateGrandPereMaternelle").val().trim() === "") {
            alert("Veuillez remplir le champ date de naissance de votre grand-père maternel");
            return;
        }

        if (!$("#noAnswerStructureFamilleGRPM").is(":checked")) {
            if ($("#familyStructuregrandperematernelle").val() === "Autre" && $("#otherfamilyStructuregrpm").val().trim() === "") {
                alert("Veuillez préciser la structure de la famille de votre grand-père maternel.");
                return;
            } else if ($("#familyStructuregrandperematernelle").val() === null || $("#familyStructuregrandperematernelle").val() === "") {
                alert("Veuillez renseigner ou préciser la structure de la famille de votre grand-père maternel.");
                return;
            }
        }
    }

    // Mise à jour des informations affichées sur le bouton après avoir complété le formulaire concernant la grand-père maternel
    var nom_GrandPareMaternel = $('#fullNameGrandPereMaternelle').val();
    var prenom_grandperematernel = $('#fullPrenomGrandPereMaternelle').val();
    $('#button6').html(nom_GrandPareMaternel + ' ' + prenom_grandperematernel) ;
    updateConnections();
    // Si tous les champs sont remplis, fermez le popup
    grdFathMatPopup.hide();
});

// Gestionnaire d'événement pour la case à cocher grand-mère paternelle
grandPereMaternelCheckbox.on("change", function() {
    if (grandPereMaternelCheckbox.is(":checked")) {
        // Masquer les éléments si la case est cochée
        grandpereMaternelleButton.hide();
        divGrandPereMaternel.hide();
        // Afficher l'alerte
        alert("Nous comprenons que certaines informations peuvent manquer. Merci de votre participation.");
    } else {
        // Afficher les éléments si la case n'est pas cochée
        grandpereMaternelleButton.show();
        divGrandPereMaternel.show();
    }
});

// Vérification des informations saisies dans le popup concernant la grand-mère maternelle : assure que tous les champs obligatoires sont correctement remplis.
submitInfograndmerematernelle.click(function(e) {
    e.preventDefault();
    // Vérification des champs si le checkbox "motherinconnu" n'est pas coché
    if (!$("#motherinconnu").is(":checked") && !$("#grandmerematernelleinconnu").is(":checked")) {
        let fields = {
            '#fullNameGrandMereMaternelle': "nom de famille de votre grand-mère maternelle",
            '#fullPrenomGrandMereMaternelle': "prénom de votre grand-mère maternelle",
            '#userBirthGrandMereMaternelle': "lieu de naissance de votre grand-mère maternelle",
            '#adresseGrandMereMaternelle':"adresse actuelle de votre grand-mère maternelle (ou lieu de résidence au moment du décès)"
        };
        for (let [id, name] of Object.entries(fields)) {
            if ($(id).val().trim() === "") {
                alert(`Veuillez remplir le champ ${name}`);
                return;
            }
        }

        if (!$("#noAnswerprofessiongrandmerematernelle").is(":checked") && $('#professionactuellegrandmerematernelle').val().trim() === "") {
            alert("Veuillez remplir le champ profession actuelle de votre grand-mère maternelle");
            return;
        }

        if ($("#lieuximportgrandmerematernelle").val() === "Oui" && $("#precisezlieuximportgrandmerematernelle").val().trim() === "") {
            alert("Veuillez préciser les lieux significatifs dans l'histoire de votre grand-mère maternelle.");
            return;
        } else if ($("#lieuximportgrandmerematernelle").val() === null || $("#lieuximportgrandmerematernelle").val() === "") {
            alert("Veuillez faire une sélection ou préciser les lieux significatifs dans l'histoire de votre grand-mère maternelle");
            return;
        }

        if (!$("#noAnswerniveauderichesseprmm").is(":checked") && $('#niveauderichesseprmm').val() === null ) {
            alert("Veuillez choisir le niveau de richesse de votre grand mère maternel");
            return;
        }

        if (!$("#noAnswernbfreregrandmerematernel").is(":checked") && $('#nbfreregrandmerematernel').val().trim() === "") {
            alert("Veuillez remplir le champ nombre de frères et sœurs de votre grand-mère maternelle");
            return;
        }

        if (!$("#noAnswernbdmfreregrandmerematernel").is(":checked") && $('#nbdmfreregrandmerematernel').val().trim() === "") {
            alert("Veuillez remplir le champ nombre de demi-frères et demi-sœurs de votre grand-mère maternelle");
            return;
        }

        if (!$("#grandmothermaternelleAliveCheckbox").is(":checked") && $("#decesDateGrandMereMaternelle").val().trim() === "") {
            alert("Veuillez remplir le champ date de décès de votre grand-mère maternelle.");
            return;
        }

        if (!$("#birthDateGrandMereMaternelleCheckbox").is(":checked") && $("#birthDateGrandMereMaternelle").val().trim() === "") {
            alert("Veuillez remplir le champ date de naissance de votre grand-mère maternelle.");
            return;
        }

        if (!$("#noAnswerStructureFamilleGRMM").is(":checked")) {
            if ($("#familyStructuregrandmerematernelle").val() === "Autre" && $("#otherfamilyStructuregrmm").val().trim() === "") {
                alert("Veuillez préciser la structure de la famille de votre grand-mère maternel.");
                return;
            } else if ($("#familyStructuregrandmerematernelle").val() === null || $("#familyStructuregrandmerematernelle").val() === "") {
                alert("Veuillez renseigner ou préciser la structure de la famille de votre grand-mère paternel.");
                return;
            }
        }
    }

    // Mise à jour des informations affichées sur le bouton après avoir complété le formulaire concernant la grand-mère maternelle
    var nom_GrandMereMaternel = $('#fullNameGrandMereMaternelle').val();
    var prenom_grandmerematernelle = $('#fullPrenomGrandMereMaternelle').val();
    $('#button7').html(nom_GrandMereMaternel + ' ' + prenom_grandmerematernelle) ;
    updateConnections();
    // Si toutes les vérifications sont passées, fermez le popup
    grdMothMatPopup.hide();
});

// Gestionnaire d'événement pour la case à cocher grand-mère maternelle
grandMereMaternelleCheckbox.on("change", function() {
    if (grandMereMaternelleCheckbox.is(":checked")) {
        // Masquer les éléments si la case est cochée
        grandmereMaternelleButton.hide();
        divGrandMereMaternelle.hide();
        // Afficher l'alerte
        alert("Nous comprenons que certaines informations peuvent manquer. Merci de votre participation.");
    } else {
        // Afficher les éléments si la case n'est pas cochée
        grandmereMaternelleButton.show();
        divGrandMereMaternelle.show();
    }
});

    // Gestion de l'événement 'click' sur le bouton de validation
    validerButton.click(function() {
        const familyStructures = $("#noAnswerStructureFamille").is(":checked") ? "L'utilisateur refuse de répondre" : ($("#familyStructure").val() === "Autre" ? $("#otherfamilyStructure").val() : $("#familyStructure").val());
        const raisonslieux = ($("#lieuxmarquants").val() === "Oui" ? $("#precisezlieuxmarquants").val() : $("#lieuxmarquants").val());
        const professionactuelle = $("#noAnswer").is(":checked") ? "L'utilisateur refuse de répondre" : $("#professionactuelle").val();
        const trajectoireSociales = $("#noAnswerTrajectoireSociale").is(":checked") ? "L'utilisateur refuse de répondre": $("#trajectoireSociale").val();
        const decespere = $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#fatherAliveCheckbox").is(":checked") ? "Le père est toujours vivant": $("#decesDatePere").val();
        const brithpapa = $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#birthDatePereCheckbox").is(":checked") ? "L'utilisateur refuse de répondre": $("#birthDatePere").val();
        const nbfresoepere = $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#noAnswernbfrerepere").is(":checked") ? "L'utilisateur refuse de répondre" : $("#nbfrerepere").val();
        const nbdemifresoepere = $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#noAnswernbfrerepere").is(":checked") ? "L'utilisateur refuse de répondre" : $("#nbdemifreresoeurpere").val();
        const nbfresoemere = $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#noAnswernbfreremere").is(":checked") ? "L'utilisateur refuse de répondre" : $("#nbfreremere").val();
        const nbdemifresoemere = $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#noAnswernbdemifreremere").is(":checked") ? "L'utilisateur refuse de répondre" : $("#nbdemifreremere").val();
        const metierpere = $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#noAnswerprofessionpere").is(":checked") ? "L'utilisateur refuse de répondre" : $("#professionactuellepere").val();
        const familyStructurespapa = $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#noAnswerStructureFamilleP").is(":checked") ? "L'utilisateur refuse de répondre" : ($("#familyStructurepere").val() === "Autre" ? $("#otherfamilyStructurep").val() : $("#familyStructurepere").val());
        const lieuxsignipapa = $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#lieuxSignificatifsPere").val() === "Oui" ? $("#precisezlieuxsignificatif").val() : $("#lieuxSignificatifsPere").val();
        const trajectoireSocialesPapa = $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#noAnswerTrajectoireSocialePere").is(":checked") ? "L'utilisateur refuse de répondre": $("#trajectoireSocialePere").val();
        const nommaman = $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#fullNameMere").val();
        const nompapa = $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#fullNamePere").val();
        const prenompapa = $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#fullPrenomPere").val();
        const prenommama = $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#fullPrenomMere").val();
        const brithmmaman = $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#birthDateMereCheckbox").is(":checked") ? "L'utilisateur refuse de répondre" : $("#birthDateMere").val();
        const lieunaissancemere = $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#userBirthMere").val();  
        const lieunaissancepere = $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#userBirthPere").val();
        const decesmere = $("#motherAliveCheckbox").is(":checked") ? "La maman est toujours vivante" : ($("#motherinconnu").is(":checked") ? "L'utilisateur ne connaît pas sa maman" : $("#decesDateMere").val());     
        const adressenaissancemere = $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#adresseMere").val();
        const metiermere = $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#noAnswerprofessionmere").is(":checked") ? "L'utilisateur refuse de répondre" : $("#professionactuellemere").val();
        const familyStructuresmama = $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#noAnswerStructureFamilleM").is(":checked") ? "L'utilisateur refuse de répondre" : ($("#familyStructuremere").val() === "Autre" ? $("#otherfamilyStructurem").val() : $("#familyStructuremere").val());
        const lieuxresidencepere = $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#adressePere").val();
        const lieuxsignimama = $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#lieuxSignificatifsMere").val() === "Oui" ? $("#precisezlieuxsignificatifmere").val() : $("#lieuxSignificatifsMere").val();
        const trajectoireSocialesMama = $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#noAnswerTrajectoireSocialeMere").is(":checked") ? "L'utilisateur refuse de répondre": $("#trajectoireSocialeMere").val();
        const inegalitesocialemaman = $("#noAnswerinegalitesocialeMere").is(":checked") ? "L'utilisateur refuse de répondre" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#inegalitesocialeMere").val();
        const inegalitesocialepapa = $("#noAnswerinegalitesocialePere").is(":checked") ? "L'utilisateur refuse de répondre" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#inegalitesocialePere").val();
        const nomgpp = $("#grandperepaternelinconnu").is(":checked") ? "Mon père ne connais pas son père" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#fullNameGrandPerePaternel").val();
        const prenomgpp = $("#grandperepaternelinconnu").is(":checked") ? "Mon père ne connais pas son père" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#fullPrenomGrandPerePaternel").val();
        const datebrithgpp =$("#birthDateGrandPerePaternelleAliveCheckbox").is(":checked") ? "L'utilisateur refuse de répondre" : $("#grandperepaternelinconnu").is(":checked") ? "Mon père ne connais pas son père" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#birthDateGrandPerePaternelle").val();
        const brithgrandperepaternel = $("#grandperepaternelinconnu").is(":checked") ? "Mon père ne connais pas son père" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#userBirthGrandPerePaternel").val();
        const decesgrandperepaternel = $("#grandperepaternelinconnu").is(":checked") ? "Mon père ne connais pas son père" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#grandfatherpaternelAliveCheckbox").is(":checked") ? "Le grand-père paternel est toujours vivant": $("#decesDateGrandPerePaternel").val(); 
        const adressegrandperepaternel = $("#grandperepaternelinconnu").is(":checked") ? "Mon père ne connais pas son père" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#adresseGrandPereParental").val();
        const metiergrandperepaternel = $("#grandperepaternelinconnu").is(":checked") ? "Mon père ne connais pas son père" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#noAnswerprofessiongrandperepaternel").is(":checked") ? "L'utilisateur refuse de répondre" : $("#professionactuellegrandperepaternel").val();        
        const familyStructuresgrandpapapaternel = $("#grandperepaternelinconnu").is(":checked") ? "Mon père ne connais pas son père" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#noAnswerStructureFamilleGRP").is(":checked") ? "L'utilisateur refuse de répondre" : ($("#familyStructuregrandperepaternel").val() === "Autre" ? $("#otherfamilyStructuregrp").val() : $("#familyStructuregrandperepaternel").val());
        const nvrichegrpp = $("#grandperepaternelinconnu").is(":checked") ? "Mon père ne connais pas son père" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#noAnswerniveauderichesseprpp").is(":checked") ? "L'utilisateur refuse de répondre" : $("#niveauderichesseprpp").val();  
        const nvrichegrmp = $("#grandmerepaternelinconnu").is(":checked") ? "Mon père ne connais pas sa mère" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#noAnswerniveauderichesseprmp").is(":checked") ? "L'utilisateur refuse de répondre" : $("#niveauderichesseprmp").val();  
        const nvrichegrpm = $("#grandperematernelinconnu").is(":checked") ? "Mon père ne connais pas son père" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa mère" : $("#noAnswerniveauderichesseprpm").is(":checked") ? "L'utilisateur refuse de répondre" : $("#niveauderichesseprpm").val();         
        const nvrichegrmm = $("#grandmerematernelleinconnu").is(":checked") ? "Ma mère ne connais pas sa maman" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa mère" : $("#noAnswerniveauderichesseprmm").is(":checked") ? "L'utilisateur refuse de répondre" : $("#niveauderichesseprmm").val();        
        const nbfresoegrperepat = $("#grandperepaternelinconnu").is(":checked") ? "Mon père ne connais pas son père" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#noAnswernbfreregrandperepaternel").is(":checked") ? "L'utilisateur refuse de répondre" : $("#nbfreregrandperepaternel").val();
        const nbfresoegrmerepat = $("#grandmerepaternelinconnu").is(":checked") ? "Mon père ne connais pas sa maman" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#noAnswernbfreregrandmerepaternel").is(":checked") ? "L'utilisateur refuse de répondre" : $("#nbfreregrandmerepaternel").val();
        const nbfresoegrperemat = $("#grandperematernelinconnu").is(":checked") ? "Ma mère ne connais pas son père" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#noAnswernbfreregrandperematernel").is(":checked") ? "L'utilisateur refuse de répondre" : $("#nbfreregrandperematernel").val();
        const nbdmfresoegrperemat = $("#grandperematernelinconnu").is(":checked") ? "Ma mère ne connais pas son père" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#noAnswernbdemifreregrandperematernel").is(":checked") ? "L'utilisateur refuse de répondre" : $("#nbdemifreregrandperematernel").val();
        const nbfresoegrmeremat = $("#grandmerematernelleinconnu").is(":checked") ? "Ma mère ne connais pas sa maman" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#noAnswernbfreregrandmerematernel").is(":checked") ? "L'utilisateur refuse de répondre" : $("#nbfreregrandmerematernel").val();
        const nbdemifresoegrperepat = $("#grandperepaternelinconnu").is(":checked") ? "Mon père ne connais pas son père" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#noAnswernbdemifreregrandperepaternel").is(":checked") ? "L'utilisateur refuse de répondre" : $("#nbdemifreregrandperepaternel").val();
        const nbdmfresoegrmerepat = $("#grandmerepaternelinconnu").is(":checked") ? "Mon père ne connais pas sa maman" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#noAnswernbdmfreregrandmerepaternel").is(":checked") ? "L'utilisateur refuse de répondre" : $("#nbdmfreregrandmerepaternel").val();
        const nbfrruser = $("#noAnswernbfrer").is(":checked") ? "L'utilisateur refuse de répondre" : $("#nbfrere").val();
        const nbsrruser = $("#noAnswernbsoeur").is(":checked") ? "L'utilisateur refuse de répondre" : $("#nbsoeur").val();
        const nbdmfresoegrmeremat = $("#grandmerematernelleinconnu").is(":checked") ? "Ma mère ne connais pas sa maman" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#noAnswernbdmfreregrandmerematernel").is(":checked") ? "L'utilisateur refuse de répondre" : $("#nbdmfreregrandmerematernel").val();
        const lieuximportgrdperepaternel = $("#grandperepaternelinconnu").is(":checked") ? "Mon père ne connais pas son père" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#lieuximportgrandperepaternel").val() === "Oui" ? $("#precisezlieuximportgrandperepaternel").val() : $("#lieuximportgrandperepaternel").val();        
        const nivrichgrpp = $("#grandperepaternelinconnu").is(":checked") ? "Mon père ne connais pas son père" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#niveauderichesseprpp").val();
        const nomgmp = $("#grandmerepaternelinconnu").is(":checked") ? "Mon père ne connais pas sa mère" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#fullNameGrandMerePaternel").val();
        const prenomgmp = $("#grandmerepaternelinconnu").is(":checked") ? "Mon père ne connais pas sa mère" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#fullPrenomGrandMerePaternel").val();
        const datebrithgmp = $("#birthDateGrandMerePaternelleAliveCheckbox").is(":checked") ? "L'utilisateur refuse de répondre" : $("#grandmerepaternelinconnu").is(":checked") ? "Mon père ne connais pas sa mère" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#birthDateGrandMerePaternelle").val();
        const brithgrandmerepaternel = $("#grandmerepaternelinconnu").is(":checked") ? "Mon père ne connais pas sa mère" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#userBirthGrandMerePaternel").val();
        const decesgrandmerepaternel = $("#grandmerepaternelinconnu").is(":checked") ? "Mon père ne connais pas sa mère" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#grandmotherpaternelAliveCheckbox").is(":checked") ? "La grand-mère paternel est toujours vivant": $("#decesDateGrandMerePaternel").val();
        const adressegrandmerepaternel = $("#grandmerepaternelinconnu").is(":checked") ? "Mon père ne connais pas sa mère" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#adresseGrandMereParental").val();
        const metiergrandmerepaternel = $("#grandmerepaternelinconnu").is(":checked") ? "Mon père ne connais pas sa mère" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#noAnswerprofessiongrandmerepaternel").is(":checked") ? "L'utilisateur refuse de répondre" : $("#professionactuellegrandmerepaternel").val();
        const familyStructuresgrandmamapaternel = $("#grandmerepaternelinconnu").is(":checked") ? "Mon père ne connais pas sa mère" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#noAnswerStructureFamilleGRM").is(":checked") ? "L'utilisateur refuse de répondre" : ($("#familyStructuregrandmerepaternel").val() === "Autre" ? $("#otherfamilyStructuregrm").val() : $("#familyStructuregrandmerepaternel").val());
        const lieuximportgrdmerepaternel = $("#grandmerepaternelinconnu").is(":checked") ? "Mon père ne connais pas sa mère" : $("#fatherinconnu").is(":checked") ? "L'utilisateur ne connais pas son père" : $("#lieuximportgrandmerepaternel").val()  === "Oui" ? $("#precisezlieuximportgrandmerepaternel").val() : $("#lieuximportgrandmerepaternel").val();
        const nomgpm = $("#grandperematernelinconnu").is(":checked") ? "Ma mère ne connais pas son père" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#fullNameGrandPereMaternelle").val();
        const prenomgpm = $("#grandperematernelinconnu").is(":checked") ? "Ma mère ne connais pas son père" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#fullPrenomGrandPereMaternelle").val();
        const datebrithgpm = $("#grandperematernelinconnu").is(":checked") ? "Ma mère ne connais pas son père" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#birthDateGrandPereMaternelleCheckbox").is(":checked") ? "L'utilisateur refuse de répondre" : $("#birthDateGrandPereMaternelle").val();
        const brithgrandperematernelle = $("#grandperematernelinconnu").is(":checked") ? "Ma mère ne connais pas son père" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#userBirthGrandPereMaternelle").val();
        const decesgrandperematernelle = $("#grandperematernelinconnu").is(":checked") ? "Ma mère ne connais pas son père" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#grandfathermaternelleAliveCheckbox").is(":checked") ? "Le grand-père paternel est toujours vivant": $("#decesDateGrandPereMaternelle").val();
        const adresegrandperematernelle = $("#grandperematernelinconnu").is(":checked") ? "Ma mère ne connais pas son père" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#adresseGrandPereMaternelle").val();
        const metiergrandperematernelle = $("#grandperematernelinconnu").is(":checked") ? "Ma mère ne connais pas son père" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#noAnswerprofessiongrandperematernelle").is(":checked") ? "L'utilisateur refuse de répondre" : $("#professionactuellegrandperematernelle").val();
        const familyStructuresgrandpapamaternelle = $("#grandperematernelinconnu").is(":checked") ? "Ma mère ne connais pas son père" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#noAnswerStructureFamilleGRPM").is(":checked") ? "L'utilisateur refuse de répondre" : ($("#familyStructuregrandperematernelle").val() === "Autre" ? $("#otherfamilyStructuregrpm").val() : $("#familyStructuregrandperematernelle").val());
        const lieuximportgrdperematernelle = $("#grandperematernelinconnu").is(":checked") ? "Ma mère ne connais pas son père" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas pas sa maman" : $("#lieuximportgrandperematernelle").val() === "Oui" ? $("#precisezlieuximportgrandperematernelle").val() : $("#lieuximportgrandperematernelle").val();
        const nomgmm = $("#grandmerematernelleinconnu").is(":checked") ? "Ma mère ne connais pas sa mère" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#fullNameGrandMereMaternelle").val();
        const prenomgmm = $("#grandmerematernelleinconnu").is(":checked") ? "Ma mère ne connais pas sa mère" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#fullPrenomGrandMereMaternelle").val();
        const datebrithgmm = $("#grandmerematernelleinconnu").is(":checked") ? "Ma mère ne connais pas sa mère" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#birthDateGrandMereMaternelleCheckbox").is(":checked") ? "L'utilisateur refuse de répondre" : $("#birthDateGrandMereMaternelle").val();
        const brithgrandmerematernelle = $("#grandmerematernelleinconnu").is(":checked") ? "Ma mère ne connais pas sa mère" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#userBirthGrandMereMaternelle").val();
        const decesgrandmerematernelle = $("#grandmerematernelleinconnu").is(":checked") ? "Ma mère ne connais pas sa mère" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#grandmothermaternelleAliveCheckbox").is(":checked") ? "Le grand-père paternel est toujours vivant": $("#decesDateGrandMereMaternelle").val();
        const adresegrandmerematernelle = $("#grandmerematernelleinconnu").is(":checked") ? "Ma mère ne connais pas sa mère" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#adresseGrandMereMaternelle").val();
        const metiergrandmerematernelle = $("#grandmerematernelleinconnu").is(":checked") ? "Ma mère ne connais pas sa mère" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#noAnswerprofessiongrandmerematernelle").is(":checked") ? "L'utilisateur refuse de répondre" : $("#professionactuellegrandmerematernelle").val();
        const familyStructuresgrandmamamaternelle = $("#grandmerematernelleinconnu").is(":checked") ? "Ma mère ne connais pas sa mère" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas sa maman" : $("#noAnswerStructureFamilleGRMM").is(":checked") ? "L'utilisateur refuse de répondre" : ($("#familyStructuregrandmerematernelle").val() === "Autre" ? $("#otherfamilyStructuregrmm").val() : $("#familyStructuregrandmerematernelle").val());
        const lieuximportgrdmerematernelle = $("#grandmerematernelleinconnu").is(":checked") ? "Ma mère ne connais pas sa mère" : $("#motherinconnu").is(":checked") ? "L'utilisateur ne connais pas pas sa maman" : $("#lieuximportgrandmerematernelle").val() === "Oui" ? $("#precisezlieuximportgrandmerematernelle").val() : $("#lieuximportgrandmerematernelle").val();
        const zoomBirthPereMap = getMapZoom(birthMapPere);
        const zoomadressMapPere = getMapZoom(adressMapPere);
        const zoomBirthMereMap = getMapZoom(birthMapMere);
        const zoomadressMapMere = getMapZoom(adresseMapMere);
        const zoomBirthGrPPMap = getMapZoom(birthMapGrandPerePaternel);
        const zoomadressMapGrPP = getMapZoom(adresseMapGrandPerePaternel);
        const zoomBirthGrMPMap = getMapZoom(birthMapGrandMerePaternel);
        const zoomadressMapGrMP = getMapZoom(adresseMapGrandMerePaternel);
        const zoomBirthGrPMMap = getMapZoom(brithGrandPereMaternelle);
        const zoomadressMapGrPM = getMapZoom(adresseGrandPereMaternelle);
        const zoomBirthGrMMMap = getMapZoom(brithGrandMereMaternelle);
        const zoomadressMapGrMM = getMapZoom(adresseGrandMereMaternelle);

    // Vérifiez si tous les champs sont remplis
    if (
$("#fullName").val() === "" || $("#birthDate").val() === "" || $("input[name='userGender']:checked").val() === "" || $("#userAddress").val() === "" || $("#userBirth").val() === "" ||
nbfrruser === "" || nbsrruser === "" || raisonslieux === "" ||
familyStructures === "" || professionactuelle === "" || trajectoireSociales === "" || decespere === "" ||
metierpere === "" || familyStructurespapa === "" || lieuxsignipapa === "" || nbfresoepere  === "" || nbdemifresoepere  === "" ||
trajectoireSocialesPapa === "" || nommaman === "" || nompapa === "" || brithmmaman === "" || brithpapa === "" || nbfresoemere === "" ||
lieunaissancemere === "" || lieunaissancepere === "" || decesmere === "" || adressenaissancemere === "" || nbdemifresoemere === "" ||
metiermere === "" || familyStructuresmama === "" || lieuxresidencepere === "" ||
lieuxsignimama === "" || trajectoireSocialesMama === "" || inegalitesocialemaman === "" || inegalitesocialepapa === "" ||
nomgpp === "" || datebrithgpp === "" || brithgrandperepaternel === "" || decesgrandperepaternel === "" || nbfresoegrmerepat === "" ||
adressegrandperepaternel === "" || metiergrandperepaternel === "" || familyStructuresgrandpapapaternel === "" ||
lieuximportgrdperepaternel === "" || nomgmp === "" || datebrithgmp === "" ||
brithgrandmerepaternel === "" || decesgrandmerepaternel === "" || adressegrandmerepaternel === "" || nbdemifresoegrperepat === "" ||
metiergrandmerepaternel === "" || familyStructuresgrandmamapaternel === "" ||
lieuximportgrdmerepaternel === "" || nomgpm === "" || datebrithgpm === "" || brithgrandperematernelle === "" || decesgrandperematernelle === "" || 
adresegrandperematernelle === "" || metiergrandperematernelle === "" || familyStructuresgrandpapamaternelle === "" || nbfresoegrperepat  === "" ||
lieuximportgrdperematernelle === "" || nomgmm === "" ||
datebrithgmm === "" || brithgrandmerematernelle === "" || decesgrandmerematernelle === ""|| adresegrandmerematernelle === "" || nbdmfresoegrmerepat === "" ||
metiergrandmerematernelle === "" || familyStructuresgrandmamamaternelle === "" ||
lieuximportgrdmerematernelle === ""|| $("#fullPrenom").val() === "" || prenompapa === "" || prenommama === "" || 
prenomgpp === "" || prenomgmp === "" || prenomgpm === "" || prenomgmm === "" || nbfresoegrperemat === "" || nbdmfresoegrperemat === "" ||
nbfresoegrmeremat === "" || nbdmfresoegrmeremat  === ""
    ) {
        alert("Veuillez remplir tous les champs obligatoires.");
    } else {
        // Tous les champs sont remplis, vous pouvez envoyer les données au serveur
        const data = {
            nom_complet: $("#fullName").val(),
            prenom_user: $("#fullPrenom").val(),
            prenom_pere: prenompapa,
            prenom_mere: prenommama,
            date_de_naissance: $("#birthDate").val(),
            genre: $("input[name='userGender']:checked").val(),
            adresse_actuelle: $("#userAddress").val(),
            lieu_de_naissance: $("#userBirth").val(),
            nombre_freres_soeurs: nbfrruser,
            nombre_demi_freres_soeurs: nbsrruser,
            profession_actuelle: professionactuelle,
            structure_famille: familyStructures,
            raisons_lieux_marquants: raisonslieux,
            trajectoire_sociale: trajectoireSociales,
            nom_complet_pere: nompapa,
            date_de_naissance_Pere: brithpapa,
            lieu_naissance_pere: lieunaissancepere,
            date_deces_pere: decespere,
            lieu_residence_pere: lieuxresidencepere,
            profession_pere: metierpere,
            nbr_frsoeur_pere: nbfresoepere,
            nbr_frsoeur_mere: nbfresoemere,
            nbr_frsoeur_grpp: nbfresoegrperepat,
            nbr_demi_frsoeur_pere: nbdemifresoepere,
            nbr_demi_frsoeur_mere: nbdemifresoemere,
            nbr_demi_frsoeur_grpp: nbdemifresoegrperepat,
            nbr_frsoeur_grmp: nbfresoegrmerepat,
            nbr_demi_frsoeur_grmp: nbdmfresoegrmerepat,
            nbr_frsoeur_grpm: nbfresoegrperemat,
            nbr_demi_frsoeur_grpm: nbdmfresoegrperemat,
            nbr_frsoeur_grmm: nbfresoegrmeremat,
            nbr_demi_frsoeur_grmm: nbdmfresoegrmeremat,
            structure_familiale_pere: familyStructurespapa,
            lieux_significatifs_pere:lieuxsignipapa,
            trajectoire_sociale_pere: trajectoireSocialesPapa,
            inegalite_sociale_pere: inegalitesocialepapa,
            nom_complet_mere: nommaman,
            date_de_naissance_Mere: brithmmaman,
            lieu_naissance_Mere: lieunaissancemere,
            date_deces_mere: decesmere,
            adresse_mere: adressenaissancemere,
            profession_mere: metiermere,
            structure_familiale_mere: familyStructuresmama,
            lieux_significatifs_mere: lieuxsignimama,
            trajectoire_sociale_mere: trajectoireSocialesMama,
            inegalite_sociale_mere: inegalitesocialemaman,
            nom_grand_pere_paternel: nomgpp,
            prenom_grand_pere_paternel : prenomgpp,
            date_naissance_grpp: datebrithgpp,
            lieu_naissance_grpp: brithgrandperepaternel,
            date_deces_grpp: decesgrandperepaternel,
            adresse_grand_pere_paternel:adressegrandperepaternel,
            profession_grand_pere_paternel: metiergrandperepaternel,
            structure_familiale_grpp: familyStructuresgrandpapapaternel,
            lieux_importants_grpp: lieuximportgrdperepaternel,
            nom_grand_mere_paternel: nomgmp,
            prenom_grand_mere_paternel: prenomgmp,
            date_naissance_grmp: datebrithgmp,
            lieu_naissance_grmp: brithgrandmerepaternel,
            date_deces_grmp: decesgrandmerepaternel,
            adresse_grand_mere_paternel: adressegrandmerepaternel,
            profession_grand_mere_paternel: metiergrandmerepaternel,
            structure_familiale_grmp: familyStructuresgrandmamapaternel,
            lieux_importants_grmp: lieuximportgrdmerepaternel,
            nom_grand_pere_maternelle: nomgpm,
            prenom_grand_pere_maternel: prenomgpm,
            date_naissance_grpm: datebrithgpm,
            lieu_naissance_grpm: brithgrandperematernelle,
            date_deces_grpm: decesgrandperematernelle,
            adresse_grand_pere_maternelle: adresegrandperematernelle,
            profession_grand_pere_maternelle: metiergrandperematernelle,
            structure_familiale_grpm: familyStructuresgrandpapamaternelle,
            lieux_importants_grpm:lieuximportgrdperematernelle,
            nom_grand_mere_maternelle: nomgmm,
            prenom_grand_mere_maternelle: prenomgmm,
            date_naissance_grmm: datebrithgmm,
            lieu_naissance_grmm: brithgrandmerematernelle, 
            date_deces_grmm: decesgrandmerematernelle,
            adresse_grand_mere_maternelle: adresegrandmerematernelle,
            profession_grand_mere_maternelle: metiergrandmerematernelle,
            structure_familiale_grmm: familyStructuresgrandmamamaternelle,
            lieux_importants_grmm:lieuximportgrdmerematernelle,
            niveau_richesse_grpp: nvrichegrpp,
            niveau_richesse_grmp: nvrichegrmp,
            niveau_richesse_grpm: nvrichegrpm,
            niveau_richesse_grmm: nvrichegrmm,
            zoom_carte_naissance_pere: zoomBirthPereMap,
            zoom_carte_adresse_pere: zoomadressMapPere,
            zoom_carte_naissance_mere: zoomBirthMereMap,
            zoom_carte_adresse_mere: zoomadressMapMere,
            zoom_carte_naissance_grpp: zoomBirthGrPPMap,
            zoom_carte_adresse_grpp: zoomadressMapGrPP,
            zoom_carte_naissance_grmp: zoomBirthGrMPMap,
            zoom_carte_adresse_grmp: zoomadressMapGrMP,
            zoom_carte_naissance_grpm: zoomBirthGrPMMap,
            zoom_carte_adresse_grpm: zoomadressMapGrPM,
            zoom_carte_naissance_grmm: zoomBirthGrMMMap,
            zoom_carte_adresse_grmm: zoomadressMapGrMM,
        };
        // Envoi des données au serveur via AJAX
        $.ajax({
            url: "../views/submit.php",
            method: "POST",
            data: data,
            success: function (response) {
                // Affichez la réponse du serveur (message de remerciement)
                alert(response);
                // Redirection vers la page de garde après 2 secondes
                setTimeout(function () {
                    window.location.href = "/";
                }, 20);
            },
            error: function (xhr, status, error) {
                alert("Une erreur s'est produite : " + error);
            },
        });
    }
});
});