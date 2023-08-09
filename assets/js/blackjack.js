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
const notNumCarts = ['J','Q','K','A'];

// Create a new deck
const createDeck = () => {

    for ( let i = 2; i <= 10; i++ ) {
        
        for ( let palo of palosBaraja ) {
           
            deck.push( `${i}${palo}.png` );
        }
   }

   for ( palo of palosBaraja ) {
           
        for ( let notNum of notNumCarts ) {
   
            deck.push( `${notNum}${palo}.png` );
        }
    }
    //Returns a shuffled copy of the deck
    deck = _.shuffle( deck );
    // console.log( deck );
    return deck;
} 

createDeck();


const pedirCarta = () => {  

    if (deck.length === 0) {
        throw 'No quedan cartas en el deck paayo ==, game over';
    }

    const carta = deck.pop();
    // console.log( carta );
    // console.log( deck );
    return carta;
}

let carta = pedirCarta();
console.log( carta );

const valorCarta = ( carta ) => {

    // string carts exception of 7 caract length '10D.png'
    // carta.charAt(0) === carta[0]
    let valor = (carta.length === 6 ) ? carta.charAt(0) : carta.substring(0,2);
    // === '10' 'J' || 'Q' || 'K' || 'A'

        switch ( valor ) {

            case '10':
                valor = 10;
                break;

            case 'J':
                valor = 10;
                break;

            case 'Q':
                valor = 11;
                break;

            case 'K':
                valor = 12;
                break;

            case 'A':
                valor = 1;
                break;
        }

    valor *= 1;     // Convert character (values 2 to 9) to number type
    return valor;
}

carta = valorCarta ( carta );
console.log( carta );


/* const turnoJugador = () => {} */