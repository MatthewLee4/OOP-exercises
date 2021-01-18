class Card {
    constructor(point, suit) {
        this.point = point;
        this.suit = suit;
    }
    getImageUrl() {
        console.log(`images/${this.point}_of_${this.suit}.png`)
    }
}

let myCard = new Card(5, 'diamonds');
console.log(myCard)
// Card { point: 5, suit: 'diamonds' }


return (myCard.getImageUrl())
// 'images/5_of_diamonds.png'

