namespace aufgabe2_2 {

    //1. a)
    min(3, 4, 7, 9, 3, 1, 6, 8, 2);
    function min(..._eingabe: number[]): void {
        let min: number = Infinity;
        for (let i: number = 0; i < _eingabe.length; i++) {
            if (min > _eingabe[i]) {
                min = _eingabe[i];
            }
        }
        console.log(min);

    }

    //b)
    isEvan(1);
    function isEvan(_zahl: number): boolean {

        if (_zahl == 0)
            return true;

        if (_zahl == 1)
            return false;

        let ergebnis: boolean;
        if (_zahl < 0)
            ergebnis = isEvan(_zahl + 2);
        if (_zahl > 0)
            ergebnis = isEvan(_zahl - 2);
        return ergebnis;
    }

    //c) 1.
    interface Student1 {
        nachname: string;
        vorname: string;
        martrikelnummer: string;
        studiengang: string;
    }
    //c) 2.
    let student1: Student1 = { nachname: "Müller", vorname: "Max", martrikelnummer: "233445", studiengang: "OMB" };
    let student2: Student1 = { nachname: "Schmidt", vorname: "Hans", martrikelnummer: "933525", studiengang: "MKB" };
    let student3: Student1 = { nachname: "Sommer", vorname: "Lili", martrikelnummer: "431224", studiengang: "MIB" };
    console.log(student1.martrikelnummer);
    console.log(student2.studiengang);
    console.log(student3.nachname);

    //C) 3.
    let studierendeArr: Student1[] = [student1, student2];
    studierendeArr.push(student3);
    studierendeArr.push({ nachname: "Mayer", vorname: "Nikki", martrikelnummer: "817273", studiengang: "OMB" });

    console.log(studierendeArr[0].nachname);
    console.log(studierendeArr[1].vorname);
    console.log(studierendeArr[2].martrikelnummer);
    console.log(studierendeArr[3].studiengang);


    //c) 4.

    function showInfo(info: Student): void {

        console.log(info.nachname);
        console.log(info.vorname);
        console.log(info.martrikelnummer);
        console.log(info.studiengang);
    }


    //c) 5.

    class Student {
        nachname: string;
        vorname: string;
        martrikelnummer: string;
        studiengang: string;

        constructor(_nachname: string, _vorname: string, _matrikelnummer: string, _studiengang: string) {
            this.nachname = _nachname;
            this.vorname = _vorname;
            this.martrikelnummer = _matrikelnummer;
            this.studiengang = _studiengang;
        }
        showInfo(): void {
            console.log(`Nachname: ${this.nachname}, Vorname: ${this.vorname}, Matrikelnummer: ${this.martrikelnummer}, Studiengang: ${this.studiengang}`);
        }
    }
    let Student1: Student = new Student ("Baum", "Laura", "425782", "MIB");
    let Student2: Student = new Student ("Winkler", "Dennis", "967334", "OMB");
    let Student3: Student = new Student ("Fischer", "Vivien", "456834", "MKb");

    let studentArr: Student[] = [Student1, Student2];
    studierendeArr.push(Student3);
    studierendeArr.push(new Student("Schulz", "Marvin", "727394", "MKB"));

    console.log(studentArr[0].nachname);
    console.log(studentArr[1].vorname);
   

    console.log(showInfo(Student1));
    console.log(showInfo(Student2));
    console.log(showInfo(Student3));

    for (let student of studentArr) {
        student.showInfo();
      }

    // 3. a)
    function backwards(..._arr: number[]): number[] {
        let reversed: number[] = [];
        for (let i: number = _arr.length; i > 0; i++) {
            reversed.push(_arr[i - 1]);

        }

        return reversed;
    }
    backwards(2, 3, 6, 5, 5, 3, 66, 23);


    // b)
    function join(_arr1: number[], _arr2: number[]): number[] {
        let zusammen: number[] = [];
        for (let i: number = 0; i < _arr1.length; i++) {
            zusammen.push(_arr1[i]);
        }
        for (let i: number = 0; i < _arr2.length; i++) {
            zusammen.push(_arr2[i]);

        }
        return zusammen;
    }
    console.log(join([4, 6, 8, 1, 5], [3, 9, 1, 3, 1, 8]));


    // c)
    function split(_array: number[], _teil1: number, _teil2: number): number[] {
        let teilt: number[] = [];

        for (let i: number = _teil1; i <= _teil2; i++) {
            teilt.push(_array[i]);
        }
        return teilt;
    }
    console.log(split([3, 6, 24, 5, 2, 999, 42, 45, 5, 2, 56, 5], 4, 8));


    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");

    context.lineWidth = 5;  //Rahmen
    context.strokeRect(10, 10, 400, 350);

    context.beginPath();    //Himmel
    context.rect(10, 10, 400, 300);
    context.fillStyle = "rgb(51, 90, 177)";
    context.fill();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.stroke();

    context.beginPath();    //Gras
    context.rect(10, 310, 400, 50);
    context.fillStyle = "green";
    context.fill();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.stroke();

    context.beginPath();    //Wolke 1
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

    context.beginPath();    // Wolke 2
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

    context.beginPath();    //Haus
    context.rect(50, 250, 100, 80);
    context.fillStyle = "brown";
    context.fill();
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.stroke();


    let centerX: number = 350;
    let centerY: number = 80;
    let radius: number = 30;

    context.beginPath();    //Sonne
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "yellow";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "orange";
    context.stroke();

    context.beginPath();    //Hausdach
    context.moveTo(50, 250);
    context.lineTo(100, 200);
    context.lineTo(150, 250);
    context.closePath();
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "lightcoral";
    context.fill();

    context.beginPath();    //Fenster 1
    context.rect(65, 260, 20, 30);
    context.fillStyle = "gray";
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();

    context.beginPath();    //Fenster 2
    context.rect(115, 260, 20, 30);
    context.fillStyle = "gray";
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();

    context.beginPath();    //Tür
    context.rect(90, 295, 22, 35);
    context.fillStyle = "black";
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();

    context.beginPath();    //Türknauf
    context.arc(95, 310, 2, 0, 2 * Math.PI, false);
    context.fillStyle = "orange";
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = "orange";
    context.stroke();

    context.beginPath();    //Baumstamm
    context.rect(290, 300, 22, 35);
    context.fillStyle = "sienna";
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();

    context.beginPath();    //unteres Baumstück
    context.arc(300, 260, 45, 0, 2 * Math.PI, false);
    context.fillStyle = "seagreen";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.stroke();

    context.beginPath();    //mittel Baumstück
    context.arc(300, 210, 35, 0, 2 * Math.PI, false);
    context.fillStyle = "seagreen";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.stroke();

    context.beginPath();    //Baumkrone            
    context.arc(300, 170, 25, 0, 2 * Math.PI, false);
    context.fillStyle = "seagreen";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.stroke();

    //b)  


    interface Rechteck {
        posX: number;
        posY: number;
        breite: number;
        hoehe: number;
        farbe: string;
    }
    //c
    createRect();
    function createRect(): Rechteck {
        let x: number = zufall(0, 500);
        let y: number = zufall(370, 900);
        let w: number = zufall(50, 200);
        let h: number = zufall(50, 200);

        let r: number = zufall(0, 255);
        let g: number = zufall(0, 255);
        let b: number = zufall(0, 255);

        return {
            breite: w,
            hoehe: h,
            posX: x,
            posY: y,
            farbe: `rgb(${r}, ${g}, ${b})`
        };
    }

    function zufall(_min: number, _max: number): number {
        return Math.floor(Math.random() * (_max - _min) + _min);
    }

    //d
    function drawRect(_r: Rechteck): void {
        context.fillStyle = _r.farbe;
        context.fillRect(_r.posX, _r.posY, _r.breite, _r.hoehe);
    }

    //e
    let rects: Rechteck[] = [];
    for (let i: number = 0; i < 6; i++) {
        rects.push(createRect());
    }

    for (let rect of rects) {
        drawRect(rect);
    }

}
