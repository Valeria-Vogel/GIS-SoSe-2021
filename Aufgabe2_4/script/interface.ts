namespace Aufgabe2_4 {


    export interface Beschreibung {
        bildId: string;
        bild: string;
        was: string;
    }

    export interface Darstellung {
        body_g: Beschreibung[];
        body_b: Beschreibung[];
        hair: Beschreibung[];
        hair2: Beschreibung[];
        outfit: Beschreibung[];
        outfit2: Beschreibung[];
    }
    export interface Selection {
        body_g?: Beschreibung;
        hair?: Beschreibung;
        outfit?: Beschreibung;
    }
    export interface Selection2 {
        body_b?: Beschreibung;
        hair2?: Beschreibung;
        outfit2?: Beschreibung;
        
        
    }

}