var quotes = [
    "\"Looking for perfection is the only way to motivate yourself.\"",
    "\"Family is in our hearts, bonded together for life\"",
    "\“The most important thing in the world is family and love.\” –John Wooden",
    "\“To us, family means putting your arms around each other and being there.\”–Barbara Bush"
    
    
    ];
    
    function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("text").innerHTML  = quotes[randomNumber];
  
    
    }
    
    