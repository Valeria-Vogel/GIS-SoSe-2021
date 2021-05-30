namespace Aufgabe3_1 {
    document.getElementById("Button").addEventListener("click", handelButtonClick);

    function handelButtonClick(): void {
        response("https://gissose2021heroku.herokuapp.com");
        console.log("Es läuft!");
    }
    async function response(_url: RequestInfo): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let serverResponse: Response = await fetch(_url);
        let responseString: string = await serverResponse.text();
        sessionStorage.setItem("answer", responseString);

    }
    console.log(sessionStorage.getItem("answer"));
}