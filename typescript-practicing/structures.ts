interface IPrintable {
    toString(): string;
}

class Point implements IPrintable {
    coord: Coordinate;

    constructor(coord: Coordinate) {
        this.coord = coord;
    }

    toString(): string {
        return `(${this.coord.x}, ${this.coord.y})`;
    }
}

type Coordinate = {
    x: number;
    y: number;
}

const point = new Point({ x: 4, y: 6 });

console.log(point.toString());

