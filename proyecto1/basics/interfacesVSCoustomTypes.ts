interface Person {
    name: string;
    age: number;
};

interface Employee extends Person {
    charge: string;
};

const newEmployee: Employee = {
    name: "",
    age: 40,
    charge: "",
};

//Union types

type User = {
    id: string;
};

type Admin = User & Employee;

const myAdmin: Admin ={

};