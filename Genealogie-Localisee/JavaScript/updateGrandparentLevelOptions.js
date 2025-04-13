/**
 * Ce script JavaScript a été développé par Mohamed RIZKI & Marie GRARD.
 *
 * Ce script JavaScript est conçu pour gérer la mise à jour dynamique des options dans un ensemble de listes déroulantes. 
 * Chaque liste représente le niveau social de richesse d'un grand-parent (paternel ou maternel) sur une échelle de 1 à 4.
 *
 * Fonctionnalité principale :
 * - La fonction `mettreAJourLesOptions` ajuste les options disponibles dans chaque liste déroulante en fonction des 
 *   choix déjà effectués dans les autres. Cela garantit qu'un niveau social sélectionné pour un grand-parent n'est 
 *   plus disponible pour les autres, évitant ainsi les doublons dans l'évaluation.
 *
 * Le script s'applique aux listes déroulantes identifiées par leur ID, qui commencent par "niveauderichesse". Des 
 * écouteurs d'événements sont ajoutés à chaque liste pour déclencher la mise à jour des options lorsqu'une sélection 
 * est modifiée. Cette approche assure une interaction utilisateur cohérente et empêche les conflits dans la sélection 
 * des niveaux sociaux pour les différents grands-parents.
 */

function mettreAJourLesOptions() {
    var valeurGrandPerePat = document.getElementById('niveauderichesseprpp').value;
    var valeurGrandMerePat = document.getElementById('niveauderichesseprmp').value;
    var valeurGrandPereMat = document.getElementById('niveauderichesseprpm').value;
    var valeurGrandMereMat = document.getElementById('niveauderichesseprmm').value;

    var valeursSelectionnees = [valeurGrandPerePat, valeurGrandMerePat, valeurGrandPereMat, valeurGrandMereMat];

    // Obtenir toutes les options possibles (1 à 4)
    var toutesLesOptions = ['1', '2', '3', '4'];

    // Parcourir toutes les listes déroulantes
    document.querySelectorAll('select[id^="niveauderichesse"]').forEach(function(select) {
        // Conserver la valeur actuelle sélectionnée
        var valeurActuelle = select.value;

        // Mettre à jour les options de chaque liste
        toutesLesOptions.forEach(function(optionValue) {
            var optionExistante = Array.from(select.options).find(o => o.value === optionValue);
            var estSelectionneeAilleurs = valeursSelectionnees.includes(optionValue) && optionValue !== valeurActuelle;

            if (!optionExistante && !estSelectionneeAilleurs) {
                // Ajouter l'option si elle n'existe pas et n'est pas sélectionnée ailleurs
                select.appendChild(new Option(optionValue, optionValue));
            } else if (optionExistante && estSelectionneeAilleurs) {
                // Supprimer l'option si elle est sélectionnée ailleurs
                optionExistante.remove();
            }
        });
    });
}

// Ajouter des écouteurs d'événements pour détecter les changements
document.getElementById('niveauderichesseprpp').addEventListener('change', mettreAJourLesOptions);
document.getElementById('niveauderichesseprmp').addEventListener('change', mettreAJourLesOptions);
document.getElementById('niveauderichesseprpm').addEventListener('change', mettreAJourLesOptions);
document.getElementById('niveauderichesseprmm').addEventListener('change', mettreAJourLesOptions);