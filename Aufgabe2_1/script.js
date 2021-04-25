"use strict";
function a1() {
    let xyz = "Alles";
    console.log(xyz); //a- String x "Alles" wir in der Konsole ausgegeben b- Es wird am Haltepunkt gehalten und im nächsten Schritt "Alles" ausgegeben
    andere();
    weiter(); //a- Es wird auf die Funktion func1 verwiesen b- hier wird auf die funktion verwiesen und im nächsten Schritt wird auf "Klar?"gesprungen
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
multiply();
function multiply() {
    let y = 4;
    let z = 5;
    console.log(z * y);
}
/*max();

function max(): void {
    let x: number = 9;
    let y: number = 45;
    do {
         console.log(y);
    }while (x < y);
}

add();

function add(): void {
    let i: number = 0;
    do{
        i = i + i++;
        console.log(i);
    }while (i <= 100);
}*/
for (let i = 10; i <= 100; i++) {
    console.log(Math.random() * i);
}
factorial();
function factorial() {
    for (let i = 1; i <= 9; i++) {
        i = i * i++;
        console.log(i);
    }
}
//function leapyears(): void { }
console.log("# \n## \n### \n#### \n##### \n###### \n#######");
for (let i = 1; i <= 100; i++) {
    if (i % 3) {
        console.log("Fizz");
    }
    if (i % 5) {
        console.log("Buzz");
    }
    console.log(i);
}
console.log("# # # # \n # # # # \n# # # # \n # # # # \n# # # # \n # # # # \n# # # # \n # # # # \n# # # #");
//# sourceMappingURL=script.js.map