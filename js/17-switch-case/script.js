let permissao; //comum, gerente, diretor

permissao = 'comum'


switch(permissao) {
    case 'comum':
        console.log('usuario comum');
        break;

        case 'gerente':
        console.log('usuario gerente');
        break;

        case 'diretor':
        console.log('usuario diretor');
        break;

        default:
        console.log('usuario nao reconhecido!')

}



// medico, adv, ads, diretor

let podeEntrar = 'ads';

switch (podeEntrar) {
    case 'medico':
        console.log('usuario medico');
        break;

    case 'adv':
         console.log('usuario adv');
         break;

     case 'diretor':
         console.log('usuario diretor');
         break;

     case 'ads':
           console.log('usuario ads');
           break;

         default:
            console.log('nao reconhecido')


}




let dias= prompt('digite o dia da semana')

switch(dias) {
    case 'segunda':
        console.log('hoje é segundinhaaaa')
        break

    case 'terca':
        console.log ('hoje é tercaaaaa')
        break

    case 'quarta':
        console.log ('hoje é quartaaaaaaa')
        break

    case 'quinta':
        console.log ('hoje é quintaaaaaa')
        break

    case 'sexta':
        console.log ('hoje é sextinhaaaa')
        break

        default:
            console.log('fim de semana')

}
