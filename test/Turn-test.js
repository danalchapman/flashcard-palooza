const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe.only('Turn', function() {
    let card, turn;

    beforeEach(function () {
        card = new Card(1, 'What is Dana\'s favorite animal', ['Penguin', 'Wolf', 'Fox', 'Dog'], 'Fox');
        turn = new Turn('Fox', card);
    });

    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function () {
        expect(turn).to.be.an.instanceOf(Turn)
    });

    it('should accept two arguments', function() {
        expect(turn.guess).to.equal('Fox');
        expect(turn.card).to.equal(card);
    });

    it('should return user\'s guess', function() {
        expect(turn.returnGuess()).to.equal('Fox');
    });

    it('should return the card', function() {
        expect(turn.returnCard()).to.equal(card);
    });

    describe('Turn.evaluateGuess', function() {

        it('should return a boolean', function() {
            expect(turn.evaluateGuess()).to.be.a('boolean');
        });

        it('should return true when answer is correct', function() {
            expect(turn.evaluateGuess()).to.equal(true);
        });

        it('should return false when the answer is incorrect', function() {
            const turn = new Turn('Wolf', card);
            expect(turn.evaluateGuess()).to.equal(false);
        });
    });

    describe('Turn.giveFeedback', function() {

        it('should return a string', function() {
            expect(turn.giveFeedback()).to.be.a('string');
        });

        it('should return a string of correct if the guess is correct', function() {
            expect(turn.giveFeedback()).to.equal('Correct!');
        });

        it('should return a string of incorrect if the guess is incorrect', function() {
            const turn = new Turn('Wolf', card);
            expect(turn.giveFeedback()).to.equal('Incorrect!');
        });
    })
})