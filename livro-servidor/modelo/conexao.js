var banco = require("mongoose")
banco.connect("mongodb+srv://Borba527:U2jYCC5L8S3lcJOI@marketcluster.8zw6vhk.mongodb.net/livraria?retryWrites=true&w=majority")

module.exports = banco