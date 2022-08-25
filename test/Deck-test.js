const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

    it('should be a function', function() {
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', function() {
        const deck = new Deck();
        expect(deck).to.be.an.instanceOf(Deck);
    })

    it('should hold an array of cards', function() {
        const card1 = new Card(1, 'What is Dana\'s favorite animal', ['Penguin', 'Wolf', 'Fox', 'Dog'], 'Fox');
        const card2 = new Card(2, 'What TTRPG does Dana play the most', ['D&D', 'Pathfinder', 'Thirsty Sword Lesbians', "Vampire: the Masquerade"], 'D&D');
        const deck = new Deck([card1, card2]);
        expect(deck.currentDeck).to.be.an('array');
        expect(deck.currentDeck[0]).to.deep.equal(card1);
        expect(deck.currentDeck[1]).to.deep.equal(card2);
    });

    it('should know how many cards are in the deck', function() {
        const card = new Card(1, 'What is Dana\'s favorite animal', ['Penguin', 'Wolf', 'Fox', 'Dog'], 'Fox');
        const deck = new Deck([card]);
        expect(deck.countCards()).to.equal(deck.currentDeck.length);
    });
})