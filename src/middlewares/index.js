const express = require('express')
const path = require('path')

module.exports = (app) => {
	app.use(express.static("public"));
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.set('view engine', 'ejs')
	app.set('views', path.join(__dirname, 'views'))
}