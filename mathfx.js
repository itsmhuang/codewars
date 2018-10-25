Math.round = function(number) {
    
    const remainder = number % 1;
    
    if ( remainder >= 0.5 ) {
        return number + 1 - remainder;
    } else {
        return number - remainder;
    }
};

Math.ceil = function(number) {
    const remainder = number % 1;
    
    if ( remainder !== 0 ) {
        return 1 - ( number % 1 ) + number;
    } else {
        return number;
    }
};

Math.floor = function(number) {
    return number - ( number % 1 );
};

console.log( Math.ceil( 6 ) );
console.log( Math.floor( 2.5 ) );


