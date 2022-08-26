const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = deck.currentDeck[0];
        this.turns = 0;
        this.correctGuesses = [];
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
        const turn = new Turn(guess, this.currentCard);
        this.turns += 1;
        turn.evaluateGuess();
        const feedback = turn.giveFeedback();

        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id);
        } else {
            this.correctGuesses.push(this.currentCard.id);
        }
        
        this.currentCard = this.deck.currentDeck[this.turns];
        return feedback;
    }

    calculatePercentCorrect() {
        return Math.floor((this.correctGuesses.length / this.turns) * 100);
    }

    endRound() {
        const message = `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
        console.log(message);
        return message;
    }
}

module.exports = Round;