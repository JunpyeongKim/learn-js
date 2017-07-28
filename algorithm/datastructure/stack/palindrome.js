/**
 * Created by Junpyeong Kim on 2015. 2. 26..
 */

"use strict";

// e.g. "dad", "racecar", "A man, a plan, a canal: Panama"

function isPalindrome(word) {
    var s = new Stack();

    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }

    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }

    if (word === rword) {
        return true;
    } else {
        return false;
    }
}

var word = "hello";
if (isPalindrome(word)) {
    console.log(word + " is a palindrom.");
} else {
    console.log(word + " is not a palindrome.");
}

var word = "racecar";
if (isPalindrome(word)) {
    console.log(word + " is a palindrom.");
} else {
    console.log(word + " is not a palindrome.");
}