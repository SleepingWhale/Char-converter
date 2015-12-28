(function () {
    var inp = document.getElementById("input"),
        out = document.getElementById("output"),
        ranks = document.getElementsByName("rank"),
        rank,
        type;

    function translate(data, rank, type) {
        var prefix = (type === "htm" ? "&#" : ""),
            postfix = (type === "htm" ? ";" : " "),
            result = '',
            i,
            l;
        for (i = 0, l = data.length; i < l; i++) {
            result += prefix + data[i].charCodeAt(0).toString(rank) + postfix;
        }
        return result;
    }

    function onChangeHandler() {
        var content = inp.value;
        out.textContent = translate(content, rank, type);
    }

    function onControls() {
        rank = Number(this.value);
        type = this.id;
        onChangeHandler();
    }

    inp.addEventListener("keyup", onChangeHandler, false);

    for (var i = 0, l = ranks.length; i < l; i++) {
        ranks[i].addEventListener("click", onControls, false);
        if (ranks[i].checked === true) {
            onControls.apply(ranks[i]);
        }
    }
})();