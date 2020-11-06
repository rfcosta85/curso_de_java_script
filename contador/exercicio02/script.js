function verificar()
{
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano)
    {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else
    {
       var fsex = document.getElementsByName('radsex') 
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if(fsex[0].checked)
       {
           genero = 'Homem'

           if(idade >= 0 && idade < 10)
           {

                img.setAttribute('src', 'bebeMenino.jpg')

           } else if(idade >= 10 && idade < 21)
           {

            img.setAttribute('src', 'jovemHomem.jpg')

           } else if(idade < 50)
           {

            img.setAttribute('src', 'adultoHomem.jpg')

           } else
           {

            img.setAttribute('src', 'idosoHomem.jpg')

           }

       } else if(fsex[1].checked)

       {
          
        genero = 'Mulher'
        
        if(idade >= 0 && idade < 10)
           {

                img.setAttribute('src', 'bebeMenina.jpg')

           } else if(idade >= 10 && idade < 21)
           {

            img.setAttribute('src', 'jovemMulher.jpg')

           } else if(idade < 50)
           {

            img.setAttribute('src', 'adultaMulher.jpg')

           } else
           {

            img.setAttribute('src', 'idosaMulher.jpg')

           }
          
       }          

       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }

}