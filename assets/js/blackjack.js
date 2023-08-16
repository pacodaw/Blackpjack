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
const palosBaraja = ['C','D','H','S'],  //palo is suit
      courtCards  = ['J','Q','K','A'];   // figuras is court

let puntosJugador    = 0,
    puntosComputador = 0;

// Refs del HTML
const btnNuevoJuego        = document.querySelector( '#btnNuevoJuego' ),
      btnPedir             = document.querySelector( '#btnPedir' ),
      btnDetener           = document.querySelector( '#btnDetener' ),
      divCartasJugador     = document.querySelector( '#jugador-cartas' ),
      divCartasComputadora = document.querySelector( '#computador-cartas' ),
      puntosHTML           = document.querySelectorAll( '#puntosHTML' );

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
console.log (deck.length);

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

const crearCartaHTML = ( carta, divCartas ) => {

    const imgCarta = document.createElement( 'img' ) ;
    imgCarta.classList.add('carta');
    imgCarta.src = `assets/cartas/${carta}`;
    // Mostrar cartas jugador
    divCartas.append( imgCarta );
}

// Event player clicks on the button to ask for a card
btnPedir.addEventListener('click', () => {

    carta = pedirCarta();

    crearCartaHTML( carta, divCartasJugador);

    puntosJugador += valorCarta ( carta );
    // Mostar puntos jugador
    puntosHTML[0].innerText = puntosJugador;

    // Si superan 21 jugador pierde y pasa turno a computadora
    if ( puntosJugador >= 21 ) {

        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    }

});

const chooseWinner = ( puntosJugador, puntosComputador ) => {
        
    setTimeout(() => {

        if ( puntosJugador > 21 ) {
    
            alert ('COMPUTADORA GANA !!!');
    
        } else if ( puntosComputador > 21 ) {
    
            alert ('JUGADOR GANA !!!');
                  
        } else if ( puntosJugador < puntosComputador ) {
    
            alert ('COMPUTADORA GANA !!!');
            
        } else if ( puntosJugador > puntosComputador ) {
    
            alert ('JUGADOR GANA !!!');
    
        } else if ( puntosJugador === puntosComputador ) {
    
            alert ('EMPATE !!!');
    
        }
    
        }, 100 );

}

const turnoComputadora = ( puntosJugador ) => {

    do {
        carta = pedirCarta();
    
        crearCartaHTML( carta, divCartasComputadora);
     
        puntosComputador += valorCarta ( carta );
        // Mostar puntos computadora
        puntosHTML[1].innerText = puntosComputador;
           
    } while ( (puntosJugador <= 21) && (puntosJugador > puntosComputador) );

    chooseWinner ( puntosJugador, puntosComputador );
    
}

// To end player turn
btnDetener.addEventListener('click', () => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador );
});

/* function removeAllChildNodes( parent ) {
    while ( parent.firstChild ) {
        parent.removeChild( parent.firstChild );
    }
} */

// To start a new game, reset values, create new deck
btnNuevoJuego.addEventListener('click', () => {

    console.clear();
/*
    removeAllChildNodes( divCartasJugador );
    removeAllChildNodes( divCartasComputadora ); */
    divCartasJugador.innerHTML     = '';
    divCartasComputadora.innerHTML = '';

    puntosJugador    = 0;
    puntosComputador = 0;   
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

    deck = [];
    createDeck();
});

