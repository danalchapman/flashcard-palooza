const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe.only('Game', function() {
    let card, deck, turn, round;

    beforeEach(function () {
        card = new Card(1, 'What is Dana\'s favorite animal', ['Penguin', 'Wolf', 'Fox', 'Dog'], 'Fox');
        deck = new Deck([card]);
        turn = new Turn('Fox', card);
        round = new Round(deck);
        game = new Game(round);
    });

    it('should be a function', function() {
        expect(Game).to.be.a('function');
    });

    it('should be an instance of Game', function() {
        expect(game).to.be.an.instanceOf(Game);
    });

    it('should keep track of the current round', function() {
        expect(game.currentRound).to.equal(round.turns);
    });

    describe('start', function() {

        it('should be a function', function() {
            expect(game.start).to.be.a('function');
        });

        it.skip('should create cards', function() { // should create cards
            
        });

        it.skip('should add cards to the deck', function() { // should add cards to a deck

        });

        it.skip('should create a new round', function() { // should create a new round with the deck

        });

        it.skip('should print a welcome message that includes the deck count', function() { // should invoke printMessage

        });

        it.skip('should print the first question from the deck', function() { // should invoke printQuestion

        })
    })
})