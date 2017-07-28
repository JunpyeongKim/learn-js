/**
 * Created by Junpyeong Kim on 2015. 2. 13..
 */


// JavaScript's Array-based Queue Implementation
// - main action : enqueue, dequeue, peek, length, clear
// jsdoc format ????
module.exports = (function() {
    "use strict";

    // Queue Class/Constructor
    function Queue() {
        this.dataStore = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = front;
        this.back = back;   // end ???
        this.toString = toString;
        this.empty = empty;
        this.count = count;
        // this.clear ???
    }

// need to hoist ???
    function enqueue(element) {
        this.dataStore.push(element);
    }

    function dequeue() {
        return this.dataStore.shift();
    }

    function front() {
        return this.dataStore[0];
    }

    function back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    function toString() {
        var retStr = "";

        for (var i = 0; i < this.dataStore.length; i++) {
            retStr += this.dataStore[i] + "\n";
        }

        return retStr;
    }

    function empty() {
        if (this.dataStore.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    function count() {
        return this.dataStore.length;
    }

    //function clear() {
    //    //
    //}

    return Queue;
})();