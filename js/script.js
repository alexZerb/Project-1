/******************************************
Treehouse FSJS Techdegree: Alex Szczerba
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "Forgiveness condones nothing, but it does cast off the chains of anger, judgment, resentment, denial, and pain that chokes growth. In this way, it allows for life, for freedom.",
    source: 'THE BEAUTY IN BREAKING',
    citation: 'Michelle Harper',
    year: '2020',
    genre: 'Memoir',
  },
  {
    quote: "To choose doubt as a philosophy of life is akin to choosing immobility as a means of transportation.", 
    source: 'LIFE OF PI', 
    citation: 'Yann Martel',
    year: '2001',
    genre: 'Fiction',
  },
  {
    quote: "If you don't understand, ask questions. If you're uncomfortable about asking questions, say you are uncomfortable about asking questions and then ask anyway.", 
    source: 'AMERICANAH', 
    citation: 'Ngozi Adichie',
    year: '2013',
    genre: 'Fiction',
  },
  {
    quote: 'When you start to love yourself for the first time, when you start to truly emrace who you are - flaws and all - your scars start to look a lot more like beauty marks', 
    source: 'SISSY', 
    citation: 'Jacob Tobia',
  },
  {
    quote: `What's the point of having a voice if you're gonna be silent in those moments you shouldn't be?`, 
    source: 'THE HATE YOU GIVE', 
    citation: 'Angie Thomas',
    year: '2017',
  },
  {
    quote: "There is no greater agony than bearing an untold story inside you.",
    source: 'I KNOW WHY THE CAGED BIRD SINGS', 
    citation: 'Maya Angelou', 
    year: '1969', 
  },
  {
    quote: "You never really understand a person until you consider things from his point of view...Until you climb inside of his skin and walk around in it.",
    source: 'TO KILL A MOCKINGBIRD', 
    citation: 'Harper Lee',
    year:'1960',
    genre:'Fiction' 
  },
  {
    quote:`When you make loving others the story of your life, there's never a final chapter, because the legacy continues. You lend your light to one person, and he or she shines it on another and another and another.`,
    source:'WHAT I KNOW FOR SURE', 
    citation:'Oprah Winfrey',
    year:'2014',
},
];

/***
 * `getRandomQuote` uses random number generator * length of quotes array to return 1 object from quotes array.
***/
function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
} 

/***
 * `getRandomColor` extra credit
***/
function getRandomColor() {
 // gets random color by getting random hexadecimal number converted to a string. 
  var randomColor = '#'+Math.floor(Math.random()*16777216).toString(16);
  return randomColor;
}

/***
 * `printQuote` function displays a random quote via `getRandomQuote` function 
***/
function printQuote() {
  let phrase = getRandomQuote(); 
  let html = `
    <p class='quote'>${phrase.quote}</p>
    <p class='source'><b>${phrase.source}</b>
  `;
//  adds citation if available
  if (phrase.citation) {
    html += `<span class='citation'>${phrase.citation}</span>`;
  }
//  adds year if available
  if (phrase.year) {
    html += `<span class='year'>${phrase.year}</span>`;
  }
  // adds genre if available
  if (phrase.genre) {
    html += `<span class='genre'>, ${phrase.genre}</span>`;
  }
    `</p>`
 // displays new HTML inside 'quote-box'
    document.getElementById('quote-box').innerHTML = html;
 // changes color each time a new quote is displayed
    document.body.style.backgroundColor = getRandomColor();
  }
// get new quote/new color every 10 seconds
  setInterval(printQuote, 10000);
  setInterval(getRandomColor, 10000);

  /***
* click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);