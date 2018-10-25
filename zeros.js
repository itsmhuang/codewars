//passes all tests but performance not optimal so can't submit?
function zeros( n ) {
    let counter = 0;
    let times = 1;
    let multiplier = 5;
    
    let countMultiples = ( mult ) => {
        
        if ( mult > n ) {
            return counter;
        }
        
        for ( let i = 1; i <= n; i++ ) {
            
        
            if ( i % mult === 0 ) {
                counter++;
            }
        }
        times++;
        return countMultiples( Math.pow( 5, times ) );
    };
    
    
    return countMultiples( multiplier );
}

// console.log( zeros(6) );
// console.log( zeros(12) );
console.log( zeros(30) );
console.log( zeros(20) );
