/**
 * Created by Junpyeong Kim on 3/23/15.
 *
 * JavaScript Patterns
 * - 5.7.Object Constant
 */

var constant = (function () {
    var constants = {},
        ownProp = Object.prototype.hasOwnProperty,
        allowed = {
            string: 1,
            number: 1,
            boolean: 1
        },
        prefix = (Math.random() + "_").slice(2);

    return {
        set: function (name, value) {
            if (this.isDefined(name)) {
                return false;
            }

            if (!ownProp.call(allowed, typeof value)) {
                return false;
            }

            constants[prefix + name] = value;
            return true;
        },
        isDefined: function (name) {
            return ownProp.call(constants, prefix + name);
        },
        get: function (name) {
            if (this.isDefined(name)) {
                return constants[prefix + name];
            }
        }
    };
} ());

// use case
constant.isDefined('maxwidth'); // false
constant.set('maxwidth', 400);  // true
constant.isDefined('maxwidth'); // true
constant.set('maxwidth', 320);  // false
constant.get('maxwidth');   // 400