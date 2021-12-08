const mongoose = require("mongoose")
const Cv = mongoose.model("Cv")


exports.createCv = async (data) => {
	try {
		await Cv.create(data)
		console.log('CV CRIADO COM SUCESSO')
		return true
	} catch(e) {
		console.log(e)
		console.log('CV NAO CRIADO COM SUCESSO')
		return null
	}
}

exports.findCvsOfUser = async (userId) => {
	return await Cv.find({ userId: userId })
}