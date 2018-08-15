var quotes = [
    "Life will hit you up and throw you down, what matters is that you rise- Seni Sulyman",
    "Live each day as if it was the last- Steve Jobs",
    "Be careful how you talk to yourself. You are always listening."
];


var changeBtn = document.getElementById("change");
changeBtn.onclick = function randomQuote(){
    var randomQuote = Math.floor(Math.random() * quotes.length);
    document.getElementById("random").innerHTML = quotes[randomQuote];
  };
