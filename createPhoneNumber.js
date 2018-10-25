function createPhoneNumber( numbers ){
    // let phoneNumber = numbers.splice( 0, 0, '(' );
    
    let phoneNumber = numbers.slice( 0 );
    
    phoneNumber.splice( 0, 0, '(' );
    phoneNumber.splice( 4, 0, ')' );
    phoneNumber.splice( 5, 0, ' ' );
    phoneNumber.splice( 9, 0, '-' );
    
    
    return phoneNumber.join( '' );
}

console.log( createPhoneNumber( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ] ) );