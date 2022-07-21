const az = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


let filterLetters = (el) => {
    return az.includes(el); 
}



const palindromes = function (string) {
    let newString = string.toLowerCase();
    let arr = newString.split("");
   let a = arr.filter(filterLetters);
   let stringA = a.join()
   
   let b = a;
   b.reverse();
   let stringB = b.join()
   
    console.log(stringA);
    console.log(stringB);
   return stringA===stringB;

    
    
    };

console.log(palindromes('Dabale arroz a la zorra el Abad'));


//Do not edit below this line
module.exports = palindromes;
