var longestCommonPrefix = (strs) => {
    //retorna falso se não existir
    if(strs.length === 0) return "";

    // faz com que o prefixo seja recebido e definido como a 1 sring ja que so possue ela como inical e ela  q vai ser o parametro
    var prefix = strs[0]
    //percorre o array de palavras
    for(let i=1; i < strs.length;i++){
        //faz com que emquanto a string não for o profixo ou seja ele compara com as outras e se não for ela remove a parte que não possue na strig e só aceita a que estão e com o indice 0
        while(strs[i].indexOf(prefix) !== 0){
            prefix =  prefix.substring(0, prefix.length-1)
        }
    }

    return prefix;
};

var exemple = longestCommonPrefix(["flower","flow","flowter"])
console.log(exemple)
