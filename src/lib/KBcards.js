/* jshint esversion: 6 */

let DBcards = {
      cards : [
      { id: 1,
        title: "React Make Better styles",
        priority: "medium",
        status: "queue",
        createdBy: "james",
        assignedTo: "notJames"
      },
      { id: 2,
        title: "Make More styles",
        priority: "low",
        status: "done",
        createdBy: "otherJames",
        assignedTo: "james"
      },
      { id: 3,
        title: "Make Great styles",
        priority: "high",
        status: "progress",
        createdBy: "otherJames",
        assignedTo: "james"
      }
    ]
  };

//GET api/cards
export function KBcards(){
  return new Promise ((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function() {
      //console.log('DEBUG HERE',this.responseText);
      var parsedData = JSON.parse(this.responseText);
      resolve(parsedData);
    });
    oReq.open("GET", "api/cards");
    oReq.send();
  });
}

//POST /api/cards/new
export function addCardToDB(card){
  //console.log('addCardToDB card:', card);
  return new Promise((resolve, reject) =>{
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function() {
      console.log('response text', this.responseText);
      var parsedResponse = JSON.parse(this.responseText);
      resolve(parsedResponse);
    });
    oReq.open("POST", "api/cards/new");
    oReq.setRequestHeader("Content-type", "application/json;charset=UTF-8");

    console.log("card from addCardToDB", card);
    oReq.send(JSON.stringify(card));
    // DBcards.cards.push(card);
    // resolve("OK!");
  });
}