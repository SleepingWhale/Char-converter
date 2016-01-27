angular
    .module("char", [])
    .controller("converter", ["optList", "translatorFilter", mainController])
    .constant("optList", {
        "Boolean": {
            rank: 2,
            pref: "",
            post: " "
        },
        "Char code": {
            rank: 10,
            pref: "",
            post: " "
        },
        "HTML code": {
            rank: 10,
            pref: "&#",
            post: ";"
        },
        "Hexadecimal": {
            rank: 16,
            pref: "",
            post: " "
        }
    })
    .filter("translator", [tran]);

function mainController(optList, translatorFilter) {
    var self = this,
        i, l;
    self.options = optList;
    self.convert = function () {
        if (!self.input) {
            self.output = "";
            return;
        }
        if (!self.checked) {
            self.output = self.input;
            return;
        }
        self.output = translatorFilter(self.input,
                                       self.options[self.checked].rank, self.options[self.checked].pref, self.options[self.checked].post);
    }
}

function tran() {
    return function (data, rank, prefix, postfix) {
        var i, l,
            result = "";
        for (i = 0, l = data.length; i < l; i++) {
            result += prefix + data[i].charCodeAt(0).toString(rank) + postfix;
        }
        return result;
    }
}