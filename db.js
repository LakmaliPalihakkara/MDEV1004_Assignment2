const mongoose = require('mongoose');
const MONGOURI    = "mongodb+srv://user1:user123@cluster0.kgdbrmi.mongodb.net/coursesDB?retryWrites=true&w=majority";

const InitiateMongoServer = async() =>{

try{
	await mongoose.connect(MONGOURI,{

		useNewUrlParser: true,
    	useUnifiedTopology: true
	});

console.log("Connected to DB!");
}
catch(e){
	console.log(e);
	throw e;
}

};

module.exports = InitiateMongoServer;

