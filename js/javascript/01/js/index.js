// onclick = disparado quando recebe um click
// ondblclick = disparado quando recebe click duplo
// onmouseover = disparado quando o mouse esta sobre
// onmouseout = disparado quando o mouse é movido para fora do elemento
// onmousemove = disparado quando o mouse é movido no elemento
// onmousedown = disparado quando o click do botao é pressionado
// onmouseup = disparado quando o click do botao é liberado
// onfocus = disparado quando o elemento recebe foc
// onchange = disparado quando existe uma mudança no conteudo 
// onblur = disparado quando o elemento perde o foco
// onkeydown = disparado quando uma tecla é pressionada 
// onkeyup = disparado quando uma tecla é solta sobre um elemento 
// onkeypress =disparado quando uma tecla é pressionada e solta
// onload = disparada quando a pagina terminou de ser carregada 
// onresize = disparado quando a um redirecionamento da janela

//evento de clique
function eventoClick() {
    console.log("acionou o evento clique");

    document.body.style.backgroundColor ="green"
}

//dois cliques
function eventoDblClick() {
    alert ("evento de clique duplo")
}

function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor ="red"
}


function viraAzul() {
    let div = document.getElementById("teste");
    div.style.backgroundColor ="blue"
}

//criar texto quando move o mouse encima do elemento
// function addTexto() {
//     let p = document.getElementById("texto");
//     p.append("o mouse moveu <br>")
// }


function limpaTexto(){
    document.getElementById("campoTexto").value ="";
}



function teclaPressionada(){
    let input = document.getElementById("campoText").value;
    console.log(input)
}

