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
    year: '1991'
  },
  {
    quote: "There may be people that have more talent than you, but there's no excuse for anyone to work harder than you.", 
    source: 'Derek Jeter', 
    year: '1996'
  },
  {
    quote: "The wall is your mind playing tricks on you. You just need to say, 'One more step, I can do this. I have more in me.' You'll be so proud of yourself once you push pass your threshold.", 
    source: 'Kerry Walsh, American Beach Volleyball Player'
  },
  {
    quote: 'If you do not believe in yourself no one will do it for you.', 
    source: 'Kobe Bryant, American Basketball Player'
  },
  {
    quote: 'The greatest thing about tomorrow is, I will be better than I am today', 
    source: 'Tiger Woods, Professional Golfer'
  },
  {
    quote: "Achievement is largely the product of steadily raising one's level of aspiration and expectation.",
    source: 'Jack Nicklaus, Professional Golfer', 
    
  },
  {
    quote: "It doesn't matter what your background is or where you come from, if you have dreams and goals, that's all that matters.",
    source: 'Serena Williams, Professional Tennis Player'
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
} 





/***
 * `printQuote` function
***/






/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);