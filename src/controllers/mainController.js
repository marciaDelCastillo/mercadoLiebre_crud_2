const fs = require('fs');
const path = require('path');

const products=require("../data/productsDataBase_db")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		let visited = products.filter(product => product.category === "visited")
		let inSale = products.filter(product => product.category === "in-sale")
		
		return res.render("index", {
			visited,
			inSale,
			toThousand,
		})
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
