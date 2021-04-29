function a1(): void {
    let xyz: string = "Alles";
    console.log(xyz);  //a- String x "Alles" wir in der Konsole ausgegeben b- Es wird am Haltepunkt gehalten und im nächsten Schritt "Alles" ausgegeben
    andere();
    console.log(xyz);
    weiter();  //a- Es wird auf die Funktion func1 verwiesen b- hier wird auf die funktion verwiesen und im nächsten Schritt wird auf "Klar?"gesprungen
    console.log(xyz);
    console.log("Logo!");  //a- Nach Ausgabe der Funktion wird "Logo!" ausgegeben
}   //b- Hier wird "Logo!" ausgegen 

a1();

function weiter(): void {
    console.log("Klar?"); //a- Für den obrige Verweis wird hier "Klar?" ausgegeben b- "Klar?" wird aus gegeben sobald man auf "Logo!"sprigt 

}

function andere(): void {
    console.log("Gute!");

}



function a2(): void {
    let i: number = 9; // Zahl 9 wird für i gesetzt

    do {
        console.log(i); // i wird aus gegeben beginnend mit 9
        i = i - 1;      // neues i wird gebildet aus i - 1, als neue Zahl wird nun noch 8 ausgegeben
    } while (i > 0);   // der Prozess i - 1 wird wiederholt und ausgegeben solange i größer 0 ist, es wird also runter gezählt 9,8,7,6,5,4,3,2,1
}

a2();

/*a3. -Durch vertauschen von Buchstaben, als Problem wird erwarteter Befehl angezeigt
      -Fehlendes Leerzeichen wird als missing whitespace gekennzeichnet
      -Auch fehlendes semicolon wird so gezeigt
      -Fehlen von "(" zeigt falsche Erwartung ")" wird als zusätzliches Zeichen gesehen  */




let x: string = "Hallo";
console.log(x); //für x wird "Hallo" ausgegeben (1) / globale Variable
func1(x);   // Springt auf func1 (2)
console.log(x); // x="Hallo" wird ausfegeben(5)
func2();    // springt zu func2 (6)
func3();    // springt zu func3 (9)
console.log(x); // "Test" wird ausgegeben (11)

function func1(y: string): void {
    y = "Bla";      // y bekommt wert "Bla" (3) / lokale Variable
    console.log(y); // "Bla" wird ausgegeben (4)
}

function func2(): void {
    let x: string = "Blubb"; // x bekommt den Wert "Blubb" (7)
    console.log(x);      // Blubb wird ausgegeben (8)
}

function func3(): void {
    x = "Test"; // x bekommt den Wert "Test" (10)
}




//5. a
function multiply(a: number, b: number): number {
    let ergebnis: number = a * b;
    return ergebnis;

}
//b
function max(c: number, d: number): number {
    if (c < d)
        return d;
    else
        return c;
}

//c

let nummer: number = 1;  //verlangsamt den Browser und läd nicht zu ende
let q: number = 0;
while (nummer <= 100) {
    q += nummer;
    nummer++;
}
console.log("Summe: " + q);



//d
for (let i: number = 0; i < 10; i++) {
    let random: number = Math.random() * 100;
    console.log(random);
}

//e
function factorial(z: number): number {
    let g: number = 1;
    if (z < 1) {
        return 1;
    } else {
        for (let i: number = 0; i <= z; i++) {
            g = g * i;

        }
    }
    return g;
}

//f
for (let i: number = 1900; i < 2021; i++) {
    let leapyear: boolean = false;
    if (i % 4 == 0) {
        if (i % 100 == 0) {
            if (i % 400 == 0) {
                leapyear = true;
            }
        } else {
            leapyear = true;
        }
    }
    if (leapyear) {
        console.log(i);

    }

}
//6. a
let output: string = "";
for (let i: number = 0; i < 8; i++) {
    output += "#";
    console.log(output);

}

// b
for (let i: number = 1; i <= 100; i++) {

    if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//c


for (let i: number = 1; i <= 100; i++) {
    //  let gegeben: boolean = true;
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}
//d
Schach(8, 16);

function Schach(reihe: number, spalte: number): void {
    let schachbrett: string = "";
    let reihenafangraute: boolean = false;

    for (let i: number = 0; i < reihe; i++) {
        let naechstereihe: boolean = reihenafangraute;

        for (let j: number = 0; j < spalte; j++) {
            schachbrett += naechstereihe ? "#" : " ";
            naechstereihe = !naechstereihe;
        }

        reihenafangraute = !reihenafangraute;
        schachbrett += "\n";
    }
    console.log(schachbrett);

}

//e
schach(4, 5);
function schach(reihe: number, spalte: number): void {
    let schachbrett: string = "#";
    let reihenafangraute: boolean = false;

    for (let i: number = 0; i < reihe; i++) {
        let naechstereihe: boolean = reihenafangraute;

        for (let j: number = 0; j < spalte; j++) {
            schachbrett += naechstereihe ? "#" : " ";
            naechstereihe = !naechstereihe;
        }
        reihenafangraute = !reihenafangraute;
        schachbrett += "\n";
    }
    console.log(schachbrett);

}