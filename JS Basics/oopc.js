class Fan {
    // properties
    constructor(s, w, c, cn) {
        this.speed = s;
        this.nunOfWings = w;
        this.color = c;
        this.company = cn;
    }

    rotate() {
        return this.company+  " Fan is rotating";
    }
} // class defination

var CGFan = new Fan(5, 4, "blue", "CG"); //class instanciation -> create an object
var ushaFan = new Fan(5, 4, "blue", "usha");
var dellFan = new Fan(5, 4, "blue", "Dell");
var hpFan = new Fan(5, 4, "blue", "HP");

console.log(CGFan.company.length);
console.log(ushaFan.speed);
console.log(dellFan.company);
console.log(hpFan.rotate());
