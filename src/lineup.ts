
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


// This function takes a player object, and the ID of the playerCard. It populates the playerCard with the player data
function displayFootballer(footballer: Footballer, playerID: string) {  
    const name = document.querySelector(`#${playerID} h2`) as HTMLHeadingElement;
    name.textContent = `${footballer.firstName} ${footballer.lastName}`;
  
    const shirtNumber = document.querySelector(`#${playerID} .player-shirt-number`) as HTMLParagraphElement;
    shirtNumber.textContent = `${footballer.shirtNumber}`;
}
  

// This function reads from the json data and creates a Footballer object
async function readPlayerData(): Promise<Footballer[]> {
  try {
    const response = await fetch("http://localhost:3000/api/players");
    const data = await response.json();
    const players: Footballer[] = [];

    for (const playerData of data) {
      const { first_name, last_name, positions, shirt_number } = playerData;
      const footballer = new Footballer(
        first_name,
        last_name,
        positions as Position[],
        shirt_number
      );
      players.push(footballer);
    }

    return players;
  } catch (error) {
    console.error("Error fetching player data:", error);
    return [];
  }
}

// This function prints data from the server to the console for testing purposes
async function testFetchPlayerData() {
  try {
    const response = await fetch("http://localhost:3000/api/players");
    if (!response.ok) {
      throw new Error("Failed to fetch player data");
    }
    const data = await response.json();
    console.log(data); // Do something with the player data
  } catch (error) {
    console.error("Error fetching player data:", error);
  }
}

testFetchPlayerData();


// Usage example
readPlayerData().then((playerList) => {
  displayFootballer(playerList[0], "player1");
  displayFootballer(playerList[7], "player2");
  displayFootballer(playerList[4], "player3");
  displayFootballer(playerList[3], "player4");
  displayFootballer(playerList[6], "player5");
  displayFootballer(playerList[21], "player6");
  displayFootballer(playerList[13], "player7");
  displayFootballer(playerList[11], "player8");
  displayFootballer(playerList[18], "player9");
  displayFootballer(playerList[19], "player10");
  displayFootballer(playerList[24], "player11");

});