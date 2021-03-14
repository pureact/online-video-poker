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

    generate_deck() {
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

    get_card() {
        let card_index: number = Math.floor((Math.random() * this.deck.length))
        let card = this.deck.splice(card_index, 1)[0]

        return card
    }

    is_royal_flush() {
        return "Royal Flush"
    }

    is_straight_flush() {
        return "Straight Flush"
    }

    check_hand() {
        let is_hands: Function[] = [this.is_royal_flush, this.is_straight_flush]

        for (let is_hand of is_hands) {
            let hand_type = is_hand();
            if (hand_type) {
                return hand_type
            }
        }

        return ""
    }

    manage_bet(hand_type: string) {
        let status: string = "won"
        return { "msg": `You ${status} ${this.bet} dollars.`, status }
    }

    play(keep: number[]) {
        let card_indice: number[] = [0, 1, 2, 3, 4]
        card_indice = card_indice.filter(num => !(keep.includes(num)))

        for (let index in card_indice) {
            this.hand[index] = this.get_card()
        }

        let hand_type: string = this.check_hand()

        return this.manage_bet(hand_type)
    }
}