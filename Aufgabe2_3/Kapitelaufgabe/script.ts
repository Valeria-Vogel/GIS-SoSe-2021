namespace Aufgabe2_3 {

    interface Darstellung {
        junge: string;
        mädchen: string;
        haare: string;
        frisur: string;
        outfit: string;
        extra: string;
        farbe: string;
    }

    interface Save {
        _junge: string;
        _mädchen: string;
        _haare: string;
        _frisur: string;
        _outfit: string;
        _extra: string;
        _farbe: string;
    }

    let body: HTMLElement = document.body;

    let head: HTMLElement = document.createElement("h1");
    body.appendChild(head); {
        head.innerHTML = "Gestalte deine Person";
        head.style.height = "20 px";
        head.style.width = " 30 px";
        head.style.backgroundColor = "green";
        head.style.color = "white";
    }
    let topic: HTMLElement = document.createElement("p");
    body.appendChild(topic);
    topic.innerHTML = "Geschlecht";

    let girl: HTMLButtonElement = document.createElement("button");
    body.appendChild(girl);
    girl.innerHTML = "Mädchen";
    girl.addEventListener("click", auswahlM);

    let boy: HTMLButtonElement = document.createElement("button"); // weiter taste führt zur nächsten auswahlmöglichkeit
    body.appendChild(boy);
    boy.innerHTML = "Junge";
    boy.addEventListener("click", auswahlJ);

    let hair: HTMLElement = document.createElement("div");
    body.appendChild(hair);
    hair.innerHTML = "Haare";

    let outfit: HTMLElement = document.createElement("div");
    body.appendChild(outfit);
    outfit.innerHTML = "Kleidung";


    let extra: HTMLElement = document.createElement("div");
    body.appendChild(extra);
    extra.innerHTML = "Extras";

    let person: HTMLElement = document.createElement("div");
    body.appendChild(person);
    person.innerHTML = "Zur Person";

    let next: HTMLButtonElement = document.createElement("button"); // weiter taste führt zur nächsten auswahlmöglichkeit
    body.appendChild(next);
    next.innerHTML = "Weiter";
    next.addEventListener("click", weiter);

    function weiter(): void {
        next.style.backgroundColor = "lightgreen";
    }

    function auswahlM(): void {
        if (girl) {
            console.log("Ausahl: Mädchen");
        }

    }
    function auswahlJ(): void {
        if (boy) {
            console.log("Ausahl: Junge");
        }

    }


}