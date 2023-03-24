/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const soda = {
  flavor: "cola",
  carbonated: true,
  changeFlavor: function (newFlavor) {
    this.flavor = newFlavor;
  },
  toggleCarbonated: function (carbStatus){
    this.carbonated = carbStatus;
  }
}

const can = {
  name: "Metal Can",
  volume: 250,
  color: "red",
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  changeColor: function (newColor) {
    this.color = newColor;
  },
  contents: soda
}

can.contents.changeFlavor("watermelon")

console.log("Color of can:", can.color)
console.log("Flavor of contents:", can.contents.flavor)