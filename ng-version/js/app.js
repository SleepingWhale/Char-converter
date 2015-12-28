angular
    .module("char", [])
    .controller("converter", [mainController]);

function mainController() {
    var self = this;
    self.options = {
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
    };
    self.convert = function () {
        if (!self.input) {
            self.output = "";
            return;
        }
        if (!self.checked) {
            self.output = self.input;
            return;
        }
        self.output = "";
        for (var i = 0, l = self.input.length; i < l; i++) {
            self.output += self.options[self.checked].pref 
                + self.input[i].charCodeAt(0).toString(self.options[self.checked].rank) 
                + self.options[self.checked].post;
        }
    }
}