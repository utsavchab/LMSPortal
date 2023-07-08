import React, { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import Footer from "../components/Footer";
function UnderConstruction({history}){

    const dispatch = useDispatch()

    const teacherLogin = useSelector(state => state.teacherLogin)
    const {loading, error, teacherInfo} = teacherLogin
    const studentLogin = useSelector(state => state.studentLogin)
    const{studentInfo} = studentLogin
    useEffect(()=>{
        // if(!teacherInfo && !studentInfo){
        //     history.push('/')
        // }

    } , [history , teacherInfo , studentInfo])
return(
    <div className="d-flex justify-content-center flex-column align-items-center m-auto text-danger">
        {studentInfo  && <h1> Hi, {studentInfo.stud_name}</h1>}
        <h1>Either you entered wrong URL</h1>
        <h1>OR </h1>
        <h1>This Page is Under Construction ans will be Live soon.</h1>
        
    </div>
)
}


export default  UnderConstruction;