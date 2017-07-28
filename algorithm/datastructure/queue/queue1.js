/**
 * Created by Junpyeong Kim on 2015. 2. 19..
 */

// JavaScript's Array-based Queue Implementation
// - main action : enqueue, dequeue, peek, length, clear
// jsdoc format ????

module.exports = (function () {
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

        //clear: function () {
        //    // Array.slice() or Array.splice();
        //},

        count: function () {
            return this.dataStore.length;
        }
    };

    return Queue;
})();
