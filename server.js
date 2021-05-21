const express = require('express');
const path = require('path');
const dbObj = require ("./db/db.json")
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

const notes =[
    {
        "title":"",
        "text":"",
    }


]
app.get ('/',(req,res)=>{

    res.sendFile(path.join(__dirname,'./public/index.html'));
    
    })
    
    app.get ('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname,'./public/notes.html'))
    
    })


app.get("/api/notes", (req, res)=>{
res.json(dbObj)


})

app.get('/api/notes/:title', (req, res) => {
  const noteval = req.params.noteval;



  for(const note of notes){
    if(noteval === note.title)
    return res.json(note)
  }
  res.send('No note found');
  return res.json(false);
    })
  

app.post('/api/notes', (req, res) => {
  
  const newNote = req.body;

  

  // We then add the json the user sent to the array
  notes.push(newNote);

  // We then display the JSON to the users
  res.json(newNote);
});



//need a getNotes function


























app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
