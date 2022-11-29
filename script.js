const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


/* As "chaves" de criptografia que utilizaremos são:
`A letra "e" é convertida para "enter"`
`A letra "i" é convertida para "imes"`
`A letra "a" é convertida para "ai"`
`A letra "o" é convertida para "ober"`
`A letra "u" é convertida para "ufat"` */

function btnEncriptar() {

    if(!validarInput()) {
        const textoEncriptado = encriptar(textArea.value);
        mensagem.value = textoEncriptado;
        textArea.value = "";
    }
}


function encriptar(stringEncriptada) {

    let matrizCodigo = [["a", "ai"],["e", "enter"] , ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {

        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function validarInput() {

    let palavraEscrita = document.querySelector(".text-area").value;
    let validador = palavraEscrita.match(/^[a-z]*$/);

    if(!validador || validador.length == 0) {
        alert("Caracteres não permitidos");
        location.reload();
        return true;
    }
}