const SumBinary = (a, b) => {
    var ini = a + b;
    var binary = [];

    while(ini > 0){
        binary.push(ini % 2);
        ini = Math.floor(ini / 2);
    }

    return binary.reverse().join('');
};


var i = SumBinary(5, 9);
console.log(i);



