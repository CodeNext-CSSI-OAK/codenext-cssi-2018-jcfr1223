// Author: FirstName LastName
let readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by FirstName LastName");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");
let enterHouse = readline.question("Will you enter the house? (yes or no) ");
if(enterHouse === "y" || enterHouse === "yes") {
  console.log("AS you enter the house, you faintly here a voice saying'Leave now while you can'");
  let leaveHouse = readline.question("Do you exit the house? ");
  if(leaveHouse === "n" || leaveHouse === "no") {
    console.log("You ignore the voice and walk down the main hallway. As you reach the middle of the hallway you notice a door");
    let door1 = readline.question("Do you enter the room? ");
    if(door1 === "y" || door1 === "yes") {
      console.log("You walk into the room and you notice a doll inside of a glass case ")
      let doll = readline.question("Do you investigate the doll case ");
      if (doll === "y" || doll === "yes") {
        console.log(
          "You open up the case and dircover a note inside.",
          "The front says says: 'To: Margaret, From: Jason'",
          "The back says: 'I hope you like this doll I got you. I got it at a antique shop because it reminded me o-'",
          "It cuts off there for there is a stain that covers the rest of the note. It's bright blue.",
          "You put the note back inside the case and close it.",
          "You exit the room.");
          let contRoom = readline.question("Do you coninue to look inside the room? ");
          if (contRoom === "y" || contRoom === "yes"){
            console.log(
              "As you contiue looking through the room, you notice a beautiful painting and decide you want to take it with you.",
              "You take it off the wall and notice a whole in the wall where the painting was",
              "It looks like a button");
              let button1 = readline.question("Do you press the button? ");
          }else {
            console.log(
              "You exit the room and walk further down the hallway where you first were",
              "You go all the way down the hall and go up the stairs, completley ignoring a door beside you opening.",
              "You are now on the second floor of the house.",
              "In fron of you there is a door. To your right is a black wall. To your left is a hallway leading further into the second floor");
              let floor2 = readline.question("Do you go through the door or the go left? ");
              if (floor2 === "door") {
                console.log("You go through the door and fall down a trap door! You're stuck here with no way out and die of starvation :)");
              }else {
                console.log(
                  "You go left and deeper into the second floor.",
                  ""
                )
              }
          }
    }else if(door1 === "n" || door1 === "no"){
      console.log("You walk past the room and coninue down the hallway. You find yourself at a fork in the halls. ")
      let fork1 = readline.question("Do you go left or right? ")
      if (fork1 === "left" || "l") {

      }else {

      }
      }
    }
  }
} else {
  console.log("Thank you for playing!");

}
