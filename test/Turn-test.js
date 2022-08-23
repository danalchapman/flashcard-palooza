const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe.only('Turn', function() {
    let card, turn;

    beforeEach(function () {
        card = new Card(1, 'What is my favorite animal', ['Penguin', 'Wolf', 'Fox', 'Dog'], 'Fox');
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

    
})