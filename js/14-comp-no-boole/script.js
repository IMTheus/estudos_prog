//falsy 
//undefined
//null
//0
//false
//''
//NaN - Not a Number


//truthy
//tudo que nao é falsy

let corPersonalizada = 'vermelho'; //se aqui tivesse vazio ele ia buscar o 'Azul'
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);