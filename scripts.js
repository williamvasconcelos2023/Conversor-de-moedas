


const meuButton = document.querySelector(".meu-button")
const meuSegundoSelect = document.querySelector(".segundo-select")
const meuPrimeiroSelect = document.querySelector(".primeiro-select")



function valorConvertido(){



const meuInput = document.querySelector(".meu-input").value
const meuValorParaConverter = document.querySelector(".valor-para-converter")
const meuValorConvertido = document.querySelector(".valor-convertido")


//console. log(meuPrimeiroSelect.value)


const dolarToday = 4.99
const realToday = 1.00
const euroToday = 5.28
const bitcoinToday = 134.99
const libraToday = 6.13
//const valorParaConverter = meuInput / dolarToday

//meuValorConvertido.innerHTML = valorParaConverter

//console. log(valorParaConverter)




if(meuPrimeiroSelect.value == "real"){
    meuValorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(meuInput)
}

    


if(meuPrimeiroSelect.value == "dolar"){
    meuValorParaConverter.innerHTML = new Intl.NumberFormat("ed-US", {
        style: "currency",
        currency: "USD"
    }).format(meuInput)
}
   

    

if(meuPrimeiroSelect.value == "euro"){
    meuValorParaConverter.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(meuInput)
}





if(meuSegundoSelect.value == "dolar"){
    meuValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(meuInput/dolarToday)  
    
}


if(meuSegundoSelect.value == "real"){
    meuValorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
       
    }).format(meuInput/realToday)

}


if(meuSegundoSelect.value == "euro"){    
    meuValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(meuInput/euroToday)
}


if(meuSegundoSelect.value == "bitcoin"){    
    meuValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(meuInput/bitcoinToday)
}


if(meuSegundoSelect.value == "libra"){
    meuValorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(meuInput/libraToday)  
    
}


}
 
function meuValorDeBaixo(){
const meuNomeBaixo = document.querySelector(".meu-nome-baixo")
const minhaImgBaixo = document.querySelector(".imagem-baixo")

    if(meuSegundoSelect.value == "dolar") {
        meuNomeBaixo.innerHTML = "Dólar americano"
        minhaImgBaixo.src = "./assets/dolar.png"
    }


    if(meuSegundoSelect.value == "real") {
        meuNomeBaixo.innerHTML = "Real brasileiro"
        minhaImgBaixo.src = "./assets/brasil.png"
    }
    
    
    if(meuSegundoSelect.value == "euro") {
        meuNomeBaixo.innerHTML = "Euro"
        minhaImgBaixo.src = "./assets/euro.png"
    }


    if(meuSegundoSelect.value == "bitcoin") {
        meuNomeBaixo.innerHTML = "Bitcoin"
        minhaImgBaixo.src = "./assets/bitcoin.png"
    }


    if(meuSegundoSelect.value == "libra") {
        meuNomeBaixo.innerHTML = "Libra"
        minhaImgBaixo.src = "./assets/libra.png"
    }






    valorConvertido()
}



function meuValorDeCima(){
const meuNomeCima = document.querySelector(".meu-nome-cima")
const minhaImgCima = document.querySelector(".imagem-cima")   

    if(meuPrimeiroSelect.value == "dolar") {
        meuNomeCima.innerHTML = "Dólar americano"
        minhaImgCima.src = "./assets/dolar.png"
    }


    if(meuPrimeiroSelect.value == "real") {
        meuNomeCima.innerHTML = "Real brasileiro"
        minhaImgCima.src = "./assets/brasil.png"
    }


    if(meuPrimeiroSelect.value == "euro") {
        meuNomeCima.innerHTML = "Euro"
        minhaImgCima.src = "./assets/euro.png"
    }

    valorConvertido()
}
    

meuPrimeiroSelect.addEventListener("change", meuValorDeCima)
meuSegundoSelect.addEventListener("change", meuValorDeBaixo)
meuButton.addEventListener("click", valorConvertido)






















































































