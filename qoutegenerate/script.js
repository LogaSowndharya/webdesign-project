let qoute=document.querySelector("#quote")
let author=document.querySelector("#author")
let btngenerate=document.querySelector("#btngenerate")
let api='https://dummyjson.com/quote'
let quotes=[]

btngenerate.addEventListener('click',setQuote)

function setQuote(){
    let index=Math.floor(Math.random()*30)
    quote.innerHTML=quotes[index].quote
    author.innerHTML=quotes[index].author


}

async function getQuote(){
    let response = await fetch(api)
    let data = await response.json()
    quotes=data.quotes
    console.log(data);

}
getQuote()