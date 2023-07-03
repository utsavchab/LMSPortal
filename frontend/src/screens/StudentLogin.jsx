import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';
import axios from 'axios';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function StudentLogin() {
  const [isStudentLogin , setIsLogin] = useState(false);
  const [loginData , setLoginData] = useState({email : "" , password : ""})

   function formSubmit(event){
    console.log("submit")
    event.preventDefault();
    // const {email,password} = loginData
    axios.post('http://localhost:8000/student_login' , loginData)
        .then(res => {
          // console.log(res)
          if(res.status === 200){
            setLoginData({email : "" , password : ""})
            alert("Login Success")
            setIsLogin(true)

          }else{
            alert("Unexpected Error")
          }
        })
        .catch(err => {
          if(err.response.status === 401){
            alert("Invalid Credentials")
            setLoginData({password:""})
          }else{
            alert("Server Error! Please Drop error by Email.")
          }
        })
  }

  function formChange(event){
    const {name , value} = event.target;
    setLoginData((prevData) => {
      return {
        ...prevData,
        [name] : value
      }
    })
  }
  
  if(isStudentLogin){
    return <Redirect to = "/student_dashboard"></Redirect>

  }else{
  return (
    <div>
      <section>
        <div id="page_banner2" className="banner-wrapper bg-light w-100 py-5">
          <div className="container text-light d-flex justify-content-center align-items-center py-5 p-0">
            <div className="banner-content col-lg-8 col-12 m-lg-auto text-center">
              <h1 className="banner-heading display-3 pb-5 semi-bold-600 typo-space-line-center">Student Login</h1>
              <div className="col-md-8 mx-auto my-5 text-dark">
                <form className="contact_form row" onSubmit={formSubmit} method='post'>
                  <div className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input onChange = {formChange} type="email" className="form-control form-control-lg light-300" id="email" name="email" placeholder="Email*" value = {loginData.email} autoFocus required/>
                      <label >Email*</label>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="form-floating">
                      <input onChange = {formChange} type="password" className="form-control form-control-lg light-300" id="password" name="password" placeholder="Password*" value = {loginData.password} required/>
                      <label >Password*</label>
                    </div>
                  </div>
                  <div className="col-md-12 col-12 mx-auto my-3">
                    <button type="submit" className="btn btn-info btn-lg rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300">Login</button>
                  </div>
                </form>
              </div>
              <div className="col-10 col-md-8 mx-auto my-5 d-flex justify-content-around">
                <NavLink to="/teacher_login" exact>
                  <button type="button" className="btn rounded-pill btn-light px-4">Teacher Login</button>
                </NavLink>
                <NavLink to="/student_register" exact>
                  <button type="submit" className="btn rounded-pill btn-outline-info px-4">Register Now</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
  }
}

export default StudentLogin
