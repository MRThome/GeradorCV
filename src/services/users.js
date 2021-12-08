const mongoose = require("mongoose")
const Users = mongoose.model("Users")


exports.createUser = async (data) => {
	
	const { name, password, email, role } = data
	
	console.log('createUser Service:', name, password, email, role)

    if (!name || !password || !email || !role) 
        return null
		
	try {
		await Users.create({ name, password, email, role })
		console.log('USER CRIADO COM SUCESSO')
		return true
	} catch(e) {
		console.log(e)
		console.log('USER NAO CRIADO COM SUCESSO')
		return null
	}
}

exports.findUser = async (userId) => {
	
	try {
		const user = await Users.findById(userId)
		return user
	} catch(e) {
		console.log(e)
		return null
	}
}