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
    const sql = "SELECT * FROM employelist";
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

app.post('/employes',(req,res)=>{
    const sql="INSERT INTO employelist (`NAME`,`EMAIL`,`MOBILE`,`DESIGNATION`,`GENDER`,`COURSE`) VALUES (?)";
    const values = [
        req.body.NAME,
        req.body.EMAIL,
        req.body.MOBILE,
        req.body.DESIGNATION,
        req.body.GENDER,
        req.body.COURSE,
    ]
    db.query(sql,[values],(err,result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.put('/employees/:UNIC_ID', (req, res) => {
    const employeeId = req.params.ID;
    const { NAME, EMAIL, MOBILE, DESIGNATION, GENDER, COURSE } = req.body;
    const sql = "UPDATE employelist SET NAME=?, EMAIL=?, MOBILE=?, DESIGNATION=?, GENDER=?, COURSE=? WHERE UNIC_ID=?";
    const values = [NAME, EMAIL, MOBILE, DESIGNATION, GENDER, COURSE, employeeId];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log("Error updating employee: ", err);
            return res.status(500).json({ error: "Error updating employee" });
        }
        return res.json({ message: "Employee updated successfully" });
    });
});

app.get('/count', (req, res) => {
    const sql = "SELECT COUNT(*) AS totalCount FROM employelist";
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error counting records: ", err);
            return res.status(500).json({ error: "Error counting records" });
        }
        const totalCount = result[0].totalCount;
        return res.json({ totalCount });
    });
});

app.listen(8080,()=>{
    console.log("listening")
})