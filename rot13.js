function rot13(message){
    
    let decoded = [];
    
    ( message.split( '' ) ).forEach( ( letter ) => {
        
        let lowerLetter = letter.toLowerCase();
        
        if ( lowerLetter.charCodeAt( 0 ) >= 97 && lowerLetter.charCodeAt( 0 ) < 97+26 ) {
            if ( lowerLetter.charCodeAt( 0 ) >= 97+13 ) {
                decoded.push( String.fromCharCode( letter.charCodeAt( 0 ) - 13 ) )
            } else {
                decoded.push( String.fromCharCode( letter.charCodeAt( 0 ) + 13 ) )
            }
        } else {
            decoded.push( letter );
        }
    } );
    
    return decoded.join( '' );
}

console.log( rot13("test1") );