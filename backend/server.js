import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from "cors"
import bodyParser from "body-parser"

// Routers
import teacherRoutes from './routes/teacherRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import registerStudent from './routes/registerStudent.js'
import loginStudent from './routes/loginStudent.js'
import registerTeacher from './routes/registerTeacher.js'
import loginTeacher from './routes/loginTeacher.js'
dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json()); //middleware
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res) => {
	res.send("Server Running!!");
});

// app.use('/api/teacher', teacherRoutes)
app.use('/api/course', courseRoutes)
app.use('/api/student/register' , registerStudent)
app.use('/api/student/login' , loginStudent)
app.use('/api/teacher/register', registerTeacher)
app.use('/api/teacher/login', loginTeacher)


const port = 8000 || process.env.PORT;
app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});