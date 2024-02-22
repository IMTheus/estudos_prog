// operadores logico




//operador logico e (&&)
//retorna TRUE se os dois operando forem true

//console.log(true && true);

let maiorDeIdade = true;
let carteiraDeTrabalho = true;
let podeTrabalhar = maiorDeIdade && carteiraDeTrabalho;

console.log(podeTrabalhar);




//operador logico (||)
//retorna true se um dos operadores forem true

let maiorDeIdade1 = false;
let carteiraDeTrabalho2 = true;
let podeTrabalhar3 = maiorDeIdade || carteiraDeTrabalho;

console.log(podeTrabalhar3);

//operador NOT (!)

let candidatoRecusado = !podeTrabalhar3;
console.log('candidato recusado', candidatoRecusado);