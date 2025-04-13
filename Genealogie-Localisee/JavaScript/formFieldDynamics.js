/**
 * Ce script JavaScript a été développé par Mohamed RIZKI & Marie GRARD.
 *
 * Ce fichier JavaScript contient des fonctions pour gérer la dynamique des champs de formulaire en fonction des choix de l'utilisateur.
 * - La fonction `toggleFieldBasedOnCheckbox` masque ou affiche un champ de saisie en fonction de l'état d'une case à cocher. 
 *   Elle est utilisée pour masquer des champs lorsque l'utilisateur opte pour "Je ne souhaite pas répondre" et pour gérer la 
 *   nécessité des champs (obligatoires ou non) en fonction de cette sélection.
 *
 * - La fonction `toggleFieldBasedOnSelect` contrôle l'affichage d'un champ de saisie supplémentaire quand l'utilisateur 
 *   sélectionne "Autre" dans un menu déroulant. Cela permet de fournir des détails supplémentaires pour une réponse qui n'est 
 *   pas couverte par les options standard.
 *
 * Ces fonctions sont appliquées à différents champs de formulaire, tels que les informations sur la structure familiale, 
 * les lieux significatifs, les professions, et d'autres éléments pertinents. Elles visent à rendre le formulaire plus 
 * interactif et adapté aux besoins spécifiques de l'utilisateur, tout en assurant la clarté et la pertinence des informations recueillies.
 */
 
// Fonction pour gérer l'affichage et la nécessité des champs en fonction d'une case à cocher
function toggleFieldBasedOnCheckbox(checkboxSelector, fieldSelector, shouldBeRequired = true) {
    $(checkboxSelector).change(function() {
        if ($(this).is(":checked")) {
            $(fieldSelector).hide();
            if (!shouldBeRequired) $(fieldSelector).removeAttr('required');
        } else {
            $(fieldSelector).show();
            if (shouldBeRequired) $(fieldSelector).attr('required', 'required');
        }
    });
}

// Fonction pour gérer l'affichage d'un champ de saisie supplémentaire basé sur une valeur spécifique d'un champ select
function toggleFieldBasedOnSelect(selectSelector, fieldSelector, toggleValue) {
    $(selectSelector).change(function() {
        if ($(this).val() === toggleValue) {
            $(fieldSelector).show();
        } else {
            $(fieldSelector).hide();
        }
    });
}

// Application de la logique de basculement pour la structure familiale
toggleFieldBasedOnSelect("#familyStructure", "#otherfamilyStructure", "Autre");
toggleFieldBasedOnSelect("#familyStructurepere", "#otherfamilyStructurep", "Autre");
toggleFieldBasedOnSelect("#familyStructuremere", "#otherfamilyStructurem", "Autre");
toggleFieldBasedOnSelect("#familyStructuregrandperepaternel", "#otherfamilyStructuregrp", "Autre");
toggleFieldBasedOnSelect("#familyStructuregrandmerepaternel", "#otherfamilyStructuregrm", "Autre");
toggleFieldBasedOnSelect("#familyStructuregrandperematernelle", "#otherfamilyStructuregrpm", "Autre");
toggleFieldBasedOnSelect("#familyStructuregrandmerematernelle", "#otherfamilyStructuregrmm", "Autre");

// Application de la logique de basculement pour des champs spécifiques quand "Oui" est sélectionné
toggleFieldBasedOnSelect("#lieuxSignificatifsPere", "#precisezlieuxsignificatif", "Oui");
toggleFieldBasedOnSelect("#lieuxSignificatifsMere", "#precisezlieuxsignificatifmere", "Oui");
toggleFieldBasedOnSelect("#lieuxmarquants", "#precisezlieuxmarquants", "Oui");
toggleFieldBasedOnSelect("#lieuximportgrandperepaternel", "#precisezlieuximportgrandperepaternel", "Oui");
toggleFieldBasedOnSelect("#lieuximportgrandmerepaternel", "#precisezlieuximportgrandmerepaternel", "Oui");
toggleFieldBasedOnSelect("#lieuximportgrandperematernelle", "#precisezlieuximportgrandperematernelle", "Oui");
toggleFieldBasedOnSelect("#lieuximportgrandmerematernelle", "#precisezlieuximportgrandmerematernelle", "Oui");

// Application de la logique de basculement pour la profession et d'autres champs basés sur une case à cocher
toggleFieldBasedOnCheckbox("#noAnswer", "#professionactuelle");
toggleFieldBasedOnCheckbox("#fatherAliveCheckbox", "#decesDatePere", false);
toggleFieldBasedOnCheckbox("#noAnswerprofessionpere", "#professionactuellepere");
toggleFieldBasedOnCheckbox("#noAnswerTrajectoireSocialePere", "#trajectoireSocialePere");
toggleFieldBasedOnCheckbox("#motherAliveCheckbox", "#decesDateMere", false);
toggleFieldBasedOnCheckbox("#noAnswerprofessionmere", "#professionactuellemere");
toggleFieldBasedOnCheckbox("#noAnswerTrajectoireSocialeMere", "#trajectoireSocialeMere");
toggleFieldBasedOnCheckbox("#grandfatherpaternelAliveCheckbox", "#decesDateGrandPerePaternel", false);
toggleFieldBasedOnCheckbox("#noAnswerprofessiongrandperepaternel", "#professionactuellegrandperepaternel");
toggleFieldBasedOnCheckbox("#grandmotherpaternelAliveCheckbox", "#decesDateGrandMerePaternel", false);
toggleFieldBasedOnCheckbox("#noAnswerprofessiongrandmerepaternel", "#professionactuellegrandmerepaternel");
toggleFieldBasedOnCheckbox("#grandfathermaternelleAliveCheckbox", "#decesDateGrandPereMaternelle", false);
toggleFieldBasedOnCheckbox("#noAnswerprofessiongrandperematernelle", "#professionactuellegrandperematernelle");
toggleFieldBasedOnCheckbox("#grandmothermaternelleAliveCheckbox", "#decesDateGrandMereMaternelle", false);
toggleFieldBasedOnCheckbox("#noAnswerprofessiongrandmerematernelle", "#professionactuellegrandmerematernelle");
toggleFieldBasedOnCheckbox("#birthDatePereCheckbox", "#birthDatePere", false);
toggleFieldBasedOnCheckbox("#birthDateMereCheckbox", "#birthDateMere", false);
toggleFieldBasedOnCheckbox("#birthDateGrandPerePaternelleAliveCheckbox", "#birthDateGrandPerePaternelle", false);
toggleFieldBasedOnCheckbox("#birthDateGrandMerePaternelleAliveCheckbox", "#birthDateGrandMerePaternelle", false);
toggleFieldBasedOnCheckbox("#birthDateGrandPereMaternelleCheckbox", "#birthDateGrandPereMaternelle", false);
toggleFieldBasedOnCheckbox("#birthDateGrandMereMaternelleCheckbox", "#birthDateGrandMereMaternelle", false);

// Application de la logique de basculement pour le nombre de frères et sœurs basé sur une case à cocher
toggleFieldBasedOnCheckbox("#noAnswernbfrer", "#nbfrere");
toggleFieldBasedOnCheckbox("#noAnswernbsoeur", "#nbsoeur");
toggleFieldBasedOnCheckbox("#noAnswernbfrerepere", "#nbfrerepere");
toggleFieldBasedOnCheckbox("#noAnswernbfreregrandperepaternel", "#nbfreregrandperepaternel");
toggleFieldBasedOnCheckbox("#noAnswernbfreregrandmerepaternel", "#nbfreregrandmerepaternel");
toggleFieldBasedOnCheckbox("#noAnswernbfreregrandperematernel", "#nbfreregrandperematernel");
toggleFieldBasedOnCheckbox("#noAnswernbfreregrandmerematernel", "#nbfreregrandmerematernel");
toggleFieldBasedOnCheckbox("#noAnswernbdmfreregrandmerematernel", "#nbdmfreregrandmerematernel");
toggleFieldBasedOnCheckbox("#noAnswernbdemifreregrandperematernel", "#nbdemifreregrandperematernel");
toggleFieldBasedOnCheckbox("#noAnswernbdmfreregrandmerepaternel", "#nbdmfreregrandmerepaternel");
toggleFieldBasedOnCheckbox("#noAnswernbdemifreregrandperepaternel", "#nbdemifreregrandperepaternel");
toggleFieldBasedOnCheckbox("#noAnswernbfreremere", "#nbfreremere");
toggleFieldBasedOnCheckbox("#noAnswernbdemifreremere", "#nbdemifreremere");
toggleFieldBasedOnCheckbox("#noAnswernbdemifreresoeurpere", "#nbdemifreresoeurpere");
toggleFieldBasedOnCheckbox("#noAnswerniveauderichesseprpp", "#niveauderichesseprpp");
toggleFieldBasedOnCheckbox("#noAnswerniveauderichesseprmp", "#niveauderichesseprmp");
toggleFieldBasedOnCheckbox("#noAnswerniveauderichesseprpm", "#niveauderichesseprpm");
toggleFieldBasedOnCheckbox("#noAnswerniveauderichesseprmm", "#niveauderichesseprmm");
toggleFieldBasedOnCheckbox("#noAnswerinegalitesocialeMere", "#inegalitesocialeMere");
toggleFieldBasedOnCheckbox("#noAnswerinegalitesocialePere", "#inegalitesocialePere");
toggleFieldBasedOnCheckbox("#noAnswerStructureFamilleGRMM", "#familyStructuregrandmerematernelle");
toggleFieldBasedOnCheckbox("#noAnswerStructureFamilleGRPM", "#familyStructuregrandperematernelle");
toggleFieldBasedOnCheckbox("#noAnswerStructureFamilleGRP", "#familyStructuregrandperepaternel");
toggleFieldBasedOnCheckbox("#noAnswerStructureFamilleGRM", "#familyStructuregrandmerepaternel");
toggleFieldBasedOnCheckbox("#noAnswerStructureFamille", "#familyStructure");
toggleFieldBasedOnCheckbox("#noAnswerTrajectoireSociale", "#trajectoireSociale");
toggleFieldBasedOnCheckbox("#noAnswerStructureFamilleP", "#familyStructurepere");
toggleFieldBasedOnCheckbox("#noAnswerStructureFamilleM", "#familyStructuremere");