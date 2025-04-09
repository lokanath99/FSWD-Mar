class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getUser() {
        return this.name + " : " + this.email;
    }
}

function sayHello() {
    return "Hello";
}

const PI = 3.141;

export default User;
export { sayHello, PI };
