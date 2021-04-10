// require("dotenv").config()
const express = require("express")
const app = express()
const userRouter = require("./api/users/user.router")




// For parsing application/json
app.use(express.json())

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {

    return res.status(200).json({
        "Status": "Server Running",
        "message": "Hi ! Welcome to the server , My Boss name is Seraj Alam if you have any query please contact him at +919140327455"
    });
});


app.use('/api/users', userRouter);




app.listen(process.env.SERVER_PORT, () => {
    console.log("Server is running on port " + process.env.SERVER_PORT)
})