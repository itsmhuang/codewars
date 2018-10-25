function towerBuilder( nFloors ) {
    let arr = [];
    
    //create array
    for ( var i = 1; i <= nFloors; i++ ) {
        const spaces = ' '.repeat( nFloors - i ),
              stars = '*'.repeat( i*2-1 );
        arr.push( spaces + stars + spaces );
    }
    
    return arr;
    
}
console.log( towerBuilder( 3 ) );
console.log( towerBuilder( 6 ) );
