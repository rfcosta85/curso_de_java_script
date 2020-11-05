function verificar()
{

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')

    if(fano.value.length == 0 || fano.value > ano)
    {

        window.alert('[ERRO] Verifique os dados e tente novamente!')        

    }else 
    {

        var fsex = document.getElementsByName('radsex')  
        var idade = ano - Number(fano.value)  
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 
        
        if(fsex[0].checked)
        {

            gênero = 'Homem'
            if(idade >= 0 && idade < 10)
            {

                //Criança
                img.setAttribute('src', 'bebeMenino.jpg')

            }else if(idade < 21)
            {

                // Jovem
                img.setAttribute('src', 'jovemHomem.jpg')

            }else if(idade < 50)
            {

                // Adulto
                img.setAttribute('src', 'adultoHomem.jpg')

            }else 
            {

                // Idoso
                img.setAttribute('src', 'idosoHomem.jpg')

            }

        } else if (fsex[1].checked)
        {

            gênero = 'Mulher'
            if(idade >= 0 && idade < 10)
            {

                //Criança
                img.setAttribute('src', 'bebeMenina.jpg')                

            }else if(idade < 21)
            {

                // Jovem
                img.setAttribute('src', 'jovemMulher.jpg')


            }else if(idade < 50)
            {

                // Adulto
                img.setAttribute('src', 'adultaMulher.jpg')

            }else 
            {

                // Idoso
                img.setAttribute('src', 'idosaMulher.jpg')

            }

        }

        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        resultado.appendChild(img)

    }

}