from random import randint


class Card:
    def __init__(self, face_value, suit):
        self.face_value = face_value
        self.suit = suit

    def print(self):
        print("{} {}".format(self.face_value, self.suit))


class Deck:
    def __init__(self):
        num_face_values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        royal_face_values = ["J", "Q", "K", "A"]
        suits = ["Hearts", "Clubs", "Spades", "Diamonds"]

        self.deck = [Card(num, suit) for suit in suits for num in num_face_values] + [
            Card(num, suit) for suit in suits for num in royal_face_values
        ]

    def reset_deck(self):
        self.__init__()

    def get_card(self):
        card_index = randint(0, len(self.deck) - 1)

        return self.deck.pop(card_index)

    def print(self):
        for card in self.deck:
            card.print()


class Hand:
    def __init__(self, initial_hand):
        self.hand = initial_hand
        self.hand_size = len(self.hand)
        self.replaced_cards = set()

    def replace_card(self, index, card):
        if index not in self.replaced_cards:
            self.replaced_cards.add(index)
            self.hand[index] = card

        return self

    def reset_hand(self, new_hand):
        self.__init__(new_hand)

    def get_replaced_cards(self):
        return list(self.replaced_cards)

    def print(self):
        for card in self.hand:
            card.print()


class VideoPoker:
    def __init__(self, starting_money):
        self.money = starting_money
        self.deck = Deck()
        self.hand = Hand()
