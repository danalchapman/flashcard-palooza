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

    takeTurn(guess) {
        const turn = new Turn(guess, this.currentCard);
        this.turns += 1;
        turn.evaluateGuess();
        
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id);
        }
        
        this.currentCard = this.deck.currentDeck[this.turns];
    }
}

module.exports = Round;