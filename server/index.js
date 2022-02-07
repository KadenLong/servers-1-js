const express = require('express');

const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());


app.get('/api/users', (req, res) =>{
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
})

app.get('/weather/:tempurature', (req, res) => {
    const { tempurature } = req.params
    const phrase = `It was ${tempurature} today`
    res.status(200).send(phrase);
})

const serverPort = 4000
app.listen(serverPort, () => console.log(`Server is running on port ${serverPort}`));

