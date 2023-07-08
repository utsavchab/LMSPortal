import express from "express"
import Teacher from '../models/teacherModel.js'
const router = express.Router()

// import { registerUser } from "../controllers/teacherController.js"

router.post('/' , async (req,res)=>{
    console.log(req.body)
    const {tchr_name,tchr_email,tchr_mobile,tchr_address,password} = req.body;
    const newTeacher = new Teacher({
        tchr_name ,
        tchr_email ,
        tchr_mobile ,
        tchr_address ,
        tchr_password : password

    });

    Teacher.findOne({tchr_email}).then( async (data)=>{
        console.log(data)
        if(data){
            res.status(409).send("Email ID Already Exist")
        }else{
            await newTeacher.save().then(()=>res.status(200).send(newTeacher)).catch((err)=>{res.status(404).send(err); console.log(err)})
        }
    })
    

    // res.send("secuuces")
})

export default router