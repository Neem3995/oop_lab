//=============================
//     Humble Beginnings
//          Part 1
//=============================

// creating our adventurer object
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],

  // adding Robins companion
  companion: {
    name: "Leo",
    type: "Cat",

    // giving Leo his own companion
    companion: {
      name: "Frank",
      type: "Flea",
      belongings: ["small hat", "sunglasses"],
    },
  },

  // creating a dice roll method
  // mod can add a bonus to the final roll
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;

    console.log(`${this.name} rolled a ${result}.`);
  },
};

// looping through Robins inventory
// this logs each item one at a time
for (const item of adventurer.inventory) {
  console.log(item);
}

// testing Robins roll method a few times
adventurer.roll();
adventurer.roll();
adventurer.roll(5);

//=============================
//        Class Fantasy
//           Part 2
//=============================

// creating the basic character class
// this will be the blueprint for all of our characters
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  // giving every character the ability to roll
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;

    console.log(`${this.name} rolled a ${result}.`);
  }
}

// creating a test character
const testCharacter = new Character("Test Character");

console.log(testCharacter);
testCharacter.roll();