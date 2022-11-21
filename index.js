let btn = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let sol = document.getElementById("solana");
let btcChange = document.getElementById("btc");
let ethChange = document.getElementById("eth");
let solChange = document.getElementById("sol");
var livePrices = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2C&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true" ,
    "method": "GET",
    "headers": {}

}
$.ajax(livePrices).done(function(response){
    btn.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    sol.innerHTML = response.solana.usd;
    if (Math.sign(response.bitcoin.usd_24h_change) == 1)
    {
        btcChange.innerHTML = Math.floor(response.bitcoin.usd_24h_change);
        btnChange.style.color = '#006400';
    } else {
        btcChange.innerHTML = Math.floor(response.bitcoin.usd_24h_change); 
        btcChange.style.color = '#FF0000';
    }  
    if (Math.sign(response.ethereum.usd_24h_change) == 1)
    {
        ethChange.innerHTML = Math.floor(response.ethereum.usd_24h_change);
        ethChange.style.color = '#006400';
    } else {
        ethChange.innerHTML = Math.floor(response.ethereum.usd_24h_change);
        ethChange.style.color = '#FF0000';
    }   
    if (Math.sign(response.solana.usd_24h_change) == 1)
    {
        solChange.innerHTML = Math.floor(response.solana.usd_24h_change);
        solChange.style.color = '#006400';
    } else {
        solChange.innerHTML = Math.floor(response.solana.usd_24h_change);
        solChange.style.color = '#FF0000';
    }   

})

function getValue()
{
    const x = document.getElementById("currencyBTCField");
    let y = parseInt(x.value) / btn.innerHTML;
    document.getElementById("currencyBTCResult").value = y;
}

function getEthValue()
{
    const x = document.getElementById("currencyField");
    let y = parseInt(x.value) / eth.innerHTML;
    document.getElementById("currencyEthResult").value = y;
}

function getSolValue()
{
    const x = document.getElementById("currencyField");
    let y = parseInt(x.value) / sol.innerHTML;
    document.getElementById("currencySolResult").value = y;
}






