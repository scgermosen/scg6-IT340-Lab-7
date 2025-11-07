const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); //Imports user routes

require('dotenv').config();

//middleware to parse JSON request bodies
app.use(express.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
res.send('Hello MEAN Stack!');
});

// route for handling requests from the Anguar client
app.get('/api/message', (req, res) => {
    res.json({message: 
        'Hello from the Express server!'    });
});

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});

app.use(cors());

//handling CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",
                "http://localhost:4200");
    res.header("Access-Control-Allow-Headeres",
        "Origin, X-Requested-With",
        "Content-Type, Accept" );
        next();
})

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    name: String,
    age:Number,
});

const UserModel = mongoose.model("users", userSchema)

app.get("/getUsers", async(req, res)=>{
    const userData = await UserModel.find();
    res.json(userData);
});