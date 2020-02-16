var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');

var db = low(adapter);
db.defaults({ users: [],
			  products: [], 
			  session: [], 
			  transfer:[] })
  .write();
module.exports = db;