var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var sayHi = function (name) {
    console.log("Hola ".concat(name));
};
sayHi('estudiantes de codigo facilito');
function sayGoodbye(name) {
    console.log("Adios ".concat(name, ", casi culminamos el curso"));
}
sayGoodbye("Estudiantes");
{
    var response = {
        id: 1,
        name: "Codigo facilito",
        charge: "Developer",
        number: 4
    };
    function show(_a) {
        var name = _a.name, other = __rest(_a, ["name"]);
        console.log("El nombre enviado es: ", name);
        // savePerson({name, ...other});
        return 1;
    }
    ;
    show(response);
}
;
