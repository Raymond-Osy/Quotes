var quotes = [
    "Life will hit you up and throw you down, what matters is that you rise- Seni Sulyman",
    "Live each day as if it was the last- Steve Jobs",
    "Be careful how you talk to yourself. You are always listening- Raymond"
];

// Add array for images as random image directly from splash will reqire page to be refreshed which in turn will clear previous stored array
var images = [
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=3cd63c34901a7ebc5b53539d0223112d",
    "https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=c8a126805897fad59b03a5d39bafdf0b",
    "https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=51ab375b3b38b50fb72c1b8113d3ff73",
    "https://images.unsplash.com/photo-1476608825565-f7cebeca38b1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=c730c2efc7bcdd33569ad2b55f9ebd3d",
    "https://images.unsplash.com/photo-1506269351850-0428eaed2193?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=bdb956f719cc943bf385f89507e68ac9",
    "https://images.unsplash.com/photo-1511151083847-62cedb3a5ea2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=303427d5268d28956da41b090e50ccd6",
    "https://images.unsplash.com/photo-1516939884455-1445c8652f83?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=60bbdef6bb8c2e69133a01ad42d1731e",
    "https://images.unsplash.com/photo-1446769066069-f8c54fae653b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=449dce083f3b035519113cbb162dea87",
    "https://images.unsplash.com/photo-1509529711801-deac231925ac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=6f2b3d61a8d897fd3294168be6eb8198",
    "https://images.unsplash.com/photo-1507644980989-d116ca3c5d89?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=22a85c8396697eb5d89dbbd1c7faafba",
]
// add condition for empty inbox

var changeBtn = document.getElementById("change");
changeBtn.onclick = function randomQuote(){
    var randomQuote = Math.floor(Math.random() * quotes.length);
    var randomImage = Math.floor(Math.random() * images.length);
    document.getElementById("random").innerHTML = quotes[randomQuote];
    document.getElementById("image").style.background = "url("+ images[randomImage] + ")";
  };

var addQuoteBtn = document.getElementById("addQuote");
addQuoteBtn.onclick = function newQuote(){
    var input = document.getElementById("input").value;
    if (input === ""){
        alert("Please input a quote in the text box");
      }
    else {
    quotes.push(input);
    }
    document.getElementById("input").value = "";
};
