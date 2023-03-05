const TwoSum = (num, target) => {
    for(let i=0; i < num.length; i++){
        for(let j = i+1; j < num.length; j++){
            var complement = target - num[i];

            if(complement == num[j]){
                return res = [i, j]
            }
        }
    }
}

var teste = TwoSum([10, 7, 3, 15], 22)
console.log(teste)
