function sayHello(personName: string) {
    return `Hello, ${personName}`;
}

let name2: string = "Matheus Macedo Santos";
console.log(sayHello(name2));

let array: string[];

array = ['a', 'b'];

console.log(array);

function printNumber(number: string | number) {
    console.log(number);
}

printNumber("435435");

type Point = {
    x: number,
    y: number
}

function printPoint(point: Point) {
    console.log(`(${point.x}, ${point.y})`);
}

printPoint({ x: 4, y: 3 });
