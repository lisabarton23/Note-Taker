 const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const notes = require ("./db/db.json")
const fs = require ("fs");
const app = express();


const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));


    


app.get ('/',(req,res)=>{

    res.sendFile(path.join(__dirname,'./public/index.html'));
    
    })
    
    app.get ('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname,'./public/notes.html'))
    
    })


    //to be able to see and chose notes that have already been written
app.get("/api/notes/", (req, res)=>{
  // const chosen = req.params.notes;
  fs.readFile(path.join(__dirname, './db/db.json'), function read(err, data) {
    if (err) {
        throw err;
    }
    res.json(notes);

    // Invoke the next step here however you like
    console.log("works");   // Put all of the code here (not the best solution)
   
});
 
//   fs.readFileSync(path.join (__dirname, './db/db.json'))
// res.json(chosen)


})
    

  
//to be able to post the notes to the page and then save them, not overwrite them
 app.post('/api/notes', (req, res) => { //need to add note to db.json and an id
const newNote = req.body;

notes.push(newNote)
  //trying to push into the db.json file should this be going to an 
  //empty array on the.js and then the db.json grabs from that array
  // for the app.get? const notes [] global varaibale, notes.push.newnote, 
  //change current notes to dbObj then notes.push(dbobj) 


  res.json(newNote);})


























app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
