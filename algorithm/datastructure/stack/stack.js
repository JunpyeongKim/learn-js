/**
 * Created by Junpyeong Kim on 2015. 2. 26..
 */

"use strict";

function Stack() {
    this.dataStore = [];
    this.top = 0;
}

// TODO(jpkim): use a method such as Object.create()
Stack.prototype = {
    constructor: Stack,

    push: function (element) {
        this.dataStore[this.top++] = element;
    },

    pop: function () {
        return this.dataStore[--this.top];
    },

    peek: function () {
        return this.dataStore[this.top - 1];
    },

    clear: function () {
        this.top = 0;
    },

    length: function() {
        return this.top;
    }
};