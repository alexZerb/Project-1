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

const quotes = [
  {
    quote: "You miss 100% of the shots you don't take.",
    source: 'Wayne Gretzky',
    citation: 'NHL Legend',
    year: '1991'
  },
  {
    quote: "There may be people that have more talent than you, but there's no excuse for anyone to work harder than you.", 
    source: 'Derek Jeter', 
    citation: 'MLB Legend',
    year: '1996'
  },
  {
    quote: "The wall is your mind playing tricks on you. You just need to say, 'One more step, I can do this. I have more in me.' You'll be so proud of yourself once you push pass your threshold.", 
    source: 'Kerry Walsh', 
    citation: 'FIVB Legend',
  },
  {
    quote: 'If you do not believe in yourself no one will do it for you.', 
    source: 'Kobe Bryant', 
    citation: 'NBA Legend',
  },
  {
    quote: 'The greatest thing about tomorrow is, I will be better than I am today', 
    source: 'Tiger Woods', 
    citation: 'PGA Legend',
  },
  {
    quote: "Achievement is largely the product of steadily raising one's level of aspiration and expectation.",
    source: 'Jack Nicklaus', 
    citation: 'PGA Legend', 
    
  },
  {
    quote: "It doesn't matter what your background is or where you come from, if you have dreams and goals, that's all that matters.",
    source: 'Serena Williams', 
    citation: 'WTA Legend',
  }

];

/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
} 

/***
 * `printQuote` function
***/


function printQuote() {
  let phrase = getRandomQuote(); 
  let html = `
    <p class='quote'>${phrase.quote}</p>
    <p class='source'>${phrase.source}
  `;
//conditional statement to add citation and year
  if (phrase.citation) {
    html += `<span class='citation'>${phrase.citation}</span>`;
  }
  if (phrase.year) {
    html += `<span class='year'>${phrase.year}</span>`;
  }
    `</p>`
  document.getElementById('quote-box').innerHTML = html;

  }




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);