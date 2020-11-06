function contar()
{

    let inicio = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let resultado = window.document.getElementById('resultado')
    

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 )
    {
        
        resultado.innerHTML += `Impossível contar!`

    }else
    {

        resultado.innerHTML = `Contando: <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0)
        {

            window.alert(`Passo inválido! Considerando PASSO 1`)
            p = 1

        }

        if(i < f)
        {

            //Contagem crescente 

            for(let c = i; c <= f; c += p)
            {

                resultado.innerHTML += `${c} \u{1F449} `

            }         

        }else 
        {

            //Contagem Regressiva

            for(let c = i; c >= f; c -= p)
            {

                resultado.innerHTML += `${c} \u{1F449}`

            }

        }

        resultado.innerHTML += `\u{1F3C1}`

    }

    

}