/**
 * Created by Junpyeong Kim on 2015. 2. 13..
 */

"use strict";

var Queue = require("./queue.js");

// test 'queue.js'
// - $ node ./queue_test.js
var q = new Queue();

q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());

q.dequeue();
console.log(q.toString());

console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());