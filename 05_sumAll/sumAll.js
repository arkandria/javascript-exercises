const sumAll = function(firstN,lastN) {
    if ( typeof firstN !== 'number' || typeof lastN !== 'number' || firstN < 0 || lastN < 0 ) {
        return "ERROR";
    } else  if (firstN<lastN){
        let a=firstN;
        let b=lastN;
        let total=0;
    
    for (i=a; i<=b; i++) {
        total= total+i;
        
    }
    
    return total;
    } else {
        let b=firstN;
        let a=lastN;
        let total=0;
    
    for (i=a; i<=b; i++) {
        total= total+i;
        
    }
    
    return total;
    }
    

};

// Do not edit below this line
module.exports = sumAll;
