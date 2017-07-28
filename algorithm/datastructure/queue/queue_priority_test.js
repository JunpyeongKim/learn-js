/**
 * Created by 1000938 on 2015. 2. 19..
 */
var Queue = require("./queue_priority.js");

//---------------------------------------------------
// Test: Emergency room
//---------------------------------------------------
function Patient(name, code) {
    this.name = name;
    this.code = code;
}

var ed = new Queue();

var p = new Patient("Smith", 5);
ed.enqueue(p);

var p = new Patient("Jones", 4);
ed.enqueue(p);

var p = new Patient("Fehrenbach", 6);
ed.enqueue(p);

var p = new Patient("Brown", 1);
ed.enqueue(p);

var p = new Patient("Ingram", 1);
ed.enqueue(p);

console.log("-----------------------------");
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

//------
// First patient
var seen = ed.dequeue();
console.log("-----------------------------");
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen : \n" + ed.toString());

//-------
// Next patient
var seen = ed.dequeue();
console.log("-----------------------------");
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen : \n" + ed.toString());

//-------
// Next patient
var seen = ed.dequeue();
console.log("-----------------------------");
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen : \n" + ed.toString());