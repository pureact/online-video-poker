type suit = "H" | "D" | "C" | "S"
type face_value = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14"

interface Card {
    face_value: face_value;
    suit: suit;
}

class VideoPoker {
    hand: Card[];
    deck: Card[];
    money: number;
    bet: number;

    constructor(money: number) {
        console.log("RECONSTRUCTED")
        this.deck = this.generate_deck()
        this.hand = []
        this.money = money
        this.bet = 1

        for (let i = 0; i < 5; i++) {
            this.hand.push(this.get_card())
        }

        // royal flush 
        //this.hand = [{face_value: "10", suit: "H"}, {face_value: "14", suit: "H"}, {face_value: "11", suit: "H"}, {face_value: "12", suit: "H"}, {face_value: "13", suit: "H"}];
        // straight flush 
        //this.hand = [{face_value: "5", suit: "H"}, {face_value: "6", suit: "H"}, {face_value: "8", suit: "H"}, {face_value: "7", suit: "H"}, {face_value: "9", suit: "H"}];
        // four of a kind
        //this.hand = [{face_value: "11", suit: "H"}, {face_value: "11", suit: "D"}, {face_value: "11", suit: "C"}, {face_value: "11", suit: "S"}, {face_value: "7", suit: "D"}];
        // full house
        //this.hand = [{face_value: "10", suit: "H"}, {face_value: "10", suit: "D"}, {face_value: "10", suit: "S"}, {face_value: "9", suit: "C"}, {face_value: "9", suit: "D"}];
        // Flush
        //this.hand = [{face_value: "4", suit: "S"}, {face_value: "11", suit: "S"}, {face_value: "8", suit: "S"}, {face_value: "2", suit: "S"}, {face_value: "9", suit: "S"}];
        // Straight
        //this.hand = [{face_value: "9", suit: "C"}, {face_value: "8", suit: "D"}, {face_value: "7", suit: "S"}, {face_value: "6", suit: "D"}, {face_value: "5", suit: "H"}];
        // Three of a kind
        //this.hand = [{face_value: "7", suit: "C"}, {face_value: "7", suit: "D"}, {face_value: "7", suit: "S"}, {face_value: "13", suit: "C"}, {face_value: "3", suit: "D"}];
        // Two pair
        //this.hand = [{face_value: "4", suit: "C"}, {face_value: "4", suit: "S"}, {face_value: "3", suit: "C"}, {face_value: "3", suit: "D"}, {face_value: "12", suit: "C"}];
        // Pair
        //this.hand = [{face_value: "14", suit: "H"}, {face_value: "14", suit: "D"}, {face_value: "8", suit: "C"}, {face_value: "4", suit: "S"}, {face_value: "7", suit: "H"}];
    }

    generate_deck(): Card[] {
        let deck: Card[] = []
        let face_values: face_value[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
        let suits: suit[] = ["H", "C", "S", "D"]

        for (let suit of suits) {
            for (let face_value of face_values) {
                deck.push({ face_value, suit })
            }
        }


        return deck
    }

    reset_hand() {
        this.hand = []
        this.deck = this.generate_deck()
        for (let i = 0; i < 5; i++) {
            this.hand.push(this.get_card())
        }
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
        let royal_faces: string[] = ["10", "11", "12", "13", "14"]
        if (royal_faces.join("") === hand.face_values.join("") && hand.suits.length === 1) {
            return "ROYAL FLUSH"
        }
        return ""
    }

    is_straight_flush(): string {
        let hand = this.get_hand();
        hand.face_values.sort();
        hand.suits = [...new Set(hand.suits)];

        for (let i = 0; i < hand.face_values.length - 1; i++) {
            if (1 + parseInt(hand.face_values[i]) !== parseInt(hand.face_values[i + 1])) {
                return ""
            }
        }
        return hand.suits.length === 1 ? "STRAIGHT FLUSH" : ""
    }

    is_four_of_a_kind(): string {

        let hand = this.get_hand();
        let face_counts: Record<string, number> = {}
        for(let i = 0; i < hand.face_values.length; i++){
            if(hand.face_values[i] in face_counts){
                face_counts[hand.face_values[i]] += 1;
                if(face_counts[hand.face_values[i]] === 4){
                    return "FOUR OF A KIND";
                }
            }
            else if(!(hand.face_values[i] in face_counts)){
                face_counts[hand.face_values[i]] = 1;
            }
        }

        return "";
    }

    is_full_house(): string {
        let hand = this.get_hand();
        hand.face_values = [...new Set(hand.face_values)];

        return hand.face_values.length === 2 ? "FULL HOUSE" : "";
    }

    is_flush(): string {
        let hand = this.get_hand();
        hand.suits = [...new Set(hand.suits)];

        return hand.suits.length === 1 ? "FLUSH" : "";
    }

    is_straight(): string {
        let hand = this.get_hand();
        hand.face_values.sort();
        for (let i = 0; i < hand.face_values.length - 1; i++) {
            if (1 + parseInt(hand.face_values[i]) !== parseInt(hand.face_values[i + 1])) {
                return ""
            }
        }
        return "Straight"
    }

    is_three_of_a_kind(): string {
        let hand = this.get_hand();
        let face_counts: any = {}
        hand.face_values.sort();
        for (let face_value of hand.face_values) {
            if (face_value in face_counts) {
                face_counts[face_value] += 1
            } else {
                face_counts[face_value] = 1
            }
        }
        return Object.values(face_counts).sort().slice(-1)[0] === 3 ? "THREE OF A KIND" : ""
    }

    is_two_pair(): string {
        let hand = this.get_hand();
        hand.face_values = [...new Set(hand.face_values)];
        return hand.face_values.length === 3 ? "TWO PAIR" : ""
    }

    is_jacks_or_better(): string {
        let hand = this.get_hand();
        let face_counts: Record<string, number> = {}
        for(let i = 0; i < hand.face_values.length; i++){
            if(hand.face_values[i] in face_counts){
                face_counts[hand.face_values[i]] += 1;
                if(face_counts[hand.face_values[i]] === 2 && parseInt(hand.face_values[i]) > 10){
                    return "JACKS OR BETTER";
                }
            }
            else if(!(hand.face_values[i] in face_counts)){
                face_counts[hand.face_values[i]] = 1;
            }
        }

        return "";
    }

    check_hand(): string {
        let is_hands: Function[] = [this.is_royal_flush.bind(this), this.is_straight_flush.bind(this), this.is_four_of_a_kind.bind(this),
        this.is_full_house.bind(this), this.is_flush.bind(this), this.is_straight.bind(this), this.is_three_of_a_kind.bind(this),
        this.is_two_pair.bind(this), this.is_jacks_or_better.bind(this)]

        for (let is_hand of is_hands) {
            let hand_type = is_hand();
            if (hand_type) {
                return hand_type
            }
        }

        return ""
    }

    manage_bet(hand_type: string) {
        const labels = ["ROYAL FLUSH", "STRAIGHT FLUSH", "FOUR OF A KIND", "FULL HOUSE", "FLUSH", "STRAIGHT", "THREE OF A KIND", "TWO PAIR", "JACKS OR BETTER"]
        const ratios = [250, 50, 25, 9, 6, 4, 3, 2, 1]
        if (this.bet === 5) ratios[0] = 800
        console.log(hand_type)
        let gained = hand_type ? ratios[labels.indexOf(hand_type)]*this.bet : -1*this.bet
        
        return { gained, hand_type }
    }

    set_bet(bet: number) {
        this.bet = bet;
        return this.bet
    }

    get_bet() {
        return this.bet;
    }

    inc_bet() {
        if(this.bet < 5) {
            this.bet += 1;
        }
        console.log(this.bet)
        return this.bet
    }

    dec_bet() {
        if(this.bet > 1) {
            this.bet -= 1;
        }
        console.log(this.bet)
        return this.bet
    }

    get_money() {
        return this.money;
    }

    play(keep: number[]) {
        let card_indice: number[] = [0, 1, 2, 3, 4]
        card_indice = card_indice.filter(num => !(keep.includes(num)))

        for (let index in card_indice) {
            this.hand[index] = this.get_card()
        }

        let hand_type: string = this.check_hand()

        // calculate winnings

        return this.manage_bet(hand_type)
    }
}


export default VideoPoker

// let vp = new VideoPoker(500);
// console.log(vp.play([0, 1, 2, 3, 4]));