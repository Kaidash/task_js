
'use strict';

button.addEventListener("click", handler2); // Спасибо ещё раз!
var x = document.getElementsByClassName("info");

function handler2(x) {
    [].forEach.call(x, function (el) {
        console.log(el.value)
    });
}