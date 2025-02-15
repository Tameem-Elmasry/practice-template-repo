class Animal {
    constructor(type) {
        this.type = type;
    }

    makeSound() {
        console.log(`This ${this.type} makes a sound`);
    }
}

class Bird {
    constructor(type) {
        this.type = type;
    }

    fly() {
        console.log(`${this.type} ${this.name} is flying!`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super("Dog"); // Calls the parent constructor
        this.name = name;
    }

    bark() {
        console.log(`${this.name} is barking!`);
    }
}

class Eagle extends Bird {
    constructor(name) {
        super("Eagle");
        this.name = name;
    }

    flap(){
        console.log(`${this.type} ${this.name} is Flapping`)
    }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // Output: "This Dog makes a sound"
myDog.bark(); // Output: "Buddy is barking!"

const myEagle = new Eagle("Roselvet")
myEagle.fly()
myEagle.flap()
console.log(myEagle.type, "->", myEagle.name)