import React , {useState , useEffect} from 'react';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';
import axios from 'axios';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { register } from '../actions/studentActions';
import { useDispatch, useSelector } from 'react-redux';

 function StudentRegister({history}) {
  const [studentData , setStudentData] = useState({name : "" , email : "" , phone : "" , address : "" , password1 : "" , password2 : ""})
  const [registState , setRegisterState] = useState(false);

  const dispatch = useDispatch();

  const studentLogin  = useSelector(state => state.studentLogin)
  const{loading, err, studentInfo} = studentLogin
  useEffect(() => {
    if(studentInfo) {
      history.push('/student_dashboard')
    }
  }, [history, studentInfo])


  function formChange(event){

      const {name , value} = event.target
      setStudentData(()=>{
        return {...studentData , [name] : value}
      })
  }

  async function formSubmit(event){
      event.preventDefault();
      const {name , email , phone , address , password1 , password2} = studentData;
      // console.log(password1 , password2)
      if(password1 === password2){
        const student = {name , email , phone , address , password1 , password2}
        dispatch(register(name,email,password1,phone,address))
        
      }else{
        document.getElementById('password2').setCustomValidity('Password Does not Match')
      }
  }

  // if(registState){
  //   return <Redirect to = "/student_login"></Redirect>
  // }

  return (
    <div>
      <section>
        <div id="page_banner2" className="banner-wrapper bg-light w-100 py-5">
          <div className="container text-light d-flex justify-content-center align-items-center py-5 p-0">
            <div className="banner-content col-lg-8 col-12 m-lg-auto text-center">
              <h1 className="banner-heading display-3 pb-5 semi-bold-600 typo-space-line-center">Student Registration</h1>
              <div className="col-10 col-md-10 mx-auto my-5 text-dark">
                <form className="contact_form row" onSubmit={formSubmit}>
                  <div className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="text" onChange = {formChange} className="form-control form-control-lg light-300" id="name" name="name" placeholder="Your Name*" value = {studentData.name}  required/>
                      <label >Your Name*</label>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="email" onChange = {formChange} className="form-control form-control-lg light-300" id="email" name="email" placeholder="Your Email*" value = {studentData.email} required/>
                      <label >Your Email*</label>
                    </div>
                  </div>
                  <div className="col-12 mb-4">
                    <div className="form-floating">
                      <input type="text" onChange = {formChange} className="form-control form-control-lg light-300" id="phone" name="phone" placeholder="Your Phone*" value = {studentData.phone} required/>
                      <label>Your Phone*</label>
                    </div>
                  </div>
                  {/* <div className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="file" className="form-control form-control-lg light-300" id="avatar" name="avatar" placeholder="Your avatar"/>
                      <label for="address light-300">Avatar</label>
                    </div>
                  </div> */}
                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <input type="text" onChange = {formChange} className="form-control form-control-lg light-300" id="address" name="address" placeholder="address*" value = {studentData.address} required/>
                      <label >Your Address*</label>
                    </div>
                  </div>
                  {/* <div className="col-12">
                    <div className="form-floating mb-4">
                      <select className="form-select form-control form-control-lg light-300" id="coursename" name="coursename" aria-label="Default select">
                        <option selected>Select Course*</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <label for="subject light-300">Select Course*</label>
                    </div>
                  </div> */}
                  <div className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="password" onChange = {formChange} className="form-control form-control-lg light-300" id="password1" name="password1" placeholder="Your Password*" value={studentData.password1} required/>
                      <label >Password*</label>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input type="password" onChange = {formChange} className="form-control form-control-lg light-300" id="password2" name="password2" placeholder="Confirm Password*" value= {studentData.password2} required/>
                      <label >Confirm Password*</label>
                    </div>
                  </div>
                  <div className="col-md-12 col-12 mx-auto my-3">
                    <button type="submit" className="btn btn-info btn-lg rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300">Register</button>
                  </div>
                </form>
              </div>
              <div className="col-10 col-md-8 mx-auto my-5 d-flex justify-content-around">
                <NavLink to="/student_login" exact>
                  <button type="button" className="btn rounded-pill btn-light px-4">Student Login</button>
                </NavLink>
                <NavLink to="/teacher_login" exact>
                  <button type="button" className="btn rounded-pill btn-outline-info px-4">Teacher Login</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  )
}

export default StudentRegister
