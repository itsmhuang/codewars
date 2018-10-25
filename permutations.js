//didn't solve. couldn't get permutations. but successfully remove dupes from array!
function permutations( string ) {
    const arr = string.split( '' );
    
    let arrCopy = arr.slice( 0 );
    let newArr = [];
    let unique = [];
    
    arr.forEach( ( v, i ) => {
        arrCopy.forEach( ( v2 ) => {
            newArr.push( arrCopy.join( '' ) );
            
        } );
        
        arrCopy.shift();
        arrCopy.push( v );
        
    } );
    
    
    
    /*newArr.forEach( ( v ) => {
        if ( !unique.includes( v ) ) {
            unique.push( v );
        }
    } );
    
    return unique;*/
  
  
}

console.log( permutations('a') );
console.log( permutations('ab') );
console.log( permutations('aabb') );



