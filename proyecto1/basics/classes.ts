class Animal {
    name: "Generic animal";
    private age = 10;
    protected identity = "111";

    constructor() {};

    sayHi(){
        console.log("Grrr", this.age);
    };
};

class Dog extends Animal {
    type: "Golden";

    constructor(){
        super();
    };

    sayHi(){
        
    };
};

const myAnminal: Animal = new Animal();
myAnminal.sayHi();

const myDog: Dog = new Dog();


