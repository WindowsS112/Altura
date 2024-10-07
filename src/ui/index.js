import { addSkinElement, updateSkinElement } from '../game/skins.js';


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');

    // Verwijder elementen op basis van meerdere class-namen
    const classesToRemove = ['.social-container', '.slide-inner'];
    removeElements(classesToRemove);

    // Verwijder elementen op basis van ID
    const idsToRemove = ['#vanis-io_300x250', '#vanis-io_728x90'];
    removeElements(idsToRemove);

    // Definieer de class mappings
    const classMappings = [
        { selectors: ['.tab'], className: 'new-tabs' },
        { selectors: ['.tab[data-v-5190ae12]:not(:last-child)'], className: 'new-border' },
        { selectors: ['.fade-box'], className: 'new-fade-box' },
        { selectors: ['.server-list'], className: 'new-server-list' },
        { selectors: ['.progress-striped > .progress-bar[data-v-5f2d6d72]'], className: 'new-progress-striped' },
        { selectors: ['.selected[data-v-2eade0fe]'], className: 'new-activeskin' },
        { selectors: ['.tab-menu .tab[data-v-752a3ab7]:not(:last-child)'], className: 'new-tabs-region' },
        // Voeg hier meer mappings toe
    ];

    // Pas de classes toe
    applyClasses(classMappings);

    // Verwijder specifieke div met data-v-5190ae12 en tekst "Advertisement"
    document.querySelectorAll('div[data-v-5190ae12][style="text-align: center; height: 286px;"]').forEach(parentDiv => {
        const childDiv = parentDiv.querySelector('div[data-v-5190ae12][style="padding: 4px;"]');
        if (childDiv && childDiv.textContent.includes('Advertisement')) {
            parentDiv.remove();
        }
    });

    // Functie om elementen toe te voegen
function addElement(parentSelector, elementTag, attributes, innerHTML) {
    const parent = document.querySelector(parentSelector);
    if (parent) {
        const newElement = document.createElement(elementTag);
        for (const key in attributes) {
            newElement.setAttribute(key, attributes[key]);
        }
        newElement.innerHTML = innerHTML;
        if (parent.firstChild) {
            parent.insertBefore(newElement, parent.firstChild);
        } else {
            parent.appendChild(newElement);
        }
    }
}




// Functie om elementen te verwijderen
function removeElements(selectors) {
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => element.remove());
    });
}

// Functie om CSS-classes toe te voegen of te verwijderen
function modifyElements(selectors, className, action) {
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (action === 'add') {
                element.classList.add(className);
            } else if (action === 'remove') {
                element.classList.remove(className);
            }
        });
    });
}

// Functie om CSS-classes toe te voegen aan meerdere elementen
function applyClasses(classMappings) {
    classMappings.forEach(mapping => {
        modifyElements(mapping.selectors, mapping.className, 'add');
    });
}
});