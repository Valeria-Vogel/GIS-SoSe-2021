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

    async function insert(_e: Event): Promise<void> {


        let fd: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>fd);
        let response: Response = await fetch(url + "/insert?" + query);
        console.log(await response.json());

    }
    let type: string;

    async function findAll(_e: Event): Promise<void> {

        let out: HTMLDivElement = <HTMLDivElement>document.getElementById("output")!;
        out.innerHTML = "";
        let formData: FormData = new FormData(document.forms[0]);
        url += type;

        //tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let response: Response = await fetch(url += "?" + query.toString());
        let responseText: string = await response.text();
        alert(responseText); //kann auskommentiert werden



        if (type == "/json") {
            let responseJSON: JSON = JSON.parse(responseText);
            console.log(responseJSON);
        }

    }
}

  




