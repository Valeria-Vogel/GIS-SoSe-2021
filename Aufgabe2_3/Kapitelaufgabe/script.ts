namespace Aufgabe2_3 {

interface Darstellung{
    junge: string;
    mädchen: string;
    haare: string;
    frisur: string;
    outfit: string;
    extra: string;
    farbe: string;
}

interface Save{
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
body.appendChild(head);
head.innerHTML = "Gestalte deine Person";

let topic: HTMLElement = document.createElement("p");
body.appendChild(topic);
head.innerHTML = "Geschlecht";

let girl: HTMLElement = document.createElement("div");
body.appendChild(girl);
head.innerHTML = "Mädchen";

let boy: HTMLElement = document.createElement("div");
body.appendChild(boy);
head.innerHTML = "Junge";

let hair: HTMLElement = document.createElement("div");
body.appendChild(hair);
head.innerHTML = "Haare";

let outfit: HTMLElement = document.createElement("div");
body.appendChild(outfit);
head.innerHTML = "Kleidung";


let extra: HTMLElement = document.createElement("div");
body.appendChild(extra);
head.innerHTML = "Extras";

let next: HTMLElement = document.createElement("div");
body.appendChild(next);
head.innerHTML = "Weiter";

let person: HTMLElement = document.createElement("div");
body.appendChild(person);
head.innerHTML = "Zur Person";


}