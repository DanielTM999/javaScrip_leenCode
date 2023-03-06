const narcissistic = (value) => {
    var c = value.toString().split('');
    var num = 0;
    for(let i = 0; i < c.length; i++){
        num += c[i]**c.length;
    }
    console.log(num);
};

narcissistic(117);
