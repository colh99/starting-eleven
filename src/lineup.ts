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
 
function displayFootballer(footballer: Footballer) {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");
  
    const name = document.createElement("h2");
    name.classList.add("player-name");
    name.textContent = `${footballer.firstName} ${footballer.lastName}`;
  
    const position = document.createElement("p");
    position.classList.add("player-position");
    position.textContent = `${footballer.positions[0]}`;
  
    const shirtNumber = document.createElement("p");
    shirtNumber.classList.add("player-shirt-number");
    shirtNumber.textContent = `#${footballer.shirtNumber}`;

    const profileImg = document.createElement("img");
    profileImg.src = "src/images/person-icon.webp";
    profileImg.classList.add("img");
    
  
    playerCard.appendChild(name);
    playerCard.appendChild(shirtNumber);
    playerCard.appendChild(profileImg);
    playerCard.appendChild(position);
  
    return playerCard;
  }
  

  document.body.appendChild(displayFootballer(player1));