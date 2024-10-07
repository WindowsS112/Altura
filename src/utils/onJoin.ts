(function() {
    'use strict';

    // Sla de originele WebSocket constructor op
    const originalWebSocket = window.WebSocket;

    // Maak een proxy voor de WebSocket
    window.WebSocket = new Proxy(originalWebSocket, {
        construct(target, args) {
            const ws = new target(...args as [string, ...any[]]);

            // Log wanneer de verbinding is geopend
            ws.addEventListener('open', function() {
                let message = '';
                // Controleer of de URL overeenkomt met "wss://game-eu-9.vanis.io/5001"
                if (args[0] === "wss://game-eu-9.vanis.io/5001") {
                    console.log('Je bent FFA 1 gejoined Gefeliciteerd!');
                    message = 'You joined FFA 1';
                } else if (args[0] === "wss://game-eu-9.vanis.io/5002") {
                    console.log('You joined Instant 1');
                    message = 'You joined Instant 1';
                } else if (args[0] === "wss://game-eu-9.vanis.io/5003") {
                    console.log('You joined Gigasplit 1');
                    message = 'You joined Gigasplit 1';
                } else if (args[0] === "wss://game-eu-9.vanis.io/5004") {
                    console.log('Je bent Gigasplit 2 gejoined');
                    message = 'You joined Gigasplit 2';
                } else if (args[0] === "wss://game-eu-9.vanis.io/5005") {
                console.log('Je bent Terasplit 1 gejoined');
                    message = 'You joined Terasplit 1';
                } else if (args[0] === "wss://game-eu-9.vanis.io/5006") {
                    console.log('Je bent Megasplit 1 gejoined');
                    message = 'You joined Megasplit 1';
                } if (message) {
                    showPopup(message);
                }

                if (args[0] === "wss://game-eu-9.vanis.io/5001") {
                    
                }
            });
            // Handle errors
            ws.addEventListener('error', function(event) {
                console.error('WebSocket error:', event);
            });

            // Handle connection close
            ws.addEventListener('close', function(event) {
                console.log('WebSocket connection closed:', event);
            });

            return ws;
        }
    });

    // Functie om de popup te tonen
    function showPopup(message: string) {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.textContent = message;
        document.body.appendChild(popup);

        // Verwijder de popup na 1.5 seconden
        setTimeout(() => {
            popup.remove();
        }, 1000);
    }

})();

export {}; // Voeg een lege export toe om het script als module te markeren

function showPopup(message: string) {
    throw new Error("Function not implemented.");
}
