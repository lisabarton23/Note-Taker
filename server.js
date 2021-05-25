 const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const dbObj = require ("./db/db.json")
const fs = require ("fs");
const app = express();


const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

const notes =[]
    


app.get ('/',(req,res)=>{

    res.sendFile(path.join(__dirname,'./public/index.html'));
    
    })
    
    app.get ('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname,'./public/notes.html'))
    
    })


    
    app.get("/api/notes
readFileAsync (__dirname, './db/db.json', 'utf8');

write(note){
  return writeFileAsync(__dirname, './db/db.json', JSON.stringify(note));
}
    
app.get("/api/notes", (req, res)=>{
  const chosen = req.params.notes;
  fs.readFileSync(path.join (__dirname, './db/db.json'))
res.json(dbObj)

//having issue that newnote is overwriting old notes
})
    }
// app.get('/api/notes/:title', (req, res) => {
//   const noteval = req.params.noteval;



//   for(const note of notes){
//     if(noteval === note.title)
//     return res.json(note)
//   }
//   res.send('No note found');
//   return res.json(false);
//     })
  

// app.post('/api/notes', (req, res) => { //need to add note to db.json a
// const newNOte = req.body;

// notes.push(newNOte)
//   // fs.readFileSync(path.join (__dirname,"./db/db.json"))


//   res.json(newNOte);}
// //need a getNotes function
// )

























app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
