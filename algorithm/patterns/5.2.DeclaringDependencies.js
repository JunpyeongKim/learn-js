/**
 * Created by Junpyeong Kim on 3/5/15.
 *
 * JavaScript Patterns
 * - 5.Object Creation Patterns
 *   + Declaring Dependencies
 */

var myFunction = function () {
    var event = YAHOO.util.Event,
        dom = YAHOO.util.Dom;

    // use variables such as event, dom.
};

// In case of being compressed,
function test1() {
    var modules = MYAPP.modules;
    alert(modules.m1);
    alert(modules.m2);
    alert(modules.m51);
}