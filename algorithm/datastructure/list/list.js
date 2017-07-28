/**
 * Excerpt
 * - Data Structures & Algorithms with JavaScript
 */

'use strict';

/**
 * List ADT (Abstract Data Type)
 * - listSize
 * - pos
 * - length
 * - clear
 * - toString
 * - getElement
 * - insert
 * - append
 * - remove
 * - front
 * - end
 * - prev
 * - next
 * - currPos
 * - moveTo
 * */

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
}

List.prototype = {
    constructor: List,

    append: function (element) {
        this.dataStore[this.listSize++] = element;
    },

    find: function (element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }

        return -1;
    },
    remove: function (element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }

        return false;
    },

    length: function () {
        return this.listSize;
    },

    toString: function () {
        return this.dataStore;
    },

    insert: function (element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos+1, 0, element);
            this.listSize++;
            return true;
        }

        return false;
    },

    clear: function () {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    },

    contains: function (element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === lement) {
                return true;
            }
        }

        return false;
    },

    front: function () {
        this.pos = 0;
    },

    end: function () {
        this.pos = this.listSize-1;
    },

    prev: function () {
        if (this.pos > 0) {
            this.pos--;
        }
    },

    next: function () {
        if (this.pos < this.listSize-1) {
            this.pos++;
        }
    },

    currPos: function () {
        return this.pos;
    },

    moveTo: function (position) {
        this.pos = position;
    },

    getElement: function () {
        return this.dataStore[this.pos];
    }
}
