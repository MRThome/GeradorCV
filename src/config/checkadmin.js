const mongoose = require("mongoose")
const Users = mongoose.model("Users")


Users.findOne({ name: "admin"})
	.then(user => {
        if (!user) {
			Users.create({
                name: 'admin',
                password: '12345678',
                email: 'matheusrthome@gmail.com',
                role: 'admin',  
            }) .then (x => console.log('Admin criado com sucesso'))
            .catch(e => console.log(e))
		}
		else {
			console.log('Já existe um Admin')
		}	
	})
	.catch(e => console.log(e))