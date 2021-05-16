namespace Aufgabe2_4 {


    export interface Beschreibung {
        bildId: string;
        bild: string;
        was: string;
    }

    export interface Darstellung {
        body: Beschreibung[];
        hair: Beschreibung[];
        outfit: Beschreibung[];
        extra: Beschreibung[];
    }
    
    export interface Variante {
        Body: Beschreibung;
        Hair: Beschreibung;
        Outfit: Beschreibung;
        Extra: Beschreibung;
    }

}