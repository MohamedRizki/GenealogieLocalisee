/**
 * Ce script JavaScript a été développé par Mohamed RIZKI & Marie GRARD.
 *
 * Ce fichier JavaScript contient les fonctions nécessaires pour créer et mettre à jour des lignes de connexion 
 * visuelles entre différents bouttons de notre formulaire. Ces lignes de connexion sont utilisées pour illustrer
 * les relations ou les liens entre les éléments, comme dans un arbre généalogique ou un diagramme de flux.
 *
 * Fonctions principales :
 * - `connectElements` : Crée une ligne entre deux éléments en calculant la distance, l'angle, et en appliquant 
 *   les styles CSS nécessaires pour positionner correctement la ligne.
 * - `updateConnections` : Met à jour les connexions en recalculant et en redessinant les lignes en fonction des 
 *   modifications du DOM, telles que le redimensionnement de la fenêtre ou les changements d'état des éléments.
 *
 * Le script gère également les événements de changement sur les cases à cocher pour mettre à jour les connexions 
 * en conséquence, assurant ainsi que le visuel reste cohérent avec l'état actuel des éléments interactifs.
 */

// Fonction pour créer une ligne entre deux éléments
function connectElements(lineContainer, startElem, endElem) {
  const lineElem = document.createElement("div");
  lineElem.className = "line";

  // Obtenez les positions des éléments
  const startRect = startElem.getBoundingClientRect();
  const endRect = endElem.getBoundingClientRect();

  // Déterminez les points de départ et de fin
  const startX = startRect.left + window.pageXOffset + (endRect.left > startRect.right ? startRect.width : 0);
  const startY = startRect.top + startRect.height / 2 + window.pageYOffset;
  const endX = endRect.left + window.pageXOffset - (endRect.left > startRect.right ? 0 : endRect.width);
  const endY = endRect.top + endRect.height / 2 + window.pageYOffset;

  // Calculez la distance et l'angle entre les deux points
  const deltaX = endX - startX;
  const deltaY = endY - startY;
  const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

  // Appliquez les styles à la ligne
  lineElem.style.width = `${length}px`;
  lineElem.style.top = `${startY}px`;
  lineElem.style.left = `${startX}px`;
  lineElem.style.transform = `rotate(${angle}deg)`;

  // Ajoutez la ligne au conteneur
  lineContainer.appendChild(lineElem);
}

// Fonction pour mettre à jour les connexions lors du redimensionnement/zoom
function updateConnections() {
  const lineContainer = document.querySelector(".square-container"); // Le conteneur doit être relatif

  // Supprimez les anciennes lignes avant de créer de nouvelles
  lineContainer.querySelectorAll('.line').forEach(function(line) {
    line.remove();
  });

  requestAnimationFrame(() => {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const button4 = document.getElementById("button4");
    const button5 = document.getElementById("button5");
    const button6 = document.getElementById("button6");
    const button7 = document.getElementById("button7");
    const motherInconnuCheckbox = document.getElementById("motherinconnu");
    const fatherInconnuCheckbox = document.getElementById("fatherinconnu");
    const grandPerePaternelCheckbox = document.getElementById("grandperepaternelinconnu");
    const grandMerePaternelleCheckbox = document.getElementById("grandmerepaternelinconnu");

    const grandPereMaternelCheckbox = document.getElementById("grandperematernelinconnu");
    const grandMereMaternelleCheckbox = document.getElementById("grandmerematernelleinconnu");

    if (button1 && button2) connectElements(lineContainer, button1, button2);
    if (button1 && button3) connectElements(lineContainer, button1, button3);
    if (button2 && button4 && !fatherInconnuCheckbox.checked && !grandPerePaternelCheckbox.checked) connectElements(lineContainer, button2, button4);
    if (button2 && button5 && !fatherInconnuCheckbox.checked && !grandMerePaternelleCheckbox.checked) connectElements(lineContainer, button2, button5);
    if (button3 && button6 && !motherInconnuCheckbox.checked && !grandPereMaternelCheckbox.checked) connectElements(lineContainer, button3, button6);
    if (button3 && button7 && !motherInconnuCheckbox.checked && !grandMereMaternelleCheckbox.checked) connectElements(lineContainer, button3, button7);
  });
}

// Ajoutez un gestionnaire d'événement "change" pour toutes les cases à cocher
const checkboxes = [
  "fatherinconnu", 
  "motherinconnu", 
  "grandperepaternelinconnu", 
  "grandmerepaternelinconnu",
  "grandperematernelinconnu",
  "grandmerematernelleinconnu"
];

checkboxes.forEach(function(id) {
  const checkbox = document.getElementById(id);
  if (checkbox) {
    checkbox.addEventListener("change", updateConnections);
  }
});

// Lorsque le DOM est entièrement chargé
window.addEventListener("DOMContentLoaded", (event) => {
  updateConnections(); // Établissez des connexions initiales

  // Mettez à jour les connexions lorsque la fenêtre est redimensionnée
  window.addEventListener('resize', updateConnections);
});