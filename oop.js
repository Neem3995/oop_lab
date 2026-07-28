//=============================
//     Humble Beginnings
//          Part 1
//=============================

// creating our adventurer object
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
};

// looping through Robins inventory
// this logs each item one at a time
for (const item of adventurer.inventory) {
  console.log(item);
}