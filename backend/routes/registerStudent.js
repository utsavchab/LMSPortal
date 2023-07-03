import express from 'express';
import Student from "../models/studentModel.js"


const router = express.Router()


router.post('/', async (req, res) => {
//    console.log(req.body);
   const {name , email,phone,address, password1, password2} = req.body;
//    console.log(name,email)
  
   
   await Student.find({stud_email:email}).then( async (data)=>{
        
        if(data.length == 0){
            const newStudent =  new Student({
                stud_name: name,
                stud_email: email,
                stud_mobile: phone,
                stud_address: address,
                password: password1,

                
            })
            await newStudent.save().then(()=>{res.send("Registration Success!")}).catch((err)=>{res.send(err)})
        }else{
            
            res.send("User Already Exist With This Email ID");
        }
        
        
   })
   

}
)


export default router;

