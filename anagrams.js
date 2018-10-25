function anagrams( match, words ) {
    
    
    //this
    
    /*
    let anagrams = [];
    words.forEach( ( word ) => {
        if ( match.split( '' ).sort().join( '' ) === word.split( '' ).sort().join( '' ) ) {
            anagrams.push( word );
        }
    });
    return anagrams;*/
    
    //or
    return words.filter( ( word ) => {
        return word.split( '' ).sort().join( '' ) === match.split( '' ).sort().join( '' );
    } )
    
    
}

console.log( anagrams('abba', [ 'aabb', 'abcd', 'bbaa', 'dada' ]) );
console.log( anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) );
console.log( anagrams('laser', ['lazing', 'lazy',  'lacer']) );