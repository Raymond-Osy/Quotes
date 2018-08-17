var quotes = [
    "Life will hit you up and throw you down, what matters is that you rise- Seni Sulyman",
    "Live each day as if it was the last- Steve Jobs",
    "Be careful how you talk to yourself. You are always listening."
];

// Add array for images as random image directly from splash will reqire page to be refreshed which in turn will clear previous stored array
var images = [
    "https://source.unsplash.com/tGTVxeOr_Rs/1600x900",
    "https://source.unsplash.com/sMQiL_2v4vs/1600x900",
    "https://source.unsplash.com/zNN6ubHmruI/1600x900",
    "https://source.unsplash.com/XiYUzsml06M/1600x900",
    "https://source.unsplash.com/salaAJW7Xdg/1600x900",
    "https://source.unsplash.com/HcmdstM9IFw/1600x900",
    "https://source.unsplash.com/xr-y6Ruw7K8/1600x900",
    "https://source.unsplash.com/XnvLe0u9iM8/1600x900",
    "https://source.unsplash.com/Hn8N4I4eHA0/1600x900",
    "https://source.unsplash.com/UBP-Cp0cnYU/1600x900",
]
// add condition for empty inbox

var changeBtn = document.getElementById("change");
changeBtn.onclick = function randomQuote(){
    var randomQuote = Math.floor(Math.random() * quotes.length);
    var randomImage = Math.floor(Math.random() * images.length);
    document.getElementById("random").innerHTML = quotes[randomQuote];
    //add img to html and grab it here
  };

var addQuoteBtn = document.getElementById("addQuote");
addQuoteBtn.onclick = function newQuote(){
    var input = document.getElementById("input").value;
    quotes.push(input);
    document.getElementById("input").value = "";
};
