import mongoose from 'mongoose'

const teacherSchema = mongoose.Schema({
	tchr_name: {
		type: String,
		required: true
	},
	tchr_email: {
		type: String,
		required: true,
		unique: true
	},
	tchr_password: {
		type: String,
		required: true
	},
	// user_type: {
	// 	type: String,
	// 	required: true
	// },
	tchr_mobile: {
		type: Number,
		required: true
	},
	tchr_address: {
		type: String,
		required: true
	},
}, {
	timestamps: true
})

const Teacher = mongoose.model('Teacher', teacherSchema)
export default Teacher;