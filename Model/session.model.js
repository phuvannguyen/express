var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sessionSchema = new Schema({
	"sessionId": String,
	"cart": [{productId: String, count: Number}]
	
});


var session = mongoose.model('Session', sessionSchema, 'session');
module.exports = session