const changeQuoteBtn = document.querySelector(".Next-quote");
const tweetBtn = document.querySelector(".tweet");
const API = "https://api.quotable.io/random";
const quote=document.querySelector(".quote");
const author=document.querySelector(".author");

async function RandomQuote() {
    try{
        let response = await fetch("https://quotes-api-self.vercel.app/quote");
        if (response.ok){
            let data = await response.json();
            quote.innerHTML=data.quote;
            author.innerHTML=data.author;
        } else {
            console.log("error");  
        }
    } catch (error){
        console.log(error);
    }
} 
changeQuoteBtn.addEventListener("click",RandomQuote);
tweetBtn.addEventListener("click",()=>{
open("https://twitter.com/intent/tweet?text=Hello%20world");
});
RandomQuote();