function calcular()
{

    var numero1 = document.getElementById('text_number1')
    var numero2 = document.getElementById('text_number2')
    var number_one = Number(numero1.value)
    var number_two = Number(numero2.value)
    var result = document.getElementById('resultado')

    if(number_one == 0 || number_two == 0)
    {

        window.alert('Divisão por 0 não são permitidas!')

    }else 
    {

        let dividir = number_one / number_two
        result.innerHTML = `${number_one} / ${number_two} = ${dividir}`

    }

}
