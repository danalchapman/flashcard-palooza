const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe.only('Game', function() {
    let card, deck, round, game;

    beforeEach(function () {
        card = new Card(1, 'What is Dana\'s favorite animal', ['Penguin', 'Wolf', 'Fox', 'Dog'], 'Fox');
        deck = new Deck([card]);
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
        expect(game.currentRound).to.deep.equal(round);
    });

    describe('start', function() {

        it('should create cards', function() { // should create cards
            game.start();
            expect(game.currentRound.currentCard.id).to.equal(1);
            expect(game.currentRound.currentCard.question).to.equal('What allows you to define a set of related information using key-value pairs?');
            expect(game.currentRound.currentCard.answers).to.deep.equal(["object", "array", "function"]);
            expect(game.currentRound.currentCard.correctAnswer).to.equal('object');
        });

        it('should add cards to the deck', function() { // should add cards to a deck
            game.start();
            expect(game.currentRound.deck.length).to.equal(30);
        });

        it('should create a new round using deck', function() { // should create a new round with the deck
            game.start();
            expect(game.currentRound).is.an.instanceOf(Round);
        });
    })
})