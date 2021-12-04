
// concatena os numeros no visor
function insert (num) {

    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById ('resultado').innerHTML = numero + num;
}


//limpa o visor de resultado
function clear(){

    document.getElementById('resultado').innerHTML = " ";

}