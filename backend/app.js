
const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const {Song, Playlist}= require('./models');
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.path}`);
    next();
    
}
);

app.use(cors());

const playlist = new Playlist('My Playlist', [])
 



app.get('/playlist', (req, res) => {
    res.send(playlist.getSongs());
    
}
);

app.delete('/playlist', (req, res) => {
    try {
        const { song } = req.body;
        console.log(song)
    playlist.removeSong(song);
    res.send(playlist.getSongs()); 
    }
    catch (error) {
        res.status(400).send(error.message);
    }
    
}
);
app.post('/playlist', express.json(), (req, res) => {
    try {
       const {title, artist, genre} = req.body;
    playlist.addSong(title, artist, genre);
    res.send(playlist.getSongs()); 
    }
    catch (error) {
        res.status(400).send(error.message);
    }
    
}
);


app.listen(port, () => {
  console.log(` listening at http://localhost:${port}`);
}
);