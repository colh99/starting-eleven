# Overview

This project is a soccer/football lineup builder. It is currently a work-in-progress. It will allow the user to select a lineup of players for a hypothetical team.

While building it, I hope to learn more about TypeScript and demonstrate TypeScript features.

[](http://youtube.link.goes.here)

# Development Environment

To use TypeScript, you can install it globally through npm with the following command:

`npm install -g typescript`

It is also possible to install TypeScript on a per-project basis:

`npm install typescript --save-dev`

Then you can generate a tsconfig.json file by entering the following in the terminal:

`tsc --init`

To compile, enter `tsc` in the terminal. This will generate a .js file. Alternatively, if you want to recompile every time changes are made, enter `tsc -w` in the terminal.

# Useful Websites

- [typescriptlang.org Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)


# Future Work

* Drag and Drop: Move players around freely for complete customization of the formation
* Select players: Add UI elements to select or switch out players
* Create custom players: Let the user add their own players
* Fetch players: Utilize an API to retrieve player data