/* jshint esversion: 6 */

//GET api/cards
export function KBcards(){
  return new Promise ((resolve, reject) => {
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