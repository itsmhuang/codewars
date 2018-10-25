function high( x ) {
    
    let arr = x.split( ' ' );
    let scores = {};
    let letterScore = 0;
    
    arr.forEach( ( word ) => {
        ( word.split( '' ) ).map( ( letter ) => {
            letterScore += letter.charCodeAt( 0 );
        } );
        scores[ word ] = letterScore;
        letterScore = 0; //reset letter score
    } );
    
    
    
    return Object.keys( scores ).reduce( ( a, b ) => {
        let normalizeToAlphabet = function( input ) {
            return scores[ input ] - ( 96*input.length );
        };
        
        return ( normalizeToAlphabet( a ) >= normalizeToAlphabet( b ) ? a : b );
        
        
        
    } );
    
    // return scores;
}

console.log( high('man i need a taxi up to ubud') );
console.log( high('what time are we climbing up the volcano') );
console.log( high('take me to semynak') );
console.log( high('cckrh kvxfw vmxcq roczx') );

