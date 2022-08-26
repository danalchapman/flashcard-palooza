const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');

class Game {
  constructor(round) {
    this.currentRound = round;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const cards = prototypeQuestions.map(item => {
      const card = new Card(item.id, item.question, item.answers, item.correctAnswer);
      return card;
    });
    const deck = new Deck(cards);
    this.currentRound = new Round(deck)
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
    return cards;
  }
}

module.exports = Game;