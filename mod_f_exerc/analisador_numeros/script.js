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

        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `valor ${numero.value} adicionado`
        lista.appendChild(item)
        resultados.innerHTML = ''

    }else 
    {

        window.alert('Valor inválido ou já encontrado na lista.')
        
    }

    numero.value = ''
    numero.focus()

}

function finalizar()
{

    if(valores.length == 0)
    {

        window.alert('Adicione valores antes de finalizar')

    }else
    {

        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores)
        {

            soma += valores[pos]

            if(valores[pos] > maior)
            {

                maior = valores[pos]

            }

            if(valores[pos] < menor)
            {

                menor = valores[pos]

            }

        }

        media = soma / total
        resultados.innerHTML = ''
        resultados.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        resultados.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultados.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resultados.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultados.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }

}





