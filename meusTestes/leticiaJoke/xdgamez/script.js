let inserts = document.getElementById('box_products') 
console.log(inserts)
let list = document.getElementById('products_list')
let bolado = document.getElementById('result')
let products = []

function register()

{
    
    products.push(inserts.value)
    bolado.innerHTML = `${products[0]} cadastrado com sucesso!`      
    let itens = document.createElement('option')
    itens.text = `Produtos: ${products[0]}`
    list.appendChild(itens) 
         

}

function presentation()
{

    
    

}

function ordered()
{

    window.alert('Ordenando...')

}

function exclude()
{

    window.alert('Produto Excluído com sucesso!')

}

