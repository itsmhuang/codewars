function titleCase( title, minorWords ) {
    let arr = title.toLowerCase().split( ' ' );
    let newArr = [];
    
    let minor = minorWords ? minorWords.toLowerCase().split( ' ' ) : [];
    
    
    arr.forEach( ( v1, index ) => {
        
        if ( minor.includes( v1 ) && index > 0 ) {
            newArr.push( v1 )
        } else {
            newArr.push( ( v1.charAt(0) ).toUpperCase() + v1.substring( 1 ) );
        }
        
    });
    
    return newArr.join( ' ' );
}


console.log( titleCase('a clash of KINGS', 'a an the of') );
console.log( titleCase('THE WIND IN THE WILLOWS', 'The In') );
// console.log( titleCase('the quick brown fox') );