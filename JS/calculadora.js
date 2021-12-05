
// concatena os numeros no visor
function insert (num) {
    
    var numero = document.getElementById('resultado').innerHTML; 
     document.getElementById ('resultado').innerHTML = numero + num;
  
}


//limpa o visor de resultado
function limpar(){
    
    return document.getElementById('resultado').innerHTML = '';

}


function voltar(){

 var ApagarResultado = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = ApagarResultado.substring(0, ApagarResultado.length -1);
}
    


function calcular (){

var numCalculo = document.getElementById('resultado').innerHTML;
if (numCalculo) {

    document.getElementById('resultado').innerHTML = eval(numCalculo);

} else{

    document.getElementById('resultado').innerHTML = "nada para calcular";
    

}


}