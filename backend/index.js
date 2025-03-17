const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');


const router = express.Router();

const app = express();

app.use(cors());
app.use(bodyParser.json);

const chatRoutes = require('./routes/chatRoutes')
app.post('/api', chatRoutes);


app.listen(5000, () => {
    console.log("server is running on port 5000");
})



