/**
 * Ce script JavaScript a été développé par Mohamed RIZKI & Marie GRARD.
 *
 * Cette fonction, nommée confirmAnnulation, est conçue pour gérer les cas où un utilisateur envisage d'annuler 
 * le remplissage d'un formulaire. Lorsqu'elle est invoquée, elle affiche une boîte de dialogue de confirmation 
 * demandant à l'utilisateur de confirmer son intention d'annuler le formulaire. Si l'utilisateur choisit "Oui", 
 * il est alors automatiquement redirigé vers la page d'accueil du site. En revanche, si l'utilisateur sélectionne 
 * "Non", la boîte de dialogue se ferme, lui permettant de rester sur la page actuelle et de continuer à interagir 
 * avec le formulaire ou d'autres éléments de la page. Cette fonction assure ainsi une gestion sécurisée de l'annulation 
 * potentielle de l'entrée de données par l'utilisateur, en offrant une option de confirmation avant de prendre une action définitive.
 */
function confirmAnnulation() {
    var confirmation = confirm("Est-ce que vous voulez vraiment annuler ?");
    if (confirmation) {
        // Si l'utilisateur clique sur "OUI", redirigez-le vers la page de garde
        location.href = '/';
    }
    // Si l'utilisateur clique sur "NON", rien ne se passe et il reste sur la page actuelle
}