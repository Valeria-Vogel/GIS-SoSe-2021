namespace Aufgabe3_4 {

    /* let btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
     btn.addEventListener("click", klicken);
 
 
     async function klicken(): Promise<void> {
         console.log("erfolgt");
 
     }*/
    export interface Feedback {
        _id: string;
        lastname: string;
        firstname: string;
        registration: number;
        message: string;
    }

    //let serverURL: string = "http://localhost:8100";
    let serverURL: string = "https://gissose2021heroku.herokuapp.com";

    init();

    function init(): void {
        document.getElementById("submit")?.addEventListener("click", insert);
        document.getElementById("feedback")?.addEventListener("click", findAll);

    }

    async function insert(_e: Event): Promise<void> {
        let hiddenRatingInput: HTMLInputElement = <HTMLInputElement>document.getElementById("rating-input");


        let fd: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>fd);
        let response: Response = await fetch(serverURL + "/insert?" + query);
        console.log(await response.json());
        hiddenRatingInput.value = "-1";
    }

    async function findAll(_e: Event): Promise<void> {
        let response: Response = await fetch(serverURL + "/read");
        let feedbacks: Feedback[] = await response.json();
        let out: HTMLDivElement = <HTMLDivElement>document.getElementById("output")!;
        out.innerHTML = "";

        for (let f of feedbacks) {
            console.log(createOneFeedbackDisplay(f));

        }
    }

    function createOneFeedbackDisplay(_f: Feedback): void {
        let feedbackDiv: HTMLDivElement = document.createElement("div");
        feedbackDiv.classList.add("one-feedback");
        feedbackDiv.setAttribute("_id", _f._id);
    }

}


