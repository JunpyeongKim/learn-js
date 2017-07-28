/**
 * Created by Junpyeong Kim on 2015. 2. 19..
 */
var fs = require("fs");

"use strict";

// improved from queue.js
//Queue Class/Constructor
function Queue() {
    this.dataStore = [];
}

Queue.prototype = {
    enqueue: function (element) {
        this.dataStore.push(element);
    },

    dequeue: function () {
        return this.dataStore.shift();
    },

    front: function () {
        return this.dataStore[0];
    },

    back: function () {
        return this.dataStore[this.dataStore.length - 1];
    },

    toString: function () {
        var retStr = "";

        for (var i = 0; i < this.dataStore.length; i++) {
            retStr += this.dataStore[i] + "\n";
        }

        return retStr;
    },

    empty: function () {
        if (this.dataStore.length === 0) {
            return true;
        } else {
            return false;
        }
    },

    clear: function () {
        // Array.slice() or Array.splice();
    },

    count: function () {
        return this.dataStore.length;
    }
};

//---------------------------------------------------
// Primitive Queue Test
//---------------------------------------------------
console.log("Test: Primitive Queue\n");
var q = new Queue();

q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());

q.dequeue();
console.log(q.toString());

console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());


//---------------------------------------------------
// Square Dance Implementation
//---------------------------------------------------
function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females) {
    //var names = read("./dancers.txt", "utf8").split("\n");
    var names = fs.readFileSync("./dancers.txt", "utf8").split("\n");

    for (var i = 0; i < names.length; i++) {
        names[i] = names[i].trim();
    }

    for (var i = 0; i < names.length; i++) {
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];

        if (sex === "F") {
            females.enqueue(new Dancer(name, sex));
        } else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    var person;
    console.log("The dance partners are: \n");

    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        // putstr("Female dancer is: " + person.name);
        console.log("Female dancer is: " + person.name);
        person = males.dequeue();
        // putstr("Male dancer is: " + person.name);
        console.log("------and the male dancer is: " + person.name);
    }

    //print();
    console.log("");
}

//---------------------------------------------------
// Square Dance
//---------------------------------------------------
console.log("\nTest: Square Dance\n");

var maleDancers = new Queue();
var femaleDancers = new Queue();

getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + " is waiting to dance.");
}

if (!maleDancers.empty()) {
    console.log(maleDancers.front().name + " is waiting to dance.");
}


if (maleDancers.count() > 0) {
    console.log("There are " + maleDancers.count() + " male dancers waiting to dance.");
}

if (femaleDancers.count() > 0) {
    console.log("There are " + femaleDancers.count() + " female dancers waiting to dance.");
}
