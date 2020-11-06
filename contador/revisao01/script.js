function carregar()
{

    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()  

    if(hora >= 0 && hora < 12)
    {

        imagem.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
        mensagem.innerHTML = `Bom dia! Agora são ${hora} horas.` 
        

    } else if(hora >= 12 && hora <= 18)
    {

        imagem.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
        mensagem.innerHTML = `Boa tarde! Agora são ${hora} horas.` 

    } else 
    {

        imagem.src = 'noite.jpg'
        document.body.style.background = '#515154'
        mensagem.innerHTML = `Boa noite! Agora são ${hora} horas.` 

    }

}

