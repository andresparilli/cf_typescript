const sayHi = (name) => {
    console.log(`Hola ${name}`);
};

sayHi('estudiantes de codigo facilito');

function sayGoodbye(name){
    console.log(`Adios ${name}, casi culminamos el curso`);

}

sayGoodbye("Estudiantes");

{
const response = {
    id: 1,
    name: "Codigo facilito",
    charge: "Developer",
    number: 4
};
function show({ name, ...other }: { id; name; charge; number }): number {
    console.log("El nombre enviado es: ", name);
    // savePerson({name, ...other});
    return 1;
};
show(response);
};