/**
 * Created by Junpyeong Kim on 2015. 2. 13..
 */
var Queue = require("./queue.js");
//var Queue = require("./queue1.js");
var sd = require("./square_dance.js");

// - $ node ./square_dance_test.js
"use strict";

var maleDancers = new Queue();
var femaleDancers = new Queue();

sd.getDancers(maleDancers, femaleDancers);
sd.dance(maleDancers, femaleDancers);

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