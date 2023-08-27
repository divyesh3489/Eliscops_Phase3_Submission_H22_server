const data = require('./db.json')
const expr = require("express")
const path = require("path")
const app = expr()

app.get("/signin",(req,res)=>{
    res.json(data)
})

app.listen(3001, () => {
    console.log('JSON Server is running on port 3001');
});


