class Card {
    constructor(point, suit) {
        this.point = point;
        this.suit = suit;
    }
}

class Hand {
    constructor() {
        this.hand = [];
    }
    addCard(card) {
        this.hand.push(card);
    }
    getPoints() {
        let addPoints = 0
        this.hand.map((card) => {
            //11 is jack, 12 is queen, 13 is king
            if (card.point >= 10) {
                card.point = 10
            }
            return addPoints += card.point;
        });
        return addPoints;
    };
}


var myHand = new Hand()
myHand.addCard(new Card(5, 'diamonds'))
myHand.addCard(new Card(13, 'spades'))
myHand.getPoints()
console.log(myHand);
console.log(myHand.getPoints())