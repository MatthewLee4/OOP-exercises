class Deck {
    constructor() {
        this.deck = [];
        this.point = ["1", "2"," 3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]
        this.suit = ["spades", "clubs", "diamonds", "hearts"];

        for (let i=0; i < this.point.length; i++){
            for (let j=0; j < this.suit.length; j++) {
                this.deck.push(
                    {
                        point: this.point[i],
                        suit: this.suit[j]
                    }
                )
            }
        }

    }
    draw() {
        if(this.deck.length === 0){
            return console.log("No cards left in the deck.");
        } else {
            var randomCard = this.deck[Math.floor(Math.random() * this.deck.length)];
            const index = this.deck.indexOf(randomCard);
            if (index > -1) {
            this.deck.splice(index, 1);
             }
        console.log(randomCard);
        }
    }
    shuffle() {
        if (this.deck.length == 0) {
            return;
        } else {
            this.deck.sort(() => Math.random() -.5);
        }
    }
    numCardsLeft() {
        if (this.deck.length == 0) {
            return;
        } else {
            console.log(this.deck.length);
        }
    }
}

var myDeck = new Deck()
console.log(myDeck);
myDeck.shuffle();
console.log(myDeck);
myDeck.draw();
myDeck.draw();
myDeck.draw();
myDeck.numCardsLeft();