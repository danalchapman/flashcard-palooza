const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = deck.currentDeck[0];
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {;
        this.turns += 1;
        this.currentCard = this.deck.currentDeck[this.turns];
    }
}

module.exports = Round;