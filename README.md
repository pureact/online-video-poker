# online video poker

An online video poker web app built using React, TypeScript.

## Preview

TBD

## Try It Out

Currently hosted at [somewebsite.com/poker](https://naek.ca)

## Features

TBD

## Game Logic 🎴

The game gives the user an initial hand. During this stage, they can choose to hold cards or change their bet. Once satisfied, the user will press draw. The back end receives the cards they chose to hold. New cards drawn from the deck replace the ones they did not hold. These cards get passed to the back end to determine the hand type. The back end uses a sieve-like pattern to determine a winning hand. It matches the hands in descending order. The first hand it attempts to match is the royal flush. The final hand is the jacks pair or better. The user will then win or lose money depending on their hand type. If they have less than jacks or better, they lose their bet. The rules of video poker determine how much the user wins. They can press deal to reset their hand and play another game.

The game checks to see if the hand is any of the below from top to bottom.
i.e. it checks to see if a hand is a royal flush before it does a straight flush.

This part is important since a straight flush functions off the basis that it knows the hand is not a royal flush.


### Royal Flush

- Sort the hand's face values array (low to high)
- Make a set of the hands suits
- Check if the hand's face values are a royal straight (10, J, Q, K, A)
- Check if the set only has one suit
- If both of those cases are true then the hand is a royal flush

### Straight Flush

- Sort the hand's face values array (low to high)
- Make a set of the hands suits
- Check that the sorted face values increase by 1 each time (2,3,4,5,6)
- Check if the set only has one suit
- If both of those cases are true then the hand is a straight flush

### Four of a Kind

- Create a map for the {face_value: # of times it appears in the hand}
- If a card appears four times then it is a four of a kind

### Full House

- Create a set of the hands face values
- If there are only two elements in the set then it's a full house

### Flush

- Create a set of the hand's suits
- If there is only one item in the set then it's a flush

### Straight

- Sort the hand's face values array (low to high)
- Make a set of the hands suits
- Check that the sorted face values increase by 1 each time (2,3,4,5,6)
- If the above case is true then it's a straight

### Three of a Kind

- Count the face values of each card in the hand
- If there is 3 of a single face value, it is a three of a kind

### Two Pair

- Create a set of the hand's face values
- If the set has three items then the hand has a two pair

### Jacks or Better

- Create a map for the {face_value: # of times it appears in the hand}
- If the map has a face value that is 10, J, Q, K, A that appears twice, it is jacks or better

## Contributors

- [naek2k](https://naek.ca)
- [vinhvn](https://vinhnguyen.ca)
- [matthewoneill](https://matthewoneill.ca)
