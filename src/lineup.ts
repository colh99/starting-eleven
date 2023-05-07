
// Enum is a TypeScript feature. Here it is used to define all the 
// possible positions that a player might have in our program.
enum Position { 
    GK = "GK",    // Goalkeeper
    CB = "CB",    // Center Back
    LB = "LB",    // Left Back
    RB = "RB",    // Right Back
    LWB = "LWB",  // Left Wing Back
    RWB = "RWB",  // Right Wing Back
    CDM = "CDM",  // Central Defensive Midfielder
    CM = "CM",    // Central Midfielder
    LM = "LM",    // Left Midfielder
    RM = "RM",    // Right Midfielder
    CAM = "CAM",  // Central Attacking Midfielder
    LW = "LW",    // Left Winger
    RW = "RW",    // Right Winger
    CF = "CF",    // Center Forward
    ST = "ST",    // Striker
}


// Setup player position dropdown menus
// Extract enums into a list
const positionsList = Object.keys(Position).filter((item) => {
  return isNaN(Number(item));
});

// This list contains the indices of positionList for the default "4-4-2" formation. 
// This is used to set the correct default positions at each dropdown menu
let defaultPositions = [0, 2, 1, 1, 3, 8, 7, 7, 9, 14, 14];

// Dynamically populate position options.
let i:number = 1;
while (i < 12) {
  const positionDropDown = document.getElementById(`player${i}-position`) as HTMLSelectElement

  for (let position of positionsList) {
    let option = document.createElement("option");
    option.value = position;
    option.textContent = position;

    positionDropDown.appendChild(option);
  }
  
  // Set the default value of the current dropdown
  positionDropDown.value = positionsList[defaultPositions[i-1]];
  i += 1;
}


// An interface is another TypeScript feature that allows us to enforce a 
// structure, with specified types.
interface Player {
    firstName: string;
    lastName: string;
    positions: Position[]; // uses the enum Position. Preferred position should be listed first.
    shirtNumber: number;
}


class Footballer implements Player {
    constructor(
        public firstName: string,
        public lastName: string,
        public positions: Position[], // uses the enum Position
        public shirtNumber: number
    ) {}
    
}

let player1 = new Footballer("Tyler", "Adams", [Position.CDM, Position.CM], 12);
let playerID: string = "player7"; 

function displayFootballer(footballer: Footballer, playerID: string) {
    const playerCard = document.querySelector(playerID)
  
    const name = document.querySelector("#player7 h2") as HTMLHeadingElement;
    name.textContent = `${footballer.firstName} ${footballer.lastName}`;
  
    const shirtNumber = document.querySelector(`#${playerID} .player-shirt-number`) as HTMLParagraphElement;
    shirtNumber.textContent = `${footballer.shirtNumber}`;
}
  
displayFootballer(player1, playerID);
