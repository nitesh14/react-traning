//Exercise on Control statement

// Takes number as argument and return boolean value as result. Run from console
function primeNoCheck(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}