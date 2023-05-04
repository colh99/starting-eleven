"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const world = 'world';
function hello(who = world) {
    return `Hello ${who}! `;
}
exports.hello = hello;
class FootyPlayer {
    firstName;
    lastName;
    position;
    shirtNumber;
    constructor(firstName, lastName, position, shirtNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.shirtNumber = shirtNumber;
    }
}
