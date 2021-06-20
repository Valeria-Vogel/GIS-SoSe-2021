"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let serverURL = "http://localhost:8100";
    //let serverURL: string = "https://gis-example.herokuapp.com";
    init();
    function init() {
        document.getElementById("submit")?.addEventListener("click", insert);
        document.getElementById("feedback")?.addEventListener("click", findAll);
    }
    async function insert(_e) {
        let hiddenRatingInput = document.getElementById("rating-input");
        if (!document.forms[0].checkValidity() || parseInt(hiddenRatingInput.value) < 0) {
            _e.preventDefault();
            return;
        }
        let fd = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(fd);
        let response = await fetch(serverURL + "/insert?" + query);
        console.log(await response.json());
        hiddenRatingInput.value = "-1";
    }
    async function findAll(_e) {
        let response = await fetch(serverURL + "/read");
        let feedbacks = await response.json();
        let out = document.getElementById("output");
        out.innerHTML = "";
        for (let f of feedbacks) {
            console.log(createOneFeedbackDisplay(f));
        }
    }
    function createOneFeedbackDisplay(_f) {
        let feedbackDiv = document.createElement("div");
        feedbackDiv.classList.add("one-feedback");
        feedbackDiv.setAttribute("_id", _f._id);
    }
    let _f;
    let nameSpan = document.createElement("span");
    nameSpan.classList.add("feedback-name");
    nameSpan.innerText = _f.lastname;
    let feedbackQuote = document.createElement("q");
    feedbackQuote.innerText = _f.message;
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map