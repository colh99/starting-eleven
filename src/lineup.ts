const world = 'world';

function hello(who: string = world): string {
  return `Hello ${who}! `;
}

// Enum is a TypeScript feature. Here it is used to define all the 
// possible positions that a player might have in our program.
enum Position { 
    GK = "Goalkeeper",
    CB = "Center Back",
    LB = "Left Back",
    RB = "Right Back",
    LWB = "Left Wing Back",
    RWB = "Right Wing Back",
    CDM = "Central Defensive Midfielder",
    CAM = "Central Attacking Midfielder",
    CM = "Central Midfielder",
    LM = "Left Midfielder",
    RM = "Right Midfielder",
    LW = "Left Winger",
    RW = "Right Winger",
    ST = "Striker"
}


// An interface is another TypeScript feature that allows us to enforce a 
// structure, with specified types.
interface Player {
    firstName: string;
    lastName: string;
    position: Position; // uses the enum Position
    shirtNumber: number;

}


class Footballer implements Player {
    constructor(
        public firstName: string,
        public lastName: string,
        public position: Position, // uses the enum Position
        public shirtNumber: number
    ) {}

    
    
}

let player1 = new Footballer("Tyler", "Adams", Position.CDM, 12);
 
function displayFootballer(footballer: Footballer) {
    return footballer.firstName + " " + footballer.lastName + " wears shirt number " + footballer.shirtNumber + " and plays as a " + footballer.position;
}

document.body.textContent = displayFootballer(player1);