"use strict";
function a1() {
    let xyz = "Alles";
    console.log(xyz); //a- String x "Alles" wir in der Konsole ausgegeben b- Es wird am Haltepunkt gehalten und im nächsten Schritt "Alles" ausgegeben
    andere();
    console.log(xyz);
    weiter(); //a- Es wird auf die Funktion func1 verwiesen b- hier wird auf die funktion verwiesen und im nächsten Schritt wird auf "Klar?"gesprungen
    console.log(xyz);
    console.log("Logo!"); //a- Nach Ausgabe der Funktion wird "Logo!" ausgegeben
} //b- Hier wird "Logo!" ausgegen 
a1();
function weiter() {
    console.log("Klar?"); //a- Für den obrige Verweis wird hier "Klar?" ausgegeben b- "Klar?" wird aus gegeben sobald man auf "Logo!"sprigt 
}
function andere() {
    console.log("Gute!");
}
function a2() {
    let i = 9; // Zahl 9 wird für i gesetzt
    do {
        console.log(i); // i wird aus gegeben beginnend mit 9
        i = i - 1; // neues i wird gebildet aus i - 1, als neue Zahl wird nun noch 8 ausgegeben
    } while (i > 0); // der Prozess i - 1 wird wiederholt und ausgegeben solange i größer 0 ist, es wird also runter gezählt 9,8,7,6,5,4,3,2,1
}
a2();
/*a3. -Durch vertauschen von Buchstaben, als Problem wird erwarteter Befehl angezeigt
      -Fehlendes Leerzeichen wird als missing whitespace gekennzeichnet
      -Auch fehlendes semicolon wird so gezeigt
      -Fehlen von "(" zeigt falsche Erwartung ")" wird als zusätzliches Zeichen gesehen  */
let x = "Hallo";
console.log(x); //für x wird "Hallo" ausgegeben (1) / globale Variable
func1(x); // Springt auf func1 (2)
console.log(x); // x="Hallo" wird ausfegeben(5)
func2(); // springt zu func2 (6)
func3(); // springt zu func3 (9)
console.log(x); // "Test" wird ausgegeben (11)
function func1(y) {
    y = "Bla"; // y bekommt wert "Bla" (3) / lokale Variable
    console.log(y); // "Bla" wird ausgegeben (4)
}
function func2() {
    let x = "Blubb"; // x bekommt den Wert "Blubb" (7)
    console.log(x); // Blubb wird ausgegeben (8)
}
function func3() {
    x = "Test"; // x bekommt den Wert "Test" (10)
}
//5. a
function multiply(a, b) {
    let ergebnis = a * b;
    return ergebnis;
}
//b
function max(c, d) {
    if (c < d)
        return d;
    else
        return c;
}
//c
/*q: number = 0;
while (nummer <= 100) {
    q += nummer;
    nummer = nummer++;
}*/
//d
for (let i = 0; i < 10; i++) {
    let random = Math.random() * 100;
    console.log(random);
}
//e
function factorial(z) {
    let g = 1;
    if (z < 1) {
        return 1;
    }
    else {
        for (let i = 0; i <= z; i++) {
            g = g * i;
        }
    }
    return g;
}
//f
for (let i = 1900; i < 2021; i++) {
    let leapyear = false;
    if (i % 4 == 0) {
        if (i % 100 == 0) {
            if (i % 400 == 0) {
                leapyear = true;
            }
        }
        else {
            leapyear = true;
        }
    }
    if (leapyear) {
        console.log(i);
    }
}
//6. a
let output = "";
for (let i = 0; i < 8; i++) {
    output += "#";
    console.log(output);
}
// b
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
//c
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
//d
function Schach(reihe = 8, spalte = 8) {
    let schachbrett = "#";
    let reihenafangraute = false;
    for (let i = 0; i < reihe; i++) {
        let naechstereihe = reihenafangraute;
        for (let j = 0; j < spalte; j++) {
            schachbrett += naechstereihe ? "#" : " ";
            naechstereihe = !naechstereihe;
        }
        reihenafangraute = !reihenafangraute;
        schachbrett += "\n";
    }
    console.log(schachbrett);
}
//e
function schach(reihe, spalte) {
    let schachbrett = "#";
    let reihenafangraute = false;
    for (let i = 0; i < reihe; i++) {
        let naechstereihe = reihenafangraute;
        for (let j = 0; j < spalte; j++) {
            schachbrett += naechstereihe ? "#" : " ";
            naechstereihe = !naechstereihe;
        }
        reihenafangraute = !reihenafangraute;
        schachbrett += "\n";
    }
    return schachbrett;
}
//# sourceMappingURL=script.js.map