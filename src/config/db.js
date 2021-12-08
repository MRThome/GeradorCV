const mongoose = require('mongoose')

require("../models/users")
require("../models/cv")

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })
	.then(() => {
		console.log("Conectado com sucesso!")
        require("./checkadmin")
	})
	.catch(err => {
		console.log('Ocorreu algum erro!')
		console.log(err)
	})