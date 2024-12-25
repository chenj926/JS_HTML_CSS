// class Car {
//     constructor(name) {
//         this.name = name;
//     }

//     getName() {
//         return this.name
//     }
// }

// var car1 = new Car("Volvo");
// console.log(car1.getName());

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        console.log("getPrototype output:");
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class TrainDog extends Train {
    constructor(color, lightsOn) {
        super(color, lightsOn);
    }
}

var yes = new TrainDog("blue", true);
// x.getSelf();
yes.getPrototype();