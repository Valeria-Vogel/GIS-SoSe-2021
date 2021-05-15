namespace Aufgabe2_3 {

    export interface Beschreibung {
        bild: string;
        was: string;
    }

    export interface Darstellung {
        body: Beschreibung[];
        hair: Beschreibung[];
        outfit: Beschreibung[];
        extra: Beschreibung[];
    }

    export interface Auswahl {
        körper: Beschreibung;
        haare: Beschreibung;
        kleidung: Beschreibung;
        extras: Beschreibung;
    }

    export let wahl: Darstellung = {
        body: [
          { bild: "GirlBody.jpg", was: "Mädchen" },
          { bild: "BoyBody.jpg", was: "Junge" }
        ],
        hair: [
          {bild: "Girl_Body.jpg", was: "Mädchen"  },
          { bild: "Girl_Body.jpg", was: "Mädchen" },
          { bild: "Girl_Body.jpg", was: "Mädchen" }
        ],
        outfit: [
          { bild: "Girl_Body.jpg", was: "Mädchen" },
          { bild: "Girl_Body.jpg", was: "Mädchen" },
          {  bild: "Girl_Body.jpg", was: "Mädchen"}
        ],
        extra: [
            { bild: "Girl_Body.jpg", was: "Mädchen" },
            { bild: "Girl_Body.jpg", was: "Mädchen" },
            { bild: "Girl_Body.jpg", was: "Mädchen"}
          ]
      };
}