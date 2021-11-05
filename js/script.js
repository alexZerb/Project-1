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
    source: 'The Beauty in Breaking',
    citation: 'Michelle Harper',
    year: '2020',
    genre: 'Memoir',
  },
  {
    quote: "To choose doubt as a philosophy of life is akin to choosing immobility as a means of transportation.", 
    source: 'Life of Pi', 
    citation: 'Yann Martel',
    year: '2001',
    genre: 'Fiction',
  },
  {
    quote: "If you don't understand, ask questions. If you're uncomfortable about asking questions, say you are uncomfortable about asking questions and then ask anyway.", 
    source: 'Americanah', 
    citation: 'Ngozi Adichie',
    year: '2013',
    genre: 'Fiction',
  },
  {
    quote: 'When you start to love yourself for the first time, when you start to truly emrace who you are - flaws and all - your scars start to look a lot more like beauty marks', 
    source: 'Sissy', 
    citation: 'Jacob Tobia',
    genre: 'Memoir',
  },
  {
    quote: `What's the point of having a voice if you're gonna be silent in those moments you shouldn't be?`, 
    source: 'The hate you give', 
    citation: 'Angie Thomas',
    year: '2017',
  },
  {
    quote: "There is no greater agony than bearing an untold story inside you.",
    source: 'I know why the caged bird sings', 
    citation: 'Maya Angelou', 
    year: '1969', 
  },
  {
    quote: "You never really understand a person until you consider things from his point of view...Until you climb inside of his skin and walk around in it.",
    source: 'To kill a Mockingbird', 
    citation: 'Harper Lee',
    year:'1960',
    genre:'Fiction' 
  },
  {
    quote:`When you make loving others the story of your life, there's never a final chapter, because the legacy continues. You lend your light to one person, and he or she shines it on another and another and another.`,
    source:'What I know for sure', 
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

function getColor() {


}
/***
 * `printQuote` function displays a random quote via `getRandomQuote` function 
***/
function printQuote() {
  let phrase = getRandomQuote(); 
  let html = `
    <p class='quote'>${phrase.quote}</p>
    <p class='source'>${phrase.source}
  `;
//  conditional statement to add citation to HTML
  if (phrase.citation) {
    html += `<span class='citation'>${phrase.citation}</span>`;
  }
//  conditional statement to add year to HTML
  if (phrase.year) {
    html += `<span class='year'>${phrase.year}</span>`;
  }
  if (phrase.genre) {
    html += `<span class='genre'>, ${phrase.genre}</span>`;
  }
    `</p>`
 // displays new HTML inside 'quote-box'
    document.getElementById('quote-box').innerHTML = html;
  }
// timers to get new quote/new color every 5000 miliseconds
  setInterval(printQuote, 10000);
  setInterval(getColor, 10000);

  /***
* click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);