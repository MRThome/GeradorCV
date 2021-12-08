const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const Users = mongoose.model("Users")
const createpdf = require("../config/renderpdf")
const { createUser, findUser} = require("../services/users")
const { findCvsOfUser} = require("../services/cv")


router.get('/cadastro', (req, res) => {
    res.render("cadastro")
})

router.post('/cadastro', async(req, res) => {

	const newUser = await createUser(req.body)

	if (!newUser)
		res.status(500).send("Erro!")
	else
		res.send('Registrado com sucesso!')
})

router.get('/', (req, res) => {
    res.render("index")
})

router.get('/menu', (req, res) => {
	res.render("menu")
})

router.post('/login', (req, res) => {
    const email = req.body.email
	const password = req.body.password

	console.log(email, password)

	Users.findOne({ email: email, password: password})
		.then(user => {
			if (user) 
				res.send({
					msg: "Você está logado",
					userId: user._id
				})
			else
				res.status(403).send("Voçê não possui uma conta")
		})
		.catch(e => {
			console.log(e)
			res.status(500).send("Ocorreu algum erro")
		})
})

router.post('/registerCV', async (req, res) => {

	const { nome, endereco, telefone, email, nascimento, nacionalidade, estadocivil, objetivo, escolaridade, faculdade, curso, semestre, userId } = req.body
	console.log(req.body)
	const user = await findUser(userId)
	if (!user)
		return res.status(403).send("Você deve estar logado")

	const data = {
		nome: nome,
		endereco: endereco,
		telefone: telefone,
		email: email,
		nascimento: nascimento,
		nacionalidade: nacionalidade,
		estadocivil: estadocivil,
		objetivo: objetivo,
		escolaridade: escolaridade,
		faculdade: faculdade,
		curso: curso,
		semestre: semestre,
	}
	await createpdf(data, user)

	res.send('Curriculo Gerado')
})

router.get('/cvs/:userId', async (req, res) => {

	const { userId } = req.params
	const cvs = await findCvsOfUser(userId)

	res.render("cvs", { cvs: cvs })
})

module.exports = router