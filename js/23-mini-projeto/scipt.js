
// divissivel por 3 = fizz
// divissivel por 5 = buzz
// divissivel por 3 e 5 = fizzbuzz
//nao divisivel por 3 e 5 = entrada
// não é um numero = 'nao é um numero



const resultado = fizzbuzz(1);
console.log(resultado);

function fizzbuzz(entrada){
    if (typeof entrada !== 'number')
    return 'nao é um numero';

    if(entrada % 3 === 0 && entrada % 5 === 0)
    return 'fizzbuzz';

    if(entrada % 3 === 0 )
    return 'fizz'

    if (entrada % 5 === 0)
    return 'buzz'

    
    return entrada;


}