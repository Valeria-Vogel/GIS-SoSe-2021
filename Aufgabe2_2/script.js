"use strict";
var aufgabe2_2;
(function (aufgabe2_2) {
    //1. a)
    min(33, 48, 17, 39, 32, 46, 18, 32);
    function min(..._eingabe) {
        let min = Infinity;
        for (let i = 0; i < _eingabe.length; i++) {
            if (min > _eingabe[i]) {
                min = _eingabe[i];
            }
        }
        console.log(min);
    }
    //b)
    console.log(isEvan(-1));
    function isEvan(_zahl) {
        if (_zahl == 0)
            return true;
        if (_zahl == 1)
            return false;
        let ergebnis;
        if (_zahl < 0)
            ergebnis = isEvan(_zahl + 2);
        if (_zahl > 0)
            ergebnis = isEvan(_zahl - 2);
        return ergebnis;
    }
    //c) 2.
    let student1 = { nachname: "Müller", vorname: "Max", martrikelnummer: "233445", studiengang: "OMB" };
    let student2 = { nachname: "Schmidt", vorname: "Hans", martrikelnummer: "933525", studiengang: "MKB" };
    let student3 = { nachname: "Sommer", vorname: "Lili", martrikelnummer: "431224", studiengang: "MIB" };
    console.log(student1.martrikelnummer);
    console.log(student2.studiengang);
    console.log(student3.nachname);
    //C) 3.
    let studierendeArr = [student1, student2];
    studierendeArr.push(student3);
    studierendeArr.push({ nachname: "Mayer", vorname: "Nikki", martrikelnummer: "817273", studiengang: "OMB" });
    console.log(studierendeArr[0].nachname);
    console.log(studierendeArr[1].vorname);
    console.log(studierendeArr[2].martrikelnummer);
    console.log(studierendeArr[3].studiengang);
    //c) 4.
    function showInfo(info) {
        console.log(info.nachname);
        console.log(info.vorname);
        console.log(info.martrikelnummer);
        console.log(info.studiengang);
    }
    //c) 5.
    class Student {
        constructor(_nachname, _vorname, _matrikelnummer, _studiengang) {
            this.nachname = _nachname;
            this.vorname = _vorname;
            this.martrikelnummer = _matrikelnummer;
            this.studiengang = _studiengang;
        }
        showInfo() {
            console.log(`Nachname: ${this.nachname}, Vorname: ${this.vorname}, Matrikelnummer: ${this.martrikelnummer}, Studiengang: ${this.studiengang}`);
        }
    }
    let studentEins = new Student("Baum", "Laura", "425782", "MIB");
    let studentZwei = new Student("Winkler", "Dennis", "967334", "OMB");
    let studentDrei = new Student("Fischer", "Vivien", "456834", "MKb");
    let studentArr = [studentEins, studentZwei];
    studierendeArr.push(studentDrei);
    studierendeArr.push(new Student("Schulz", "Marvin", "727394", "MKB"));
    console.log(studentArr[0].nachname);
    console.log(studentArr[1].vorname);
    console.log(showInfo(studentEins));
    console.log(showInfo(studentZwei));
    console.log(showInfo(studentDrei));
    for (let student of studentArr) {
        student.showInfo();
    }
    // 2. a)
    function backwards(_arr) {
        let reversed = [];
        for (let i = 0; i < _arr.length; i++) {
            reversed.push(_arr[_arr.length - i - 1]);
        }
        return reversed;
    }
    console.log(backwards([2, 3, 6, 5, 5, 3, 66, 23]));
    // b)
    function join(_arr1, _arr2) {
        let zusammen = [];
        for (let i = 0; i < _arr1.length; i++) {
            zusammen.push(_arr1[i]);
        }
        for (let i = 0; i < _arr2.length; i++) {
            zusammen.push(_arr2[i]);
        }
        return zusammen;
    }
    console.log(join([4, 6, 8, 1, 5], [3, 9, 1, 3, 1, 8]));
    // c)
    function split(_array, _teil1, _teil2) {
        let teilt = [];
        for (let i = _teil1; i <= _teil2; i++) {
            teilt.push(_array[i]);
        }
        return teilt;
    }
    console.log(split([3, 6, 24, 5, 2, 999, 42, 45, 5, 2, 56, 5], 4, 8));
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    context.lineWidth = 5; //Rahmen
    context.strokeRect(10, 10, 400, 350);
    context.beginPath(); //Himmel
    context.rect(10, 10, 400, 300);
    context.fillStyle = "rgb(51, 90, 177)";
    context.fill();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.stroke();
    context.beginPath(); //Gras
    context.rect(10, 310, 400, 50);
    context.fillStyle = "green";
    context.fill();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.stroke();
    context.beginPath(); //Wolke 1
    context.moveTo(170, 80);
    context.bezierCurveTo(430, 70, 370, 50, 300, 50);
    context.bezierCurveTo(320, 5, 250, 20, 200, 50);
    context.bezierCurveTo(200, 5, 150, 20, 100, 80);
    context.closePath();
    context.lineWidth = 2;
    context.fillStyle = "lightblue";
    context.fill();
    context.strokeStyle = "lightblue";
    context.stroke();
    context.beginPath(); // Wolke 2
    context.moveTo(170, 150);
    context.bezierCurveTo(430, 170, 70, 90, 40, 160);
    context.bezierCurveTo(320, 150, 250, 70, 50, 150);
    context.bezierCurveTo(200, 150, 120, 80, 30, 140);
    context.closePath();
    context.lineWidth = 2;
    context.fillStyle = "lightblue";
    context.fill();
    context.strokeStyle = "lightblue";
    context.stroke();
    context.beginPath(); //Haus
    context.rect(50, 250, 100, 80);
    context.fillStyle = "brown";
    context.fill();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.stroke();
    let centerX = 350;
    let centerY = 80;
    let radius = 30;
    context.beginPath(); //Sonne
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "yellow";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "orange";
    context.stroke();
    context.beginPath(); //Hausdach
    context.moveTo(50, 250);
    context.lineTo(100, 200);
    context.lineTo(150, 250);
    context.closePath();
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "lightcoral";
    context.fill();
    context.beginPath(); //Fenster 1
    context.rect(65, 260, 20, 30);
    context.fillStyle = "gray";
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();
    context.beginPath(); //Fenster 2
    context.rect(115, 260, 20, 30);
    context.fillStyle = "gray";
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();
    context.beginPath(); //Tür
    context.rect(90, 295, 22, 35);
    context.fillStyle = "black";
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();
    context.beginPath(); //Türknauf
    context.arc(95, 310, 2, 0, 2 * Math.PI, false);
    context.fillStyle = "orange";
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = "orange";
    context.stroke();
    context.beginPath(); //Baumstamm
    context.rect(290, 300, 22, 35);
    context.fillStyle = "sienna";
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();
    context.beginPath(); //unteres Baumstück
    context.arc(300, 260, 45, 0, 2 * Math.PI, false);
    context.fillStyle = "seagreen";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.stroke();
    context.beginPath(); //mittel Baumstück
    context.arc(300, 210, 35, 0, 2 * Math.PI, false);
    context.fillStyle = "seagreen";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.stroke();
    context.beginPath(); //Baumkrone            
    context.arc(300, 170, 25, 0, 2 * Math.PI, false);
    context.fillStyle = "seagreen";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.stroke();
    //c
    createRect();
    function createRect() {
        let x = zufall(0, 500);
        let y = zufall(370, 900);
        let w = zufall(50, 200);
        let h = zufall(50, 200);
        let r = zufall(0, 255);
        let g = zufall(0, 255);
        let b = zufall(0, 255);
        return {
            breite: w,
            hoehe: h,
            posX: x,
            posY: y,
            farbe: `rgb(${r}, ${g}, ${b})`
        };
    }
    function zufall(_min, _max) {
        return Math.floor(Math.random() * (_max - _min) + _min);
    }
    //d
    function drawRect(_rechteck) {
        context.fillStyle = _rechteck.farbe;
        context.fillRect(_rechteck.posX, _rechteck.posY, _rechteck.breite, _rechteck.hoehe);
    }
    //e
    let rects = [];
    for (let i = 0; i < 6; i++) {
        rects.push(createRect());
    }
    for (let rect of rects) {
        drawRect(rect);
    }
})(aufgabe2_2 || (aufgabe2_2 = {}));
//# sourceMappingURL=script.js.map