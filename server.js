/* jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const bp = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;
// const db = require('./models');
// const { Cards } = db;
let DBcards = {
      cards : [
      { id: 1,
        title: "Server Make Better styles",
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

app
.get('/api/cards', (req,res) =>{
  res.send(DBcards);
})
.post('/api/cards/new', (req,res) => {
  res.send('POST request to /api/cards/new');
});



const server = app.listen( PORT, () =>{
  console.log('server running on', PORT);
});