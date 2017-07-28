/**
 * Created by Junpyeong Kim on 3/5/15.
 *
 * JavaScript Patterns
 * - 5.Object Creation Patterns
 *   + 5.1.Namespace Pattern
 */

'use strict';

//------------------------------------------
//------------------------------------------
// Before
function Parent() {}
function Child() {}

var some_var = 1;

var module1 = {};
module11.data = { a: 1, b: 2 };
var module2 = {};

// After
var MYAPP = {};

MYAPP.Parent = function () {};
MYAPP.Child = function () {};

MYAPP.some_var = 1;

MYAPP.modules = {};

MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = { a: 1, b: 2 };
MYAPP.modules.module2 = {};

//------------------------------------------
// 5.1
//------------------------------------------
// Before
var MYAPP = {};

// After-1
if (typeof MYAPP === "undefined") {
    var MYAPP = {};
}

// After-2
var MYAPP = MYAPP || {};

// After-3: General Purpose Namespace Function
//MYAPP.namespace('MYAPP.modules.module2');
//var MYAPP = {
//    modules: {
//        module2: {}
//    }
//};

var MYAPP = MYAPP || {};

MYAPP.namespace = function (ns_string) {
    var parts = ns_string.split('.'),
        parent = MYAPP,
        i;

    if (parts[0] === 'MYAPP') {
        parts = parts.slice(1);
    }

    for (i = 0; i < parts.length; i++) {
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }

        parent = parent[parts[i]];
    }

    return parent;
};