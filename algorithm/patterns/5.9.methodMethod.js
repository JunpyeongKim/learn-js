/**
 * Created by Junpyeong Kim on 3/24/15.
 *
 * JavaScript Patterns
 * - 5.9.method() Method
 *   + syntactic sugar or simply sugar
 */

'use strict';

if (typeof Function.prototype.method !== 'function') {
    Function.prototype.method = function (name, implementation) {
        this.prototype[name] = implementation;
        return this;
    };
}

var Person = function (name) {
    this.name = name;
}.
    method('getName', function () {
        return this.name;
    }).
    method('setName', function (name) {
        this.name = name;
        return this;
    });


// use case
var a = new Person('Adam');
a.getName();    // 'Adam'
a.setName('Eve').getName(); // 'Eve'