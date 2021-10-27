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
    quote: 'this is quote 1', 
    source: 'alex paul, 1999'},
  {
    quote: 'this is quote 2', 
    source: 'hanna may, 2000'},
  {
    quote: 'this is quote 3', 
    source: 'zac efron, high school musical 2'},
  {
    quote: 'this is quote 4', 
    source: 'vanessa hudgens, high school musical'},
  {
    quote: 'this is quote 5', 
    source: 'alex paul, 1989'},
  {
    quote: 'this is quote 6', 
    source: 'alex paul, 1979'}
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
  let num = Math.floor(Math.random() * quotes.length);
  return quotes[num];
} 

console.log(getRandomQuote());




/***
 * `printQuote` function
***/


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);