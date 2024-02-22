let pessoa = {
    "nome":"rodox",
    "idade": 37,
    "profissao": "programador",
    "hobbies": ["video game", "leiura", "correr"]
}

//[] =Array
//{} =obj

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);
console.log(typeof pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto)

console.log( typeof pessoaJSON)