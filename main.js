function calcular()
{
    var numN = parseInt(document.getElementById("numN").value);
    var resultado = document.getElementById("resultado");
    var dif1 = 21 - numN;
    var dif2 = numN - 21;
   
    
    if (numN > 21){
        resultado.innerHTML = dif2 * 2;
    }else{
        
        resultado.innerHTML = dif1;
    }
}