function scramble(str1, str2) {
    const str2Arr = str2.toLowerCase().split( '' );
    let counter = 0;
    
    str2Arr.forEach( ( v2 ) => {
        
        if ( str1.toLowerCase().includes( v2 ) ) {
            counter++;
        }
    });
    
    return counter === str2.length;
    
}


console.log( scramble('rkqodlw', 'world') );
console.log( scramble('cedewaraaossoqqyt', 'codewars') );
console.log( scramble('katas', 'steak') );
console.log(scramble('jscripts','javascript'));
console.log(scramble('rwnqcxrmphlfkftovqt', 'cuwlkypvhkno'));
