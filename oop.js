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

// // creating a test character
// const testCharacter = new Character("Test Character");

// console.log(testCharacter);
// testCharacter.roll();

//=============================
//        Class Features
//           Part 3
//=============================

// Adventurer inherits everything from Character
class Adventurer extends Character {
  constructor(name, role) {
    // getting the name, health and inventory from Character
    super(name);

    // Adventurers have their own specialized roles
    this.role = role;

    // every adventurer starts off with these items
    this.inventory.push("bedroll", "50 gold coins");
  }

  // Adventurers can scout ahead
  scout() {
    console.log(`${this.name} is scouting ahead...`);

    // using the roll method from Character
    super.roll();
  }
}

// creating a test adventurer
const testAdventurer = new Adventurer("Tony", "Fighter");

console.log(testAdventurer);
testAdventurer.scout();

// creating Robin using the Character class
const robin = new Character("Robin");

// adding Robins inventory
robin.inventory = ["sword", "potion", "artifact"];

// creating Leo as another character
robin.companion = new Character("Leo");
robin.companion.type = "Cat";

// giving Leo his own companion
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";

// adding Franks belongings
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// checking all of the new character objects
console.log(robin);
console.log(robin.companion);
console.log(robin.companion.companion);

// now every character can roll
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();