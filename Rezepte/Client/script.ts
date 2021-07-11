namespace Prüfung {


    export interface Rezepte {
        _id: string;
        img_url: string;
        name: string;
    }

    export interface Essen {
        gericht: Rezepte[];

    }
    export interface Selection {
        gericht?: Rezepte;



    }
}
