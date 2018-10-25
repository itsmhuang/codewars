//doesn't work if last digit isn't bigger than any other digits
function nextBigger( n ) {
    
    let bigger = [];
    let compare = 0;
    
    let numArray = n.toString( 10 ).split( '' ).map( ( e ) => {
        return parseInt( e );
    } );
    
    ( numArray.reverse() ).forEach( ( num, i, array ) => {
        
        if ( bigger.length === 0 && array[ compare ] > num ) {
            bigger = array.slice( 1 );
            bigger.splice( i, 0, array[ compare ] );
        }
    } );
    
    return Number(bigger.reverse().join( '' )) || -1;
    
}

// console.log( nextBigger(144) );
// console.log( nextBigger(2017) );
// console.log( nextBigger(12) );
// console.log( nextBigger(111) );
console.log( nextBigger(30859480) ); //30859804