//if..else


//se a hora estiver entre as 06:00 ate 12:00 : bom dia!
//se estiver entre 12:00 ate as 18:00 : boa tarde!
//caso contrario : boa noite!


let hora = 22;



if(hora > 6 && hora < 12) {
    console.log("bom dia!")
}
else if (hora > 12 &&  hora < 18) {
    console.log('boa tarde!')
}
else {
    console.log("boa noite!")
}