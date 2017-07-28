/**
 * Created by Junpyeong Kim on 3/26/15.
 *
 * - 5.5.Sandbox Pattern
 */

'use strict';

function Sandbox() {
    var args = Array.prototype.slice.call(arguments),
        callback = args.pop(),
        modules = (args[0] && typeof args[0] === 'string') ? args : args[0],
        i;

    if (!(this instanceof Sandbox)) {
        return new Sandbox(modules, callback);
    }

    this.a = 1;
    this.b = 2;

    if (!modules || modules === '*' || modules[0] === '*') {
        modules = [];

        for (i in Sandbox.modules) {
            if (Sandbox.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }

    for (i = 0; i < modules.length; i++) {
        Sandbox.modules[modules[i]](this);
    }

    callback(this);
}

Sandbox.modules = {};
Sandbox.modules.dom = function (box) {
    box.getElement = function () {};
    box.getStyle = function () {};
    box.foo = 'bar';
};

Sandbox.modules.event = function (box) {
    //box.constructor.prototype = 'mmm';
    box.attachEvent = function () {};
    box.detachEvent = function () {};
};

Sandbox.modules.ajax = function (box) {
    box.makeRequest = function () {};
    box.getResponse = function () {};
};

Sandbox.prototype = {
    name: 'My Application',
    version: '1.0',
    getName: function () {
        return this.name;
    }
};