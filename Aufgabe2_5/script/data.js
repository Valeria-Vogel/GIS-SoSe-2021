"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    /*export let wahl: Darstellung = {
      body: [
        { isGirlBody: true, bildId: "GirlBody", bild: "./img/GirlBody.jpg", was: "Mädchen" },
        { isGirlBody: false, bildId: "GirlBody", bild: "./img/BoyBody.jpg", was: "Junge" }
      ],
      hair: [
        { isGirlBody: true, bildId: "GirlHair1", bild: "./img/GirlHair1.jpg", was: "Haare 1" },
        { isGirlBody: true, bildId: "GirlHair2", bild: "./img/GirlHair2.jpg", was: "Haare 2" },
        { isGirlBody: true, bildId: "GirlHair3", bild: "./img/GirlHair3.jpg", was: "Haare 3" },
        { isGirlBody: false, bildId: "BoyHair1", bild: "./img/BoyHaare1.jpg", was: "Haare 1" },
        { isGirlBody: false, bildId: "BoyHair2", bild: "./img/BoyHaare2.jpg", was: "Haare 2" },
        { isGirlBody: false, bildId: "BoyHair3", bild: "./img/BoyHaare3.jpg", was: "Haare 3" }
      ],
      outfit: [
        { isGirlBody: true, bildId: "GirlOutfit1", bild: "./img/GirlOutfit1.jpg", was: "Outfit 1" },
        { isGirlBody: true, bildId: "GirlOutfit2", bild: "./img/GirlOutfit2.jpg", was: "Outfit 2" },
        { isGirlBody: true, bildId: "GirlOutfit3", bild: "./img/GirlOutfit3.jpg", was: "Outfit3" },
        { isGirlBody: false, bildId: "BoyOutfit1", bild: "./img/BoyOutfit1.jpg", was: "Outfit 1" },
        { isGirlBody: false, bildId: "BoyOutfit2", bild: "./img/BoyOutfit2.jpg", was: "Outfit 2" },
        { isGirlBody: false, bildId: "BoyOutfit3", bild: "./img/BoyOutfit3.jpg", was: "Outfit3" }
      ]
    };
  */
    Aufgabe2_5.auswahlJSON = `
  {
      "body": [
          {
              "isGirlBody": "true",
              "bildID": "girlBody",
              "bild": "./img/GirlBody.jpg", 
              "was": "Mädchen"
          } ,
          {   
              "isGirlBody": "false",
              "bildId": "boyBody",
              "bild": "img/BoyBody.jpg", 
              "was": "Junge"
          }
        ],
      "hair": [
          {
            "isGirlBody": "true",
            "bildID": "g_hair1",
            "bild": "./img/GirlHair1.jpg", 
            "was": "Mädchen Haare 1"
          },
          {
            "isGirlBody": "true",
            "bildID": "g_hair2",
            "bild": "./img/GirlHair2.jpg", 
            "was": "Mädchen Haare 2"
          },
          {
            "isGirlBody": "true",
            "bildID":"g_hair3",
            "bild":"./img/GirlHair3.jpg", 
            "was":"Mädchen Haare 3"
          },
           {
            "isGirlBody": "false",
          "bildID": "b_hair1",
          "bild": "./img/BoyHaare1.jpg", 
          "was": "Junge Haare 1"
        },
        {
          "isGirlBody": "false",
          "bildID": "b_hair2",
          "bild": "./img/BoyHaare2.jpg", 
          "was": "Junge Haare 2"
        },
        {
          "isGirlBody": "false",
          "bildID":"b_hair3",
          "bild":"./img/BoyHaare3.jpg", 
          "was":"Junge Haare 3"
        }
      ],
      "outfit": [
          {
            "isGirlBody": "true",
              "bildID": "GirlOutfit1",
              "bild": "./img/GirlOutfit1.jpg", 
              "was": "Mädchen Outfit 1"
          },
          {
            
            "isGirlBody": "true",
            "bildID": "GirlOutfit2",
            "bild": "./img/GirlOutfit2.jpg", 
            "was": "Mädchen Outfit 2"
          },
          {
            "isGirlBody": "true",
            "bildID": "GirlOutfit3",
            "bild": "./img/GirlOutfit3.jpg", 
           "was": "Mädchen Outfit 3"
          },
        {
          "isGirlBody": "false",
            "bildID": "BoyOutfit1",
            "bild": "./img/BoyOutfit1.jpg", 
            "was": "Junge Outfit 1"
        },
        {
          "isGirlBody": "false",
          "bildID": "BoyOutfit2",
          "bild": "./img/BoyOutfit2.jpg", 
          "was": "Junge Outfit 2"
        },
        {
          "isGirlBody": "false",
          "bildID": "BoyOutfit3",
          "bild": "./img/BoyOutfit3.jpg", 
         "was": "Junge Outfit 3"
        }
    ]
      
  }
  `;
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=data.js.map