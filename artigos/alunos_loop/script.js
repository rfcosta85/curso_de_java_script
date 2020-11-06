function resultados()
{
    
    var alunos = ['André', 'Antônio', 'Yuri', 'Leonardo', 'Alexandre']
    var notas = [8.5, 7.1, 8.2, 9.3, 6.4]

    let resultados = document.getElementById('alunos')

    resultados.innerHTML = '' 

    for(let contador = 0; contador <= 4; contador++)
    {

        let item = document.createElement('option')
        item.text = `${alunos[contador]} - ${notas[contador]}`
        resultados.appendChild(item)

    }

}