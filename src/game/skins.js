// Functie om een skin-element toe te voegen
function addSkinElement(parentSelector, elementTag, attributes) {
    const parent = document.querySelector(parentSelector);
    if (parent) {
        const newElement = document.createElement(elementTag);
        for (const key in attributes) {
            newElement.setAttribute(key, attributes[key]);
        }
        updateSkinElement(newElement);
        if (parent.firstChild) {
            parent.insertBefore(newElement, parent.firstChild);
        } else {
            parent.appendChild(newElement);
        }
        console.log(`Added new skin element`, newElement);
    } else {
        console.log(`Parent element not found for selector: ${parentSelector}`);
    }
}

// Functie om het skin-element bij te werken
function updateSkinElement(element) {
    const skins = JSON.parse(localStorage.getItem('skins'));
    const selectedSkinIndex = +localStorage.getItem('selectedSkinIndex');
    const skinUrl = skins[selectedSkinIndex];
    element.style.backgroundImage = `url(${skinUrl})`;
    console.log(`Updated skin element with URL: ${skinUrl}`);
}

// Functie om de initiële setup uit te voeren
function setupSkinElement() {
    console.log('Running setupSkinElement');
    // Verwijder bestaande skin-elementen om duplicaten te voorkomen
    const existingSkinElement = document.querySelector('.skin-div');
    if (existingSkinElement) {
        existingSkinElement.remove();
        console.log('Removed existing skin element');
    }
    addSkinElement('#player-data', 'div', { class: 'skin-div flashing-skin-div' });
}


// Voer de initiële setup uit bij het laden van de pagina
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    setupSkinElement();

    // Voeg een MutationObserver toe om te luisteren naar class veranderingen
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target;
                if (target.classList.contains('selected')) {
                    console.log('Class "selected" added to img');
                    setupSkinElement();
                }
            }
        }
    });

    // Observeer alle img elementen met data attribute data-v-2eade0fe
    const imgElements = document.querySelectorAll('img[data-v-2eade0fe]');
    imgElements.forEach(img => {
        observer.observe(img, { attributes: true });
    });
});

// Zorg ervoor dat setupSkinElement beschikbaar is in de globale scope
window.setupSkinElement = setupSkinElement;