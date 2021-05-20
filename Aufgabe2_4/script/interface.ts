namespace Aufgabe2_4 {


    export interface Beschreibung {
        isGirlBody: boolean;
        bildId: string;
        bild: string;
        was: string;
    }

    export interface Darstellung {
        body: Beschreibung[];
        hair: Beschreibung[];
        outfit: Beschreibung[];
    }
    export interface Selection {
        body?: Beschreibung;
        hair?: Beschreibung;
        outfit?: Beschreibung;
    }

}