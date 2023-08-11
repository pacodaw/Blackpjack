/**
 * 2C = Two of Clubs (Trévoles)
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 * 
 * 2-10 y J,Q,K,A   J,Q,K = 10,  A = 1 (optional = 11 not implemented)
 * .png
 */

let deck = [];
const palosBaraja = ['C','D','H','S'];  //palo is suit
const courtCards = ['J','Q','K','A'];   // figuras is court

// Refs del HTML
const btnNuevoJuego = document.querySelector('#btnNuevoJuego');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');


// Create a new deck
const createDeck = () => {

    for ( let i = 2; i <= 10; i++ ) {
        
        for ( let palo of palosBaraja ) {
           
            deck.push( `${i}${palo}.png` );
        }
   }

   for ( palo of palosBaraja ) {
           
        for ( let court of courtCards ) {
   
            deck.push( `${court}${palo}.png` );
        }
    }
    //Returns a shuffled copy of the deck
    deck = _.shuffle( deck );
    return deck;
} 

createDeck();

const pedirCarta = () => {  

    if ( deck.length === 0 ) {
        throw 'No quedan cartas en el deck paayo ==, game over';
    }

    const carta = deck.pop();
    return carta;
}

const valorCarta = ( carta ) => {
    // string carts exception of 7 caract length '10D.png'
    // carta.charAt(0) === carta[0]
    let valor = ( carta.length === 6 ) ? carta.charAt(0) : carta.substring(0,2);

    return ( isNaN( valor ) ) ?
        (valor === 'A') ? 1 : 10
        : valor * 1;             // Convert character(values 2 to 10) to number type
}

// Events
btnPedir.addEventListener('click', () => {

    carta = pedirCarta();

    const divCartasJugador = document.querySelector('#jugador-cartas');

    const cartaJugador = document.createElement( 'img' ) ;
    cartaJugador.classList.add('carta');
    cartaJugador.src = `assets/cartas/${carta}`;

    // Mostrar cartas jugador
    divCartasJugador.append( cartaJugador );

    let puntosCarta = valorCarta ( carta );

    let puntosJugador = Number( document.querySelector( '#puntosJugador' ).textContent );

    // Si superan 21 pasa turno a máquina
    puntosJugador += puntosCarta;

    if ( puntosJugador > 21 ) turnoComputadora( puntosJugador );

    // Mostar puntos jugador
    document.querySelector( '#puntosJugador' ).innerText = puntosJugador.toString();

})

const turnoComputadora = ( puntosJugador ) => {

    carta = pedirCarta();

    const divCartasComputadora = document.querySelector( '#computador-cartas' );
    
    const cartaComputadora = document.createElement( 'img' );
    cartaComputadora.classList.add( 'carta' );
    cartaComputadora.src = `assets/cartas/${carta}`;

    // Mostrar cartas Computadora
    divCartasComputadora.append( cartaComputadora );
    
    let puntosCarta = valorCarta ( carta );

    let puntosComputador = Number ( document.querySelector( '#puntosComputadora' ).textContent );

    puntosComputador += puntosCarta;

    // Mostar puntos jugador
    document.querySelector( '#puntosComputadora').innerText = puntosComputador.toString();
    
    if ( puntosJugador > 21 ) console.log ('compu gana');

}


