$(document).ready(function(){
  getQuote();
  
 var randomQuote;
  var author;
  function getQuote(){
   //Made quotes array to global var
 /* var quotes = ["We all make choices in life, but in the end our choices make us.","Get over here!",  "What is better? To be born good or to overcome your evil nature through great effort?","The right man in the wrong place can make all the difference in the world.", "Stand in the ashes of a trillion dead souls, and asks the ghosts if honor matters. The silence is your answer.", "Bring me a bucket, and I'll show you a bucket!", "Wanting something does not give you the right to have it.", "Even in dark times, we cannot relinquish the things that make us human.", "The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth. But I think that's a luxury, not a curse. To know you're close to the end is a kind of freedom. Good time to take... inventory.", "It’s a funny thing, ambition. It can take one to sublime heights or harrowing depths. And sometimes they are one and the same.", "A hero need not speak. When he is gone, the world will speak for him.", "No gods or kings. Only man.", "Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain’t nothing fair.", "You can’t break a man the way you break a dog, or a horse. The harder you beat a man, the taller he stands.", "It's time to kick ass and chew bubblegum... and I'm all outta gum.", "Life is cruel. Of this I have no doubt. One can only hope that one leaves behind a lasting legacy. But so often, the legacies we leave behind...are not the ones we intended.", "...", "If our lives are already written, it would take a courageous man to change the script.", "It's easy to forget what a sin is in the middle of a battlefield.", "The courage to walk into the Darkness, but strength to return to the Light."];  
 var author = ["-Bioshock","-Mortal Kombat", "-Skyrim", "-Half-Life 2", "-Mass Effect 3", "-Borderlands 2", "-Assassin’s Creed 2", "-Metro 2033", "-Call of Duty: Modern Warfare 2", "-Dishonored", "-Halo", "-Bioshock", "-Red Dead Redemption", "-Far Cry 2", "-Duke Nukem 3D", "-Gears of War 2", "-The Legend of Zelda", "-Alan Wake", "-Metal Gear Solid", "-Destiny"];
 
 randomNum = Math.floor(Math.random()*quotes.length);
 randomQuote = quotes[randomNum];
  author = author[randomNum];*/
  var url= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
$.getJSON(url, function(data){
  randomQuote = data.quoteText;
 $(".quote").html('"'+data.quoteText+'"');
  $(".author").html("-"+data.quoteAuthor);
  randomQuote = data.quoteText;  
});
    
  
};
  $("#tweet").on("click", function(){
 window.open("https://twitter.com/intent/tweet?text=" + randomQuote);   
  });
  
    $("#newQuote").on("click", function(){
    getQuote();
    });  
});