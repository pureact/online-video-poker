<h3 align="center">
  ♣️ ♥️ online video poker ♠️ ♦️
</h3>

<p align="center">
  An online video poker web app, built using React and TypeScript.
</p>

---

## Preview

![preview gif](https://i.imgur.com/i7AZcqK.gif)

## Try It Out

Currently hosted at [naek.ca/projects/video-poker](https://naek.ca/projects/video-poker)

## Features

A web implementation of Jacks-or-Better Video Poker, hosted online and available on any browser.

As a player, you can:

- Read a beginner-friendly set of instructions, accessible through the **HELP** button
- Visually see your current bet, total credits, and payout amounts according to the poker hand rankings table
- Increase your bet by tapping the **BET ONE** button
- Set your bet to the maximum amount of 5 by clicking the **BET MAX** button
- Lower your bet through the **LOWER BET** button
- Tap on a card to choose to *hold* that card
- Click the **DRAW** button to play the round 🚀
- Press the **DEAL** button to start a new game and get dealt new cards
- Experience an simple-to-use modern interface for Video Poker

## Usage

First, you must have at least [nodejs and npm](https://nodejs.org/en/) installed.

Then clone and navigate to this directory to run `yarn install` or `npm install` depending on your vendor of choice.

To start the development server, use one of the following commands:

```bash
yarn start
# or
npm run start
```

To build for production, use one of the following commands:

```bash
yarn build
# or
npm run build
```

## Game Logic 🎴

### Overview

The game gives the user an initial hand. During this stage, they can choose to hold cards or change their bet. Once satisfied, the user will press draw. The back end receives the cards they chose to hold. New cards drawn from the deck replace the ones they did not hold. These cards get passed to the back end to determine the hand type. The back end uses a sieve-like pattern to determine a winning hand. It matches the hands in descending order. The first hand it attempts to match is the royal flush. The final hand is the jacks pair or better. The user will then win or lose money depending on their hand type. If they have less than jacks or better, they lose their bet. The rules of video poker determine how much the user wins. They can press deal to reset their hand and play another game.

### Card Selection

Video Poker draws cards from a standard deck of 52 cards. It chooses cards to draw by generating a random index from {0...N-1}, N being the current length of the deck. The deck removes the card at the index and adds it to the player's hand. Choosing any card has a 1/N probability. When choosing cards to replace the unheld cards, it draws from the same deck. The app resets the deck once a round concludes.

The game checks to see if the hand is any of the below from top to bottom.

- i.e. it checks to see if a hand is a royal flush before it does a straight flush.

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
- If the map has a face value that is J, Q, K, A that appears twice, it is jacks or better

## Hand Probabilities

```json
{
  "NOTHING": 79.3703,
  "JACKS OR BETTER": 12.9713,
  "TWO PAIR": 4.7669999999999995,
  "THREE OF A KIND": 2.1538999999999997,
  "STRAIGHT": 0.3519,
  "FLUSH": 0.213,
  "FULL HOUSE": 0.1463,
  "FOUR OF A KIND": 0.025,
  "STRAIGHT FLUSH": 0.0009,
  "ROYAL FLUSH": 0.00039999999999999996
}
```

## Design

The app designs were all done in [Figma](https://www.figma.com/file/diECkWun50GR0R6VSvh5Nu/Video-Poker).

![figma preview](https://i.imgur.com/cGd3E6A.png)

## Contributors

- 👨‍🎤 [matthewoneill](https://matthewoneill.ca): Game Logic, Frontend, QA
- 🧔 [naek2k](https://naek.ca): Backend, Frontend
- 🐱 [vinhvn](https://vinhnguyen.ca): Frontend, Design
