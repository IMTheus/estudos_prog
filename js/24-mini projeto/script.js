// velocidade maxima de 70
// a 5km acima do limite voce ganha 1 ponto 
//math.floor
// caso pontos maior que 12 > 'carteira suspendida'




verificarVelocidade(70);

function verificarVelocidade(velocidade) {
    
    if(velocidade <= 70)
    console.log('ok');

    else{
        const pontos =  Math.floor((velocidade - 70)/5);
        if(pontos >= 12)
        console.log('carteira suspensa');
        else
        console.log('pontos',pontos);
    }
}