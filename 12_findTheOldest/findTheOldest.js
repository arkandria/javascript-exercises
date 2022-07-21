

const findTheOldest = function(arr) {
    arr.forEach( (el) =>{
        if (el.hasOwnProperty('yearOfDeath')) {
            el.age = el.yearOfDeath - el.yearOfBirth;
            console.log (el.age);
            
            
        } else {
            el.age = new Date().getFullYear() - el.yearOfBirth
            console.log(el.age);
        }
    })
    arr.sort (function(a, b){
        return b.age -a.age});
    
    arr.forEach( (el) =>{
        delete el.age;
    });

    return arr[0];

};



// Do not edit below this line
module.exports = findTheOldest;
