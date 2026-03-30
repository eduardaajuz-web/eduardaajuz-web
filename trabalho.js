const produtos = ["pão caseiro", "sonho", "pão de queijo", "bolo", "croissant", "coxinha", "queijo", "presunto", "empada", "café" ]
const precos = [    10.00 ,       3.00 ,      1.50 ,        6.00 ,   4.00 ,       2.50 ,     6.50 ,    4.00 ,      5.50  ,  7.00 ]

function mostreEstoque(){
    console.log("----Estoque----")
    let contador = 0 
    while(contador < produtos.length){ 
        console.log(produtos[contador] + " - " + precos[contador])
        contador = contador + 1 
    }
}   

mostreEstoque()
 
function adicionaEstoque(nome, preco){
    produtos.push(nome)
    precos.push(preco)
    console.log("---Produto adicionado---")
}
adicionaEstoque("esfirra", 4)
mostreEstoque()

    function removerProduto(indice){
        produtos.splice(indice, 1)
        precos.splice(indice, 1)
    }

removerProduto()
mostreEstoque()