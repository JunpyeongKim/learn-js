/**
 * Created by 1000938 on 2015. 2. 19..
 */

module.exports = (function () {
    "use strict";

// Priority Queue
// - delete element by its priority.
//  + re-implement dequeue().
//      ++ lower priority code has high priority.

//Queue Class/Constructor
    function Queue() {
        this.dataStore = [];
    }

    Queue.prototype = {
        enqueue: function (element) {
            this.dataStore.push(element);
        },

        /*
         array.splice(index,howmany,item1,.....,itemX)
         - index : Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
         - howmany: Required. The number of items to be removed. If set to 0, no items will be removed
         - item1,.....,item : Optional. The new item(s) to be added to the array

         The splice() method adds/removes items to/from an array, and returns the removed item(s).
         Note: This method changes the original array.
         http://www.w3schools.com/jsref/jsref_splice.asp
         */
        dequeue: function () {
            var entry = 0;

            for (var i = 0; i < this.dataStore.length; i++) {
                if (this.dataStore[i].code < this.dataStore[entry].code) {
                    // find the higher priority.
                    entry = i;
                }
            }

            return this.dataStore.splice(entry, 1);
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
                retStr += this.dataStore[i].name + " code: " +
                this.dataStore[i].code + "\n";
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

    return Queue;
})();

