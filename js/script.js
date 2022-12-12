// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            titolo: "Mamma mia che bellezza!",
            classeMainTitle: "title text-primary text-center pt-3 "
        }
    }
}).mount('#app')