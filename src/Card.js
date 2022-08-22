class Card {
    constructor(cardId, cardQuestion, cardAnswers, correctCardAnswer) {
        this.id = cardId;
        this.question = cardQuestion;
        this.answers = cardAnswers;
        this.correctAnswer = correctCardAnswer;
    }
}

module.exports = Card;