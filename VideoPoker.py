from random import randint


class Card:
    def __init__(self, face_value, suit):
        self.face_value = face_value
        self.suit = suit

    def print(self):
        print("{} {}".format(self.face_value, self.suit))

class Deck:
    def __init__(self):
        self.deck = []
        self.reset_deck()

    def reset_deck(self):
        num_face_values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        royal_face_values = ["J", "Q", "K", "A"]
        suits = ["Hearts", "Clubs", "Spades", "Diamonds"]

        self.deck = [Card(num, suit) for suit in suits for num in num_face_values] + [Card(num, suit) for suit in suits for num in royal_face_values]

    def get_card(self):
        card_index = randint(0, len(self.deck)-1)

        return self.deck.pop(card_index)

    def print(self):
        for card in self.deck:
            card.print()

class Hand:
    def __init__(self, hand_size):
        self.hand = []
        self.hand_size = hand_size

    def withdraw_card(self, index=0):
        self.hand.pop(index)

        return self

    def add_card(self, card):
        if len(self.hand) < self.hand_size:
            self.hand.append(card)

        return self

    def print(self):
        for card in self.hand:
            card.print()


class VideoPoker:
    def __init__(self, starting_money):
        self.money = starting_money
        self.deck = Deck()
        self.hand = Hand()
