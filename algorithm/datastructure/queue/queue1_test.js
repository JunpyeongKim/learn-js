/**
 * Created by Junpyeong Kim on 2015. 2. 19..
 */

"use strict";
var Queue = require("./queue1.js");

// test 'queue1.js'
// - $ node ./queue1_test.js
var q = new Queue();

q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());

q.dequeue();
console.log(q.toString());

console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());
