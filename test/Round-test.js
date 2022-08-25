const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe.only('Round', function() {
    let card, card1, deck, round, turn, turn1;

    beforeEach(function () {
        card = new Card(1, 'What is Dana\'s favorite animal', ['Penguin', 'Wolf', 'Fox', 'Dog'], 'Fox');
        card1 = new Card(2, 'What TTRPG does Dana play the most', ['D&D', 'Pathfinder', 'Thirsty Sword Lesbians', "Vampire: the Masquerade"], 'D&D');
        card2 = new Card(3, 'What is Dana\s favorite color', ['red', 'black', 'purple', 'grey'], 'red');
        deck = new Deck([card, card1, card2]);
        round = new Round(deck);
        turn = new Turn('Fox', card);
        turn1 = new Turn('Wolf', card);
    })

    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        expect(round).to.be.an.instanceOf(Round);
    });

    it('should return current card', function() {
        expect(round.currentCard).to.deep.equal(card);
    });

    describe('takeTurn', function() {

        it('should instantiate an instance of Turn', function() {
            expect(turn).to.be.an.instanceOf(Turn);
        });

        it('should increase the turn count by one', function() {
            expect(round.turns).to.equal(0);
            round.takeTurn('Fox');
            expect(round.turns).to.equal(1);
        });

        it('should update the next card to be current card', function() {
            expect(round.currentCard.id).to.equal(1);
            round.takeTurn('Fox');
            expect(round.currentCard.id).to.equal(2);
        });

        it('should evaluate the current guess', function() {
            expect(turn.evaluateGuess()).to.equal(true);
            expect(turn1.evaluateGuess()).to.equal(false);
        });

        it('should store card id in incorrect guesses array', function() {
            round.takeTurn('Wolf');
            expect(round.incorrectGuesses).to.include(card.id)
        });

        it('should return feedback after guess', function() {
            const round = new Round(deck);
            expect(round.takeTurn('Fox')).to.equal('Correct!');
            expect(round.takeTurn('Wolf')).to.equal('Incorrect!');
        });

        describe('calculatePercentCorrect', function() {

            it('should return the percentage of correct guesses', function() {
                round.takeTurn('Wolf');
                round.takeTurn('D&D');
                round.takeTurn('red');
                expect(round.calculatePercentCorrect()).to.equal(66);
            });

            describe('endRound', function() {

                it('should print a message with the correct guess percentage', function() {
                    round.takeTurn('Wolf');
                    round.takeTurn('D&D');
                    round.takeTurn('red');
                    expect(round.endRound()).to.equal('Round over! You answered 66% of the questions correctly!');
                });
            });
        });
    });
});