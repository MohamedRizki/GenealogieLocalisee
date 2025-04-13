/**
 * Ce script JavaScript a été développé par Mohamed RIZKI & Marie GRARD.
 *
 * Ce code est conçu pour afficher une alerte lorsque l'utilisateur clique sur l'option permettant
 * d'estimer le niveau social de la grand-mère maternelle. L'alerte sert à informer l'utilisateur que 
 * le choix d'un niveau pour un grand-parent spécifique rend ce niveau indisponible pour les autres 
 * grands-parents. Cela est particulièrement pertinent pour une échelle où 4 représente le niveau social 
 * le plus élevé et 1 le moins élevé. L'objectif est de s'assurer que l'utilisateur comprend l'impact 
 * de son choix sur les options disponibles pour les autres grands-parents dans le cadre de l'évaluation 
 * de leur niveau social respectif.
 */
    document.addEventListener('DOMContentLoaded', function () {
        // Liste des IDs de vos éléments select
        var selectIds = ['niveauderichesseprmp', 'niveauderichesseprpp', 'niveauderichesseprmm', 'niveauderichesseprpm'];
        var hasAlerted = false; 
        // Pour éviter de répéter l'alerte pour chaque select
        selectIds.forEach(function(id) {
            var selectElement = document.getElementById(id);
            selectElement.addEventListener('mousedown', function (event) {
                if (!hasAlerted) {
                    alert("Attention: Il s'agit de classer les grands-parents les uns par rapport aux autres. Si vous choisissez un niveau, il ne sera donc plus disponible pour les autres options.");
                    hasAlerted = true;
                }
            });
        });
    });