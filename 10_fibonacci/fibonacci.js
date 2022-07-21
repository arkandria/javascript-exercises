const fibonacci = function(n) {
    if (n>0){
        let arr = [1,1];
        for (i=0; i<=n; i++) {
            let x = arr[i] + arr[i+1];
            arr.push(x);
        }
        console.log (arr);
        return arr[n-1];
    } else {
        return "OOPS"
    }
};

console.log(fibonacci(15));
// Do not edit below this line
module.exports = fibonacci;
