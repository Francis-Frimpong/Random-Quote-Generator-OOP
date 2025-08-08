class Quote {
  constructor(text, author) {
    this.text = text;
    this.author = author;
  }
}

class QuoteGenerator {
  constructor(quotes, displayElement) {
    this.quotes = quotes;
    this.displayElement = displayElement;
  }

  getRandomQuote() {
    const quoteIndex = Math.floor(Math.random() * this.quotes.length);
    const randomQuote = this.quotes[quoteIndex];

    return new Quote(randomQuote.quote, randomQuote.author);
  }

  displayQuote() {
    const quote = this.getRandomQuote();
    this.displayElement[0].textContent = quote.text;
    this.displayElement[1].textContent = quote.author;
  }
}

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
];

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");

const quote = new QuoteGenerator(quotes, [quoteText, quoteAuthor]);
newQuoteBtn.addEventListener("click", () => quote.displayQuote());

// console.log(quote.getRandomQuote());
