const { jsPDF } = require("jspdf");
const dateFormat = require('date-format');

const {createCv} = require('../services/cv')

module.exports = async function createpdf (data, user) {

    const doc = new jsPDF();
	doc.setFont("times", "bold")
	doc.setFontSize(20)
	doc.text(`${data.nome}`, 30, 15)
	doc.setFontSize(12)
	doc.text('______________________________________________________________________', 30, 20)
	doc.setFont("times", "normal")
	doc.text(`Endereco: ${data.endereco}`, 30, 30)
	doc.text(`Telefone: ${data.telefone}`, 30, 35)
	doc.text(`Email: ${data.email}`, 30, 40)
	doc.text(`Data de nascimento: ${data.nascimento}`, 30, 45)
	doc.text(`Nacionalidade: ${data.nacionalidade}`, 30, 50)
	doc.text(`Estado Civil: ${data.estadocivil}`, 30, 55)
	doc.setFont("times", "bold")
	doc.text(`Objetivo:`, 30, 70)
	doc.setFont("times", "normal")
	doc.text(`${data.objetivo}`, 30,75)
	doc.setFont("times", "bold")
	doc.text(`Escolaridade:`, 30, 90)
	doc.setFont("times", "normal")
	doc.text(`${data.escolaridade}`, 30, 95)
	doc.setFont("times", "bold")
	doc.text(`Formação`, 30, 110)
	doc.setFont("times", "normal")
	doc.text(`Instituição de Ensino: ${data.faculdade}`, 30, 115)
	doc.text(`Curso: ${data.curso}`, 30, 120)
	doc.text(`Semestre: ${data.semestre}`, 30, 125)

	const fileName = `${user._id}_${dateFormat('yyyyMMddhhmmssSSS', new Date())}`
	doc.save(`./public/pdfs/${fileName}.pdf`);

	await createCv({
		userId: user._id,
		name: data.nome,
		endereco: data.endereco,
		telefone: data.telefone,
		email: data.email,
		nascimento: data.nascimento,
		nacionalidade: data.nacionalidade,
		estadocivil: data.estadocivil,
		fileName: fileName
	})
}

