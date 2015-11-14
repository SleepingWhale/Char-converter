var i = document.getElementById("input");
var o = document.getElementById("output");
//input.addEventListener("textInput", toBin(input, output), false);

i.addEventListener("textInput", function() {
  var content = i.value;
  console.log(content);
  o.textContent = content;
}, false);

/*
function toBin(from, to) {
  var content = from.value;
  console.log(content);
  to.textContent = content;
}

*/