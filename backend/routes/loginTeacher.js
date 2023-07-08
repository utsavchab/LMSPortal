import express from "express"
import Teacher from "../models/teacherModel.js"
const router = express.Router()

router.post("/" ,async (req,res)=>{
    console.log(req.body)
    const {tchr_email,password} = req.body;
    await Teacher.findOne({tchr_email:tchr_email})
    .then((data)=>{
        console.log(data)
        if(data){
            if(data.tchr_password === password){
                res.status(200).send(data);
            }else{
                res.status(401).send("Invalid Credentials")
            }
        }else{
            res.status(404).send("Teacher Not Registered")
        }
    })
})

export default router