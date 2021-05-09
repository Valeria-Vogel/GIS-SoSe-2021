"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    let body = document.body;
    let head = document.createElement("h1");
    body.appendChild(head);
    {
        head.innerHTML = "Gestalte deine Person";
        head.style.height = "20 px";
        head.style.width = " 30 px";
        head.style.backgroundColor = "green";
        head.style.color = "white";
    }
    let topic = document.createElement("p");
    body.appendChild(topic);
    topic.innerHTML = "Geschlecht";
    let girl = document.createElement("button");
    body.appendChild(girl);
    girl.innerHTML = "Mädchen";
    girl.addEventListener("click", auswahlM);
    let boy = document.createElement("button"); // weiter taste führt zur nächsten auswahlmöglichkeit
    body.appendChild(boy);
    boy.innerHTML = "Junge";
    boy.addEventListener("click", auswahlJ);
    let hair = document.createElement("div");
    body.appendChild(hair);
    hair.innerHTML = "Haare";
    let outfit = document.createElement("div");
    body.appendChild(outfit);
    outfit.innerHTML = "Kleidung";
    let extra = document.createElement("div");
    body.appendChild(extra);
    extra.innerHTML = "Extras";
    let person = document.createElement("div");
    body.appendChild(person);
    person.innerHTML = "Zur Person";
    let next = document.createElement("button"); // weiter taste führt zur nächsten auswahlmöglichkeit
    body.appendChild(next);
    next.innerHTML = "Weiter";
    next.addEventListener("click", weiter);
    function weiter() {
        next.style.backgroundColor = "lightgreen";
    }
    function auswahlM() {
        if (girl) {
            console.log("Ausahl: Mädchen");
        }
    }
    function auswahlJ() {
        if (boy) {
            console.log("Ausahl: Junge");
        }
    }
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map