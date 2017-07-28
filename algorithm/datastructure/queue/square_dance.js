/**
 * Created by Junpyeong Kim on 2015. 2. 13..
 */
var fs = require("fs");

module.exports = (function() {
    // Square Dance (https://en.wikipedia.org/wiki/Square_dance)

    "use strict";

    function Dancer(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    function getDancers(males, females) {
        //var names = read("./dancers.txt", "utf8").split("\n");
        var names = fs.readFileSync("./dancers.txt", "utf8").split("\n");

        for (var i = 0; i < names.length; i++) {
            names[i] = names[i].trim();
        }

        for (var i = 0; i < names.length; i++) {
            var dancer = names[i].split(" ");
            var sex = dancer[0];
            var name = dancer[1];

            if (sex === "F") {
                females.enqueue(new Dancer(name, sex));
            } else {
                males.enqueue(new Dancer(name, sex));
            }
        }
    }

    function dance(males, females) {
        var person;
        console.log("The dance partners are: \n");

        while (!females.empty() && !males.empty()) {
            person = females.dequeue();
            // putstr("Female dancer is: " + person.name);
            console.log("Female dancer is: " + person.name);
            person = males.dequeue();
            // putstr("Male dancer is: " + person.name);
            console.log("------and the male dancer is: " + person.name);
        }

        //print();
        console.log("");
    }

    return {
        //Dancer: Dancer,
        getDancers: getDancers,
        dance: dance
    };
})();