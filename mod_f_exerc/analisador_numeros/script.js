let numero = document.getElementById('text_numbers')
let lista= document.getElementById('number_list')
let resultados = document.getElementById('resultado')
let valores = []

function isNumber(number)
{

    if(Number(number) >= 1 && Number(number) <= 100)
    {
        
        return true

    }else 
    {

        return false 

    }

}

function inLista(number, list)
{

    if(list.indexOf(Number(number)) != -1)
    {

        return true

    }else 
    {

        return false

    }

}

function adicionar()
{

    if(isNumber(numero.value) && !inLista(numero.value, valores))
    {

        

    }else 
    {

        
        
    }

}





