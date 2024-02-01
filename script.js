var inputText = document.getElementById("text-input-area");
var outText = document.getElementById("output");

function criptografar() {
    var texto = inputText.value;
    var resultCripto = texto.replace(/e/g, "long").replace(/i/g, "pouuyn").replace(/a/g, "ober").replace(/u/g, "udumb");

    document.getElementById("output").innerHTML = "<textarea readonly id='text-input-area'> " + resultCripto + "</textarea>" 
}

function descriptografar() {
    var texto = inputText.value;
    var resultDescripto = texto.replace(/long/g, "e").replace(/pouuyn/g, "i").replace(/ober/g, "a").replace(/udumb/g, "u")

    document.getElementById("output").innerHTML = "<textarea readonly id='text-input-area'> " + resultDescripto + "</textarea>" 
}

function copiar(){
    var textoCopy = document.getElementById("text-input-area");
    textoCopy.select();
    document.execCommand('copy');
}