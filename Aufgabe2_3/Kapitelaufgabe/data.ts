namespace Aufgabe2_3 {

    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");

    context.beginPath();    //kopf
    context.arc(500, 100, 40, 0, 2 * Math.PI, false);
    context.fillStyle = "peru";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "peru";
    context.stroke();

    context.beginPath();    //körper?
    context.rect(500, 110, 25, 35);
    context.fillStyle = "peru";
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "peru";
    context.stroke();


}