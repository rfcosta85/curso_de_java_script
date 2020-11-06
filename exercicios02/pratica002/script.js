function gerar()
{

    var numero = window.document.getElementById('tabuada')
    var number = Number(numero.value)
    var resultado = window.document.getElementById('resultado')
    var multiplicar

    for(var i = 1; i <= 10; i++ )
    {

        multiplicar = number * i
        resultado.innerHTML = `${number} x ${i} = ${multiplicar}`        

    }

}