/**
 * Created by 1000938 on 2015. 3. 4..
 */

'use strict';

//load('HashTable.js');

var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

var hTable = new HashTable();

for (var i = 0; i < someNames.length; i++) {
    hTable.put(someNames[i]);
}

hTable.showDistro();