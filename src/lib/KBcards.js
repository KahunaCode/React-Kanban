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

export function KBcards(){
  return new Promise ((resolve, reject) => {
    //resolve(DBcards);//resolve.this.responseText/data... something. console.log and figure out the right key to resolve.
    //GET api/cards
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function() {
      console.log('DEBUG HERE',this.responseText);
      var parsedData = JSON.parse(this.responseText);
      resolve(parsedData);
    });
    oReq.open("GET", "api/cards");
    oReq.send();
  });
}

export function addCardToDB(card){
  return new Promise((resolve, reject) =>{
    DBcards.cards.push(card);
    resolve("OK!");
    //POST /api/cards/new
  });
}