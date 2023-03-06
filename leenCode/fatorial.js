const fator = (num) => {

    var fat = num;
    for(let i = num - 1; i >= 1; i--){
        fat = fat * i;
    }

    return fat;
};

var x = fator(4)
console.log(x);
