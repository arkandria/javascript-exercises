const removeFromArray = function(array, ...others) {
    let newArray = array;
    
    let argumentArray = others;
    
    for (let i=0; i<argumentArray.length; i++) {
        for (let j=0; j<newArray.length; j++) {
            
            
            if (newArray[j]===argumentArray[i]){
                newArray.splice(j,1);
            }
        }
    }
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
