/**
 * Created by Junpyeong Kim on 3/18/15.
 *
 * JavaScript Patterns
 * - 5.6.Static Member
 */

'use strict';

var Gadget = function () {};

Gadget.isShiny = function () {
    return 'you bet';
};

Gadget.prototype.setPrice = function (price) {
    this.price = price;
};

//--------------------------------------------------
// use case
Gadget.isShiny();
var iphone = new Gadget();
iphone.setPrice(500);

// check
typeof Gadget.setPrice;
typeof iphone.isShiny;

// facade
Gadget.prototype.isShiny = Gadget.isShiny;
iphone.isShiny();

