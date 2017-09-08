/* jshint esversion: 6 */

export function KBcards(){
  return new Promise ((resolve, reject) => {
    resolve({
    //   cards : [
    //   { title: "Make Better styles",
    //     priority: "medium",
    //     status: "not done",
    //     createdBy: "james",
    //     assignedTo: "notJames"
    //   },
    //   { title: "Make More styles",
    //     priority: "low",
    //     status: "not done",
    //     createdBy: "james",
    //     assignedTo: "otherJames"
    //   }
    // ]
    cards: ['one', 'two', 'three']
  });
  });
}