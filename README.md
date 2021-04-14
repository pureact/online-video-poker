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

### Royal Flush

- Sort the hand's face values array
- Make a set of the hands suits
- Check if the hands face value

## Contributors

- [naek2k](https://naek.ca)
- [vinhvn](https://vinhnguyen.ca)
- [matthewoneill](https://matthewoneill.ca)
