const express = require('express');
const path = require('path');
const notes = require ("./db/db.json")
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


app.get("/api/notes", (req, res)=>{

if(notes.length)
res.json(notes)


})

app.get('/api/notes/:title', (req, res) => {
  const noteval = req.params.noteval;

  console.log(noteval);



  for(const note of notes){
    if(noteval === note.title)
    return res.json(note)
  }
  res.send('No note found');
  return res.json(false);
    })
  

app.post('/api/notes', (req, res) => {
  
  const newNote = req.body;

  console.log(newNote);

  // We then add the json the user sent to the array
  notes.push(newNote);

  // We then display the JSON to the users
  res.json(newNote);
});






























app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
