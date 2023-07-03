import express from 'express';
import Student from "../models/studentModel.js"


const router = express.Router()


router.post('/', async (req, res) => {
//    console.log("login " , req.body);
   const { email, password} = req.body;
  
   await Student.findOne({stud_email:email}).then( async (data)=>{
        if(data){
            console.log(data.password , password)
            if(data.password === password){
                res.status(200).send("success")
            }else{
                res.status(401).send("Invalid Credentials")
            }
        }else{
            res.status(404).send("Not Found")
        }
        
   }).catch((err) =>{
        res.send(404).send(err)
   })
   

}
)


export default router;

