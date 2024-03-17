const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "userssign"
})

app.get('/',(req, res) => {
    const sql = "SELECT * FROM listofuser";
    db.query(sql, (err, result)=>{
        if(err) return res.json({message:"Error inside server"});
        return res.json(result);
    })
})
/*
app.delete('/user/:ID',(req,res) => {
    const userId = req.params.ID;
    const sql = "DELETE FROM listofuser WHERE id = ?";
    db.query(sql,[userId],(err,result)=>{
        if(err){
            console.log("error to delete users"+err.stack);
            res.status(500).json({error:"error while deleting"})
        }
            return res.json({message:"deleted successfully"})
    })
})
*/

app.post('/users',(req,res)=>{
    const sql="INSERT INTO listofuser (`gender`,`age`,`dob`,`place`,`passion`,`contact`,`altercontact`,`language`) VALUES (?)";
    const values = [
        req.body.gender,
        req.body.age,
        req.body.dob,
        req.body.place,
        req.body.passion,
        req.body.contact,
        req.body.altercontact,
        req.body.language
    ]
    db.query(sql,[values],(err,result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})
app.listen(8080,()=>{
    console.log("listening")
})