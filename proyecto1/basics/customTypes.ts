type Person = {
    name: string;
    code: string | number;
    description: string;
};

const newPerson: Person = {
    code: "K",
    name: "Kevin",
    description: ""
}

type ServiceResponse = string | null | number | undefined;

type UserCharge = 'admin' | "normal" | 'superuser';
let response: ServiceResponse;

const myUserType: UserCharge = "superuser";