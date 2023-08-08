/**
 * 2C = Two of Clubs (Trévoles)
 * 2D = Two of Clubs (Diamonds)
 * 2H = Two of Clubs (Hearts)
 * 2S = Two of Clubs (Spades)
 * 
 * 2-10 y J,Q,K,A
 * .png
 */

let deck = [];
const palosBaraja = ['C','D','H','S'];
const specialCarts = ['J','Q','K','A'];


const createDeck = (palosBaraja, specialCarts) => {

    let tempDeck = [];
    let i = 1;

    for (let j = 0; j < palosBaraja.length; j++ ) {
       // console.log (palosBaraja[j]);
        do {
            tempDeck.push(`${i}${palosBaraja[j]}.png`);
            i++;
        } while (i < 11)

        for (let k = 0; k < 4; k++ ) {
            tempDeck.push(`${specialCarts[k]}${palosBaraja[j]}.png`);
        }

        i = 1;
    }

    return tempDeck
}

    //console.log(deck.push(createDeck(palosBaraja, specialCarts)));

deck = createDeck(palosBaraja, specialCarts);
console.log (deck);

const pedirCarta = () => {

    
}