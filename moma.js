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
        if (nervous === "continue"){
          console.log("You decided to contiue but as you walk out the elevator the secuirty gets you! Someone tipped them out and told them what you were here to do!");
          console.log("You lose");
        }
      }else {
        //You decide to tell him whatever
        console.log("You decide to say whatever you can in the span of 1 hour. As you're saying this, you stutter and tumble on you words. You sound nervous and the boy gives you a weird look");
        console.log("You leave your coat with the boy and head up the stairs. As you head up the stairs, you trip and out of your left pants pocket comesout a dagger! ");
        console.log("The same dagger you were going to use to cut out the painting!");
        clues++;
        console.log("You pick up the dagger as fast as you can and contiue to the stairs. You hope no one saw the dagger");
        console.log("You head to the ticket booths and get your ticket");
        console.log("As you get into the elevator, a secuirty guard comes up to you and takes the elevator with you.");
        console.log("He says that he's going to the fourth floor for extra secuirty because someone tipped them off about a possible robbery.");
        let wait =  readline.question("Do you get off a floor later and avoid having to deal with security or hurry up and conintue the mission right now. (enter wait or hurry)");
        if (wait === "wait") {
          console.log("You decide to wait it off and get off at the 6th floor to waste some time.");
          console.log("As you're looking at the art, an alarm goes off and everbody is escorted out. Someone has robbed the same painitng you were going steal!");
          let chase = readline.question("Do you chase the thief or do you go home and call it quits? (enter chase or quit)");
        }else {
          console.log("You continue with your mission and get off with the security guard.");
          console.log("You and the security guard head in different directions and you let out a sigh of relief");
          suspicion++;
          console.log("One of the security guards heard you and found it weird how you sighed with relief");
          console.log("You head towards the painitng and to your surprise, the painting is gone!");
          console.log("The guards moved the painting to the back because they were suspicious of someone stealing the painting!");
          console.log("You lose.");
        }
      }
    }else {
      //You decide to not blend in
      suspicion++;
      console.log("You keep your coat on and walk up the stairs. You go to the ticket vendors to purhcase a ticket. In the line, you encounter an old woman. She asks what a young person like you is doing at the musuem.");
      let ticket = readline.question("Do you tell her the truth but then laugh to play it off as a joke or do you say that you're here because you enjoy the art? (enter joke or art)");
      if (ticket === "art") {
        console.log("The lady ignores your response and hands you your ticket.");
        console.log("In a twist of events, you get a heart attack and die!");
        console.log("You Lose!");
      }else {
        console.log("The lady gives you a stern look and asks you to leave because they take those things very seriously");
        console.log("You lose!");
      }
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
    console.log("As you make your way down the airport, you are stopped by the police and are arrested for stealing the art! You left too many clues that pointed back at you! You lose.");
  }
  console.log("You win!");
}
