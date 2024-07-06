let valorTotalCarrinho = 1400;

function adicionar(){    
    let valor = document.getElementById("produto").value.slice(-4);
    while(valor[0]/1 != valor[0]){
        valor = valor.slice(1);
    }
    let precoProduto = parseInt(valor);

    let quantidade = 1;    
    if (document.getElementById("quantidade").value){
        quantidade = document.getElementById("quantidade").value;
    }

    let nomeProduto = document.getElementById("produto").value;
    let corte = document.getElementById("produto").value.indexOf("-");
    nomeProduto = nomeProduto.slice(0,corte);

    
    valorTotalCarrinho = valorTotalCarrinho + (precoProduto*quantidade);
    document.getElementById("valor-total").textContent = `R$ ${valorTotalCarrinho},00`;
    document.getElementById("lista-produtos").querySelector("section").innerHTML += 
        `<br><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoProduto*quantidade},00</span>`;
}

function limpar(){
    document.getElementById("lista-produtos").querySelector("section").innerHTML = "";
    valorTotalCarrinho = 0;
    document.getElementById("valor-total").textContent = `R$ ${valorTotalCarrinho},00`;
}