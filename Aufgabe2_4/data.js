"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    /*export let wahl: Darstellung = {
      body: [
        { bildId: "GirlBody", bild: "./img/GirlBody.jpg", was: "Mädchen" },
        { bildId: "GirlBody", bild: "./img/BoyBody.jpg", was: "Junge" }
      ],
      hair: [
        { bildId: "GirlHair1", bild: "./img/GirlHair1.jpg", was: "Haare 1" },
        { bildId: "GirlHair2", bild: "./img/GirlHair2.jpg", was: "Haare 2" },
        { bildId: "GirlHair3", bild: "./img/GirlHair3.jpg", was: "Haare 3" }
        /*{ bildId: "BoyHair1", bild: "./img/BoyHaare1.jpg", was: "Haare 1" },
        { bildId: "BoyHair2", bild: "./img/BoyHaare2.jpg", was: "Haare 2" },
        { bildId: "BoyHair3", bild: "./img/BoyHaare3.jpg", was: "Haare 3" }
      ],*/
    /* outfit: [
       { bildId: "GirlOutfit1", bild: "./img/GirlOutfit1.jpg", was: "Outfit 1" },
       { bildId: "GirlOutfit2", bild: "./img/GirlOutfit2.jpg", was: "Outfit 2" },
       { bildId: "GirlOutfit3", bild: "?", was: "Outfit3" }
     ],
       extra: [
         { bildId: "extra1", bild: "?", was: "Extra 1" },
         { bildId: "extra2", bild: "?", was: "Extra 2" },
         { bildId: "extra3", bild: "?", was: "Extra 3" }
       ]
   };*/
    Aufgabe2_4.auswahlJSON = `
  {
      "body": [
          {
              "bildID": "girlBody",
              "bild": "./img/GirlBody.jpg", 
              "was": "Mädchen"
          },
          {   
              "bildId": "boyBody",
              "bild": "img/BoyBody.jpg", 
              "was": "Junge"
          }
      ],
      "hair": [
          {
            "bildID": "g_hair1",
            "bild": "./img/GirlHair1.jpg", 
            "was": "Haare 1"
          },
          {
            "bildID": "g_hair2",
            "bild": "./img/GirlHair2.jpg", 
            "was": "Haare 2"
          },
          {
            "bildID":"g_hair3",
            "bild":"./img/GirlHair3.jpg", 
            "was":"Haare 3"
          }
      ],
      "outfit": [
          {
              "bildID": "?",
              "bild": "?", 
              "was": "?"
          },
          {
            "bildID": "?",
            "bild": "?", 
            "was": "?"
          },
          {
            "bildID": "?",
            "bild": "?", 
           "was": "?"
          }
      ],
      "extra": [
        {
            "bildID": "?",
            "bild": "?", 
            "was": "?"
        },
        {
          "bildID": "?",
          "bild": "?", 
          "was": "?"
        },
        {
          "bildID": "?",
          "bild": "?", 
         "was": "?"
        }
    ]
  }
  `;
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=data.js.map