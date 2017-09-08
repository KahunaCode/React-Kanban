/* jshint esversion: 6 */

export function KBcards(){
  return new Promise ((resolve, reject) => {
    resolve({
      cards : [
      { title: "Make Better styles",
        priority: "medium",
        status: "queue",
        createdBy: "james",
        assignedTo: "notJames"
      },
      { title: "Make More styles",
        priority: "low",
        status: "done",
        createdBy: "otherJames",
        assignedTo: "james"
      },
      { title: "Make Great styles",
        priority: "high",
        status: "progress",
        createdBy: "otherJames",
        assignedTo: "james"
      }
    ]
    //cards: ['one', 'two', 'three']
  });
  });
}