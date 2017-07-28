/**
 * Created by Junpyeong Kim on 3/10/15.
 *
 * JavaScript Patterns
 * - 5.Object Creation Patterns
 *   + Private Properties and Methods
 */

// All members of Object is public.

//------------------------------------------------------------
// the object literal
var myobj = {
    myprop: 1,
    getProp: function () {
        return this.myprop;
    }
};

console.log(myobj.myprop);
console.log(myobj.getProp());

// solution-01: use an anonymous immediate function
var myobj;

(function () {
    // private
    var name = 'my, oh my';

    // public
    myobj = {
        getName: function () {
            return name;
        }
    }
}());

// solution-02: use an anonymous immediate function
var myobj = (function () {
    // private
    var name = 'my, oh my';

    // public
    return {
        getName: function () {
            return name;
        }
    };
}());

//------------------------------------------------------------
// the function object
function Gadget() {
    this.name = 'iPod';
    this.stretch = function () {
        return 'iPad';
    };
}

var toy = new Gadget();
console.log(toy.name);
console.log(toy.stretch());

// solution: use the closure
function Gadget() {
    // private
    var name = 'iPod';

    // public - privileged method (closure)
    // disadvantage
    // - never return a reference
    // - copy: shallow(extend()) or deep(extendDeep())
    this.getName = function () {
        return name;
    };
}

var toy = new Gadget();
console.log(toy.name);  // undefined
console.log(toy.getName()); // 'iPod'

//------------------------------------------------------------
// Total solution
function Gadget() {
    // private
    var name = 'iPod';

    // public
    this.getName = function() {
        return name;
    };
}

Gadget.prototype = (function () {
    // private
    var browser = 'Mobile Webkit';

    // public
    return {
        getBrowser: function () {
            return browser;
        }
    }
}());

var toy = new Gadget();
console.log(toy.getName());
console.log(toy.getBrowser());

//------------------------------------------------------------
// revelation pattern by Christian Heilmann.
var myarray;

(function () {
    var astr = '[object Array]',
        toString = Object.prototype.toString;

    function isArray(a) {
        return toString.call(a) === astr;
    }

    function indexOf(haystack, needle) {
        var i = 0,
            max = haystack.length;

        for (; i < max; i++) {
            if (haystack[i] === needle) {
                return i;
            }
        }

        return -1;
    }

    myarray = {
        isArray: isArray,
        indexOf: indexOf,
        inArray: indexOf
    };
}());

myarray.isArray([1, 2]);    // true
myarray.isArray({0: 1});    // false
myarray.indexOf(["a", "b", "z"], "z");  // 2
myarray.inArray(["a", "b", "z"], "z");  // 2

myarray.indexOf = null;
myarray.inArray(["a", "b", "z"], "z");  // 2