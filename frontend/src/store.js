import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import { teacherLoginReducer, teacherRegisterReducer } from './reducers/teacherReducers'
import { studentLoginReducer , studentRegisterReducer } from './reducers/studentReducers';
import { courseListReducer, courseCreateReducer, 
	specificCourseListReducer, courseUpdateReducer,
  courseDeleteReducer } from './reducers/courseReducers';

const reducer = combineReducers({
    teacherLogin: teacherLoginReducer,
    teacherRegister: teacherRegisterReducer,
    studentLogin: studentLoginReducer,
    studentRegister: studentRegisterReducer,
    courseList: courseListReducer,
    courseCreate: courseCreateReducer,
    specificCourseList: specificCourseListReducer,
    courseUpdate: courseUpdateReducer,
    courseDelete: courseDeleteReducer
});

const teacherInfoFromStorage = localStorage.getItem('teacherInfo')
  ? JSON.parse(localStorage.getItem('teacherInfo'))
  : null

const studentInfoFromStorage = localStorage.getItem('studentInfo')
? JSON.parse(localStorage.getItem('studentInfo'))
: null

const initialState = {
	teacherLogin: { teacherInfo: teacherInfoFromStorage },
  studentLogin : {studentInfo : studentInfoFromStorage}
}

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
 
export default store; 