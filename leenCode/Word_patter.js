const WordPatter = (pattern, str) => {
    // separa em array as strings "dog cat" => ['dog','cat']
    str = str.split(' ');

    //verifica se a quentidade da string patter e igual a quiantidade de array
    if ( str.length != pattern.length) return false;

    //cria um objeto chamado hash
    var hash = {};

    //percorre o array de string
    for (var i = 0; i < str.length; i++) {
        //verifica se existe o caractere pattern na posição i no hash
        if (hash[pattern[i]]) {
            // verifica se o elemento do paatern na posição i ja existente é iqual ao array na posição atual
            if (hash[pattern[i]] !== str[i]) return false;
        } else {
            //verifica se existe existe o elemento do array, dentro do objeto hash e retorna o indicio caso não exista ele retorna -1 caso nao for -1 ele retorna falso
            if (Object.values(hash).indexOf(str[i]) !== -1){
                return false;
            } else {
                //adiciona o elemento no array ja verificado que não possue no objeto 'hesh'
                hash[pattern[i]] = str[i];
            }
        }
    }

    //retorna verdadeiro caso não ocorra erros
    return true;
};

console.log(WordPatter("abba","dog cat cat dog"));
