interface Card {
    face_value: string;
    suit: string;
}

class VideoPoker {
    hand: Card[];
    deck: Card[];
    money: number;
    bet: number;

    constructor(money: number) {
        this.deck = this.generate_deck()
        this.hand = []
        this.money = money
        this.bet = 10

        for (let i = 0; i < 5; i++) {
            this.hand.push(this.get_card())
        }
    }

    generate_deck(): Card[] {
        let deck: Card[] = []
        let face_values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
        let suits: string[] = ["H", "C", "S", "D"]

        for (let suit of suits) {
            for (let face_value of face_values) {
                deck.push({ face_value, suit })
            }
        }

        return deck
    }

    get_card(): Card {
        let card_index: number = Math.floor((Math.random() * this.deck.length))
        let card = this.deck.splice(card_index, 1)[0]

        return card
    }

    get_hand(): { hand: Card[], face_values: string[], suits: string[] } {
        let face_values: string[] = []
        let suits: string[] = []

        for (let card of this.hand) {
            face_values.push(card.face_value)
            suits.push(card.suit)
        }

        return { hand: this.hand, face_values, suits }
    }

    is_royal_flush(): string {
        let hand = this.get_hand()
        hand.face_values.sort()
        hand.suits = [...new Set(hand.suits)]
        let royal_faces: string[] = ["10", "A", "J", "K", "Q"]
        if (royal_faces == hand.face_values && hand.suits.length == 1) {
            return "Royal Flush"
        }
        return ""
    }

    is_straight_flush(): string {
        return "Straight Flush"
    }

    is_straight(): string {
        return "Straight"
    }

    check_hand(): string {
        let is_hands: Function[] = [this.is_royal_flush.bind(this), this.is_straight_flush.bind(this)]

        for (let is_hand of is_hands) {
            let hand_type = is_hand();
            if (hand_type) {
                return hand_type
            }
        }

        return ""
    }

    manage_bet(hand_type: string): { msg: string, status: string } {
        let status: string = "won"
        return { msg: `You ${status} ${this.bet} dollars.`, status }
    }

    play(keep: number[]): { msg: string, status: string } {
        let card_indice: number[] = [0, 1, 2, 3, 4]
        card_indice = card_indice.filter(num => !(keep.includes(num)))
        this.get_hand()

        for (let index in card_indice) {
            this.hand[index] = this.get_card()
        }

        let hand_type: string = this.check_hand()

        return this.manage_bet(hand_type)
    }
}