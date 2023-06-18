# Overview

This project is a soccer/football lineup builder. It is currently a work-in-progress. It will allow the user to select a lineup of players for a hypothetical team.

I built it to improve my knowledge as a developer. I initially built it to learn TypeScript, and it is also my first attempt at implementing a backend relational database into an application. It is currently only built to run locally in the browser.

[Video Demonstration - MySQL](https://youtu.be/YjygkdyQ3qc) - 6/17/2023 (Most recent)

[Video Demonstration - TypeScript](https://youtu.be/1ifuUsLMrkY) - 5/06/2023


# Development Environment - TypeScript

To use TypeScript, you can install it globally through npm with the following command:

`npm install -g typescript`

It is also possible to install TypeScript on a per-project basis:

`npm install typescript --save-dev`

Then you can generate a tsconfig.json file by entering the following in the terminal:

`tsc --init`

To compile, enter `tsc` in the terminal. This will generate a .js file. Alternatively, if you want to recompile every time changes are made, enter `tsc -w` in the terminal.


# Relational Database - MySQL

I have implemented a MySQL database to store player data. At the moment, this is run locally, so files associated with the backend can be found under the `backend` folder of the directory.

There are three tables:

* player : This contains the players first and last names, and their shirt numbers.
* position : This contains all of the positions that can be assigned to a player. The columns for this are the position_name (ie, "Striker") and the name_abbreviation (ie, "ST")
* player_has_position : This table allows a many-to-many connection between the players and the positions. It links players with their positions. This is done because a player can have many positions, and a position can also be assigned to many players.


# Useful Websites

- [typescriptlang.org Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [MySQL Reference Manual](https://dev.mysql.com/doc/refman/8.0/en/)

# Future Work

* Drag and Drop: Move players around freely for complete customization of the formation
* Select players: Add UI elements to select or switch out players
* Create custom players: Let the user add their own players