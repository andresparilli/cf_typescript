
interface Person {
    name: string;
    code: string | number;
    charge: number;
    description?: string;
    sayHello: () => string;
}

let person: Person = {
    name: "Kevin",
    code: "01",
    charge: 1,
    description: "Hola",
    sayHello: () => {
        return "Hola";
    }
};

person.code = 50;
{
let segunda_Persona: Person = {
    name: "",
    code: "",
    charge: 0,
    sayHello: () => "Hola 2",
}

segunda_Persona.description?.toLocaleUpperCase();
}