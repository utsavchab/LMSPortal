import express from 'express';
import Student from "../models/studentModel.js"


const router = express.Router()


router.post('/', async (req, res) => {
//    console.log(req.body);
   const {name , email,mobile,address, password} = req.body;
//    console.log(name,email)
  
   
   await Student.find({stud_email:email}).then( async (data)=>{
        
        if(data.length == 0){
            const newStudent =  new Student({
                stud_name: name,
                stud_email: email,
                stud_mobile: mobile,
                stud_address: address,
                password: password,

                
            })
            
            await newStudent.save().then(()=>{res.status(200).send(newStudent)}).catch((err)=>{res.status(404).send(err) ; console.log(err)})
        }else{
            
            res.status(409).send("Email ID Already Exist")
        }
        
        
   })
   

}
)


export default router;

