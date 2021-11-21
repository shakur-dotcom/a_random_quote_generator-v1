/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "The best way to get the right answer on the internet is not to ask a question; it's to post the wrong answer.",
    source: "CUNNINGHAM'S LAW"
  },
  {
    quote: "What one programmer can do in one month, two programmers can do in two months.",
    source: "FREDERICK P. BROOKS"
  },
  {
    quote: "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
    source: "LINUS TORVALDS"
  },
  {
    quote: "Programmers are often angry because they’re often scared.",
    source: "PAUL FORD"
  },
  {
    quote: "This is essentially what a program was, a love letter from the programmer to the hardware, full of the intimate details known only to partners in an affair.",
    source: "MICHAEL MARCOTTY"
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

/***
 * `printQuote` function
***/
function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let html = `<p class="quote">${randomQuote.quote}</p> 
  <p class="source">${randomQuote.source}</p>`;
  console.log(html);
  document.getElementById('quote-box').innerHTML = html;
}
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);