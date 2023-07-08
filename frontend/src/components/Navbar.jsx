import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/teacherActions';
import {studentLogout} from '../actions/studentActions'
import { NavLink } from "react-router-dom";

function Navbar() {

  const dispatch = useDispatch()

  const teacherLogin = useSelector(state => state.teacherLogin)
  const {loading, error, teacherInfo} = teacherLogin
  const studentLogin = useSelector(state => state.studentLogin)
  const{studentInfo} = studentLogin
  const logoutHandler = () => {
    dispatch(logout())
  }
  const studLogoutHandler = () =>{
    dispatch(studentLogout())
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div className="container">
          <NavLink className="navbar-brand fs-3 fw-bold" to="/" exact>
            <i className='bi-building text-danger '></i>
            <span className="text-dark">E</span>
                <span className="text-dark">d</span>
                <span className="text-dark">u</span>
                <span className="text-danger">T</span>
                <span className="text-danger">r</span>
                <span className="text-danger">a</span>
                <span className="text-danger">c</span>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" exact>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" exact>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/courses" exact>Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tests" exact>Tests</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" exact>Contact</NavLink>
              </li>
            </ul>
            <div className="navbar align-self-center d-flex">
              {studentInfo && <>
                  <NavLink className="nav-link text-success" to="/student_dashboard" exact title="Dashboard">
                    Hi, <strong>{studentInfo.stud_name}</strong>
                  </NavLink>
                  <NavLink className="nav-link" to="/notices" exact title="Notices">
                    <i className="bi-bell text-primary" role="img"></i>
                  </NavLink>
                  <NavLink className="nav-link" onClick={studLogoutHandler} to="" title="Logout">
                    <i className="bi-box-arrow-right text-danger" role="img"></i>
                  </NavLink>
                </>}

              {teacherInfo && 
                <>
                  {console.log(teacherInfo)}
                  <NavLink className="nav-link text-success" to="/teacher_dashboard" exact title="Dashboard">
                    Hi, <strong>{teacherInfo.tchr_name}</strong>
                  </NavLink>
                  <NavLink className="nav-link" to="/notices" exact title="Notices">
                    <i className="bi-bell text-primary" role="img"></i>
                  </NavLink>
                  <NavLink className="nav-link" onClick={logoutHandler} to="" title="Logout">
                    <i className="bi-box-arrow-right text-danger" role="img"></i>
                  </NavLink>
                </>
              }
              {(!studentInfo &&  !teacherInfo) &&
                  <>
                  {console.log(studentInfo)}
                    <NavLink className="nav-link" to="/notices" exact title="Notices">
                      <i className="bi-bell text-primary" role="img"></i>
                    </NavLink>
                    <NavLink className="nav-link" to="/student_login" exact title="Student">
                      <button className="btn  " role="img" style={{backgroundColor : "#5A4BDA", color : "white" ,  fontWeight : "500" }}>Login / Register</button>
                    </NavLink>
                    {/* <NavLink className="nav-link" to="/teacher_login" exact title="Teacher">
                      <button className="btn btn-primary" role="img">Teacher Login/Register</button>
                    </NavLink> */}
                  </>
                }        
        
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
