let inserts = document.getElementById('box_products') 
console.log(inserts)
let list = document.getElementById('products_list')
let lista = document.getElementById('products_list2')
let excluir = document.getElementById('products_list3')
let bolado = document.getElementById('result')
let products = []

function register()

{
    
    products.push(inserts.value)
    window.alert(`${inserts.value} adicionado com sucesso`)
    

}

function presentation()
{

    let itens = document.createElement('option')
    itens.text = `${inserts.value}`
    list.appendChild(itens)     
    inserts.value = '' 
    //inserts.focus()    

}

function ordered()
{

    window.alert(`${products.sort()}`)
    let teste = document.createElement('option')    
    teste.text = `${products.sort()}`
    lista.appendChild(teste)    

}

function exclude()
{

   let zoando = document.createElement('option')
   zoando.text = `${products.sort()}`
   excluir.appendChild(zoando) 

}

