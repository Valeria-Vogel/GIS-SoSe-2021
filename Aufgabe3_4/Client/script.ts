namespace Aufgabe3_4 {

    let btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
    btn.addEventListener("click", insert);
    let btn2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
    btn2.addEventListener("click", findAll);

    export interface Feedback {
        _id: string;
        name: string;
        firstname: string;
        registration: number;
        message: string;
    }

    //let serverURL: string = "http://localhost:8100";
    let url: string = "https://gissose2021heroku.herokuapp.com";
    let type: string;

    async function insert(_e: Event): Promise<void> {


        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url += "?" + query.toString());
        let responseText: string = await response.text();
        console.log(await response.json());
        console.log(responseText);
        if (type == "/send") {
            let responseJSON: JSON = JSON.parse(responseText);
            console.log(responseJSON);
        }
        
    }


    async function findAll(_e: Event): Promise<void> {

        let out: HTMLDivElement = <HTMLDivElement>document.getElementById("output")!;
        out.innerHTML = "";

    }
}






