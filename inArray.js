function inArray( array1, array2 ){
    let included = [];
    
    array2.forEach( ( v2 ) => {
        array1.forEach( ( v1 ) => {
            if ( v2.includes( v1 ) && included.indexOf( v1 ) === -1 ) {
                included.push( v1 );
            }
        } )
    } );
    
    
    return included.sort();
}

console.log( inArray( ["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"] ) );
