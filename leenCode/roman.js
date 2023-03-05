const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}

var romanToInt = (S) => {
    let ans = 0
    //percorre a string como um array de caracteres
    for (let i = S.length-1; i >= 0; i--) {
        //adiciona uma variavel que recebe o numero de cada letra em romano
        let num = roman[S.charAt(i)]

        //calcula a difereça de maior e menor e atribui a variavel 'ans'
        if (4 * num < ans) ans -= num
        else ans += num
    }
    return ans
};

var x = romanToInt("LVI")
console.log(x)
