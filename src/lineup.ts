const world = 'world';

function hello(who: string = world): string {
  return `Hello ${who}! `;
}

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
  
    const position = document.querySelector(`#${playerID} .player-position`) as HTMLParagraphElement;
    position.classList.add("player-position");
    position.textContent = `${footballer.positions[0]}`;
  
    const shirtNumber = document.querySelector(`#${playerID} .player-shirt-number`) as HTMLParagraphElement;
    shirtNumber.textContent = `#${footballer.shirtNumber}`;

    const profileImg = document.querySelector(`#${playerID} img`) as HTMLImageElement;
    profileImg.src = "src/images/person-icon.webp";
}
  
displayFootballer(player1, playerID);
