let age : number = 20;
let agemonth: string = 'marzo';
let isSenior: boolean = true;
let fruits: Object[] = [{}, { name: "manzana"}];
let response: any = "Holaa";

function saludar(): void {
    console.log("Hola");
}

let response2: unknown;
response2 = true;
if (response2 === "aaa"){}

let response3 = null;
let response4 = undefined;

let response5: number | null = 5;
response5?.toString()

type ResponseTypeServices = string | undefined;
let responsePoducts: ResponseTypeServices;

//Type ASSERTION

let message: any = "";
(message as string).split;
let messageUppercase = <string>message;
messageUppercase.toLocaleUpperCase();

const canvas = <HTMLCanvasElement>document.getElementById('canvas');