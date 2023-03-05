const TwoSum = (num, target) => {
    //percorre o array
    for(let i=0; i < num.length; i++){
        //percorre o array passando o valor posterior
        for(let j = i+1; j < num.length; j++){
            //calcula a diferença dos valores
            var complement = target - num[i];

            // verifica se o valor posterior e iqual ou valor do resultado e retona se for o resultado
            if(complement == num[j]){
                return res = [i, j]
            }
        }
    }
}

var teste = TwoSum([10, 7, 3, 15], 22)
console.log(teste)
