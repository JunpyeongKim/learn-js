/**
 * Created by Junpyeong Kim on 2015. 3. 3..
 */

'use strict';

/**
 * @class HashTable
 * */
function HashTable() {
    this.table = new Array(137);    // typically prime number
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    //this.get = get;
}

/**
 * @description hash string via modular hashing.
 * */
function simpleHash(data) {
    var total = 0;

    for (var i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }

    console.log("Hash value: ", data, " -> ", total);
    return total % this.table.length;
}

function showDistro() {
    var n = 0;

    for (var i = 0; i < this.table.length; i++) {
        if (this.table[i] !== undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}

/**
 * @description Homer's method. multiplied by 37 instead of 31.
 * */
function betterHash(string) {
    const H = 37;
    var total = 0;

    for (var i = 0; i < string.length; i++) {
        total += H * total + string.charCodeAt(i);
    }

    total = total % this.table.length;

    if (total < 0) {
        total += this.table.length - 1;
    }

    return parseInt(total, 10);
}

function put(data) {
    var pos = this.simpleHash(data);
    //var pos = this.betterHash(data);
    this.table[pos] = data;
}

function get(key) {
    //return this.table[this.simpleHash(key)];
    return this.table[this.betterHash(key)];
}