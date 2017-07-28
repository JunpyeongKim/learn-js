var Person = (function (arg) {
    var name = arg ? arg : 'free variable';

    var Func = function () {};
    Func.prototyp = {
        getName: function () {
            return name;
        },
        setName: function (arg) {
            name = arg;
        }
    };

    return Func;
})();

var me = new Person();
me.getName();
