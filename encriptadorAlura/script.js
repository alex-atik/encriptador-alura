const textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje_encriptado");

///*Letra e es ENTER / i es imes / a es ai / o es ober / u es ufat*/


function btnEncriptar(){
    const textoEncriptado = encriptar (textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"],];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i ++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptado
}

function btnDesEncriptar(){
    const textoDesEncriptado = desencriptar (textArea.value)
    mensaje.value = textoDesEncriptado
    textArea.value = "";
}

function desencriptar(stringDesEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"],];
    stringDesEncriptado = stringDesEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i ++){
        if(stringDesEncriptado.includes(matrizCodigo[i][1])){
            stringDesEncriptado = stringDesEncriptado.replaceAll (matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesEncriptado
}
