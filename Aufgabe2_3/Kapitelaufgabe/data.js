"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    context.beginPath(); //kopf
    context.arc(500, 100, 40, 0, 2 * Math.PI, false);
    context.fillStyle = "peru";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "peru";
    context.stroke();
    context.beginPath(); //körper?
    context.rect(500, 110, 25, 35);
    context.fillStyle = "peru";
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "peru";
    context.stroke();
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=data.js.map