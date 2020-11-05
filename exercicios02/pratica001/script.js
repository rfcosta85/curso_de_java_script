function contar()
{

    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var resultado = window.document.getElementById('resultado')
    var contador = inicio
    var transforma = Number(contador.value)

    for(inicio; fim; passo)
    {

        transforma += passo

        resultado.innerHTML('Contando:')
        resultado.appendChild(`${transforma} > `)

    }        

}