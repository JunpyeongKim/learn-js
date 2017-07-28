/**
 * Created by 1000938 on 2015. 3. 6..
 */

'use strict';

var names = new List();

names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
console.log(names.getElement());    // Clayton

names.next();
console.log(names.getElement());    // Raymon

names.next();
names.next();
names.prev();
console.log(names.getElement());    // Cynthia

for (names.front(); names.currPos() < names.length; names.next()) {
    console.log(names.getElement());
}

for (names.end(); names.currPos() >= 0; names.prev()) {
    console.log(names.getElement());
}