var idade = 70

console.log('\n' + 'Você tem ' + idade + ' anos' + '\n')

if(idade < 16)
{

    console.log(`Não vota`)
    
}else if(idade < 18 || idade > 65)
{
    
    console.log(`Voto opcional`)

} else
{

    console.log(`Voto obrigatório`)

}