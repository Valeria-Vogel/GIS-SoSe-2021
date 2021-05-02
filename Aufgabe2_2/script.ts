namespace aufgabe2_2 {

    //1. a)
    min();
    function min(): void {
        let x: number[] = [35, 67, 7, 93, 62, 14];
        let laenge: number = x.length;
        let min: number = Infinity;
        while (laenge--) {
            if (Number(x[laenge]) < min) {
                min = Number(x[laenge]);
            }
        }
        console.log(min);

    }
    //b)
    isEvan(75);
    function isEvan(zahl: number): void {
        let gerade: boolean = true;

        if (zahl == 0 || zahl % 2 == 0) {
            console.log(gerade);
        } else {
            console.log(!gerade);

        }
        if (zahl < 0) {
            console.log(zahl - 2); // Für jede zahl unter o wird die Zahl - 2 genommen und ausgegeben, somit wäre für "-1" die Ausgabe -3

        }
    }
    //c) 1.
    interface Student {
        nachname: string;
        vorname: string;
        martrikelnummer: string;
        studiengang: string;
    }
    //c) 2.
    let student1: Student = { nachname: "Müller", vorname: "Max", martrikelnummer: "233445", studiengang: "OMB" };
    let student2: Student = { nachname: "Schmidt", vorname: "Hans", martrikelnummer: "933525", studiengang: "MKB" };
    let student3: Student = { nachname: "Sommer", vorname: "Lili", martrikelnummer: "431224", studiengang: "MIB" };
    console.log(student1.martrikelnummer);
    console.log(student2.studiengang);
    console.log(student3.nachname);

    //C) 3.
    let studierende: string[] = [student3.nachname, student3.vorname, student3.martrikelnummer, student3.studiengang];
    let studierender: string[] = ["Hoffmann", "Justin", "235623", "MKB"];
    console.log(studierende);
    console.log(studierender);

    //c) 4.

    function showInfo(info: Student): void {

        console.log(info.nachname);
        console.log(info.vorname);
        console.log(info.martrikelnummer);
        console.log(info.studiengang);
    }
    console.log(showInfo(student1));
    console.log(showInfo(student2));
    console.log(showInfo(student3));

    //c) 5.

    class StudentenInfos {
        nachname: string;
        vorname: string;
        martrikelnummer: string;

        constructor(_nachname: string, _vorname: string, _matrikelnummer: string) {
            this.nachname = _nachname;
            this.vorname = _vorname;
            this.martrikelnummer = _matrikelnummer;
        }
        showInfo(student: StudentenInfos): void {
            console.log(student.nachname);
            console.log(student.vorname);
            console.log(student.martrikelnummer);
        }
    }





    // 3. a)
    backwards();

    function backwards(): void {
        let arr: number[] = [4, 6, 7, 2, 53, 1, 3, 0];
        console.log(arr.reverse());
    }

    // b)
    join();
    function join(): void {
        let arr1: number[] = [5, 6, 7];
        let arr2: number[] = [1, 2, 3];

        let zusammen: number[] = arr1.concat(arr2); //Fügt 2 Arrays zusammen
        console.log(zusammen);
    }

    // c)
    split();
    function split(): void {
        let arr: number[] = [23, 24, 57, 344, 33, 4, 1, 688, 3, 44, 3]; // gibt die Zahlen in in einem bestimmten Interval aus

        let teilt: number[] = arr.slice(2, 8);
        console.log(teilt);
    }

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
        [x: string]: any;
        x: number;
        y: number;
        w: number;
        h: number;
    }
    //c
    createRect();
    function createRect(): void {
        let x: number, y: number, w: number, h: number;
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
        let context3: CanvasRenderingContext2D = canvas.getContext("2d");
        let _x: number = x;
        let _y: number = y;
        let _w: number = w;
        let _h: number = h;

        zufall();
        function zufall(): void {
            if (_w + _x > canvas.width || _w - _x < 0) {
                _w = -_w;
            }
            if (_h + _y > canvas.height || _h - _y < 0) {
                _h = -_h;
            }
            _x += _w;
            _y += _h;


        }

        //d
        drawRect();
        function drawRect(): void {
            context3.beginPath();
            context3.fillRect(_x, _y, _w, _h);
        }
        drawRandom(2);
        function drawRandom(_a: number): void {
            let rects: Rechteck[] = [];
            for (let v: number = 0; v < rects.length - 1; v++) {
                rects[v].drawRect();
            }
        }
    }


}
