# online video poker

An online video poker web app built using React, TypeScript.

## Preview

TBD

## Try It Out

Currently hosted at [somewebsite.com/poker](https://naek.ca)

## Features

TBD

## Game Logic 🎴

The game checks to see if the hand is any of the below from top to bottom.
For example it checks to see if a hand is a royal flush before it does a straight flush

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
