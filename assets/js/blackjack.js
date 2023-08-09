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

    for (let i = 2; i <= 10; i++) {
        
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
    console.log(deck);
    return deck;
} 

createDeck();


const pedirCarta = () => {  
    console.log (deck);

   
}