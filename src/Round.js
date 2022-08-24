// Round class should have these methods:
// returnCurrentCard: returns current card being played
// takeTurn: method that updates Turn count, evaluates guesses, gives feedback, stores ids of incorrect guesses
// --When a guess is made, new Turn instance created
// --Turn count updated (regardless of correct/incorrect)
// --next card becomes currentCard
// --guess is evaluated/recorded (incorrect guesses will be stored via the id) in an array called incorrectGuesses
// --feedback is returned (giveFeedback)
// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints "Round over! You answered <>% of the questions correctly!"

const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = deck.currentDeck[0];
        this.turns = 0;
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
        const turn = new Turn(guess, this.currentCard);
        this.turns++;
        this.currentCard = this.deck.currentDeck[this.turns];
    }
}

module.exports = Round;