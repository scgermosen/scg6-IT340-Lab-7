const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.get('/', (req, res) => {
res.send('Hello MEAN Stack!');
});

// route for handling requests from the Anguar client
app.get('api/message', (req, res) => {
    res.json({message: 
        "Hello from the Express server"    });
});

app.listen(port, () => {
console.log('Server is running on port ${port}');
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

