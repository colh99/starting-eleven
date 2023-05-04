const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}


interface Player {
    firstName: string;
    lastName: string;
    position: string;
    shirtNumber: number;
}


class FootyPlayer implements Player {
    constructor(
        public firstName: string,
        public lastName: string,
        public position: string,
        public shirtNumber: number
    ) {}

    
}

