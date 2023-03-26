const express = require('express');

// route
const route = require('./controller/index');

// cors
const cors = require('cors');

// port
const port = parseInt(process.env.PORT) || 4000;

// Express app
const app = express();

// Middleware
// const errorHandling = require('./middleware/ErrorHandling');

//
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

/*
express.json: setting the content-type to application/json
bodyParser.urlencoded( {extended: true} ): The Object will contain
values of any type instead of just a string
*/

app.use((req, res, next)=> {
        res.header('Access-Control-Allow-Origin', '*')
        res.header("Access-Control-Allow-Credentials", "true")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "*")
        next();
});
app.use(
    cors(),
    bodyParser.json(),
    cookieParser(),
    express.json(),
    express.urlencoded({extended: false})
    );

app.use(route);

// The Server is running
app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
});
// The Handling of all errors
// app.use(errorHandling);