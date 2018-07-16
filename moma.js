// Author: FirstName LastName
let readline = require("readline-sync");
let suspicion = 0;
let clues = 0;

console.log();
console.log("*****************************************************************");
console.log("                          SFMOMA Heist");
console.log("                 A game by FirstName LastName");
console.log("*****************************************************************");
console.log("You are standing in front of the San Francsico Museum of Modern Art.");
console.log("You are here to steal The Son of Man by Rene Magritte because it's your mom's birthday tommorow and in exchnage for the painting you're getting 1st class tickets to Paris <3.");
let enterMoma = readline.question("Will you enter the MOMA? (yes or no) ");
if(enterMoma === "y" || enterMoma === "yes") {
  console.log("By entering the MOMA you are accepting this heist.");
  let confirm = readline.question("Are you sure you want to continue? ");
  if (confirm === "yes" || confirm === "y") {
    //You entered the MOMA
    console.log("As you enter the MOMA, you'll find yourslef in the a big room. Up ahead to your left is the check in for coats. Up ahead are the stairs to the lobby and ticket booths.");
    let blendIn = readline.question("Do you check in your coat and risk being recognized but lowering immediate suspicion or go up the stairs and raise suspicion? (eneter coat or stairs)");
    if (blendIn === "coat") {
      //You decide to blend in for now
      console.log("You decide to blend in with the other people and go out your coat away. The boy at the counter asks what you came to see.");
      let boy1 = readline.question("Do you tell him you're here to see the Rene Magritte exhibit or stumble on your words and say that you'll see whatever you can? (enter rene or whatever)");
      if (boy1 === "rene") {
        //You tell the boy you're here for rene
        clues++;
        console.log("You told him that you're going to the Rene Margitte exhibit and he tells you that it's their most popular exhibit at the moment. You feel less stressed because there's more people that could be suspects now. You leave the coat with the boy and head up the stairs and go to the ticket booth. You get your ticket and go to the elevator. As you enter the elevator, you start to get nervous.");
        let nervous = realine.question("Do you give in to your nerves and get off the elevator and not give your special gift to your mom or do you get over it and continue the heist? (enter continue or out) ");
        
      }else {

      }
    }else {
      //You decide to not blend in
      suspicion++;
      console.log("You keep your coat on and walk up the stairs. You go to the ticket vendors to purhcase a ticket. In the line, you encounter an old woman. She asks what a young person like you is doing at the musuem.");
      let ticket = readline.question("Do you tell her the truth but then laugh to play it off as a joke or do you say that you're here because you enjoy the art? (enter joke or art)");

    }
  }else {
    console.log("thank you for playing!!");
  }
} else {
  console.log("Thank you for playing!");
}



function checkSus() {
  if (suspicion > 10) {
    console.log("You have been cuaght be security. Your raised too much suspicion and have been asked to leave. Game Over");
  }
}

function finalClues() {
  if (clues > 5) {
    console.log("As you make your way down the airport, you are stopped by the police and are arrested for stealing the art! You left too many clues that pointed back at you! You lose.)";
  }
  console.log("You win!");
}
