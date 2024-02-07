var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    DatabaseEntity.myUser = new User('Andres');
    // console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
/// <reference path="namespaces.ts" />
var myOtherUser = new DatabaseEntity.User("Codigo Facilito");
console.log(myOtherUser);
