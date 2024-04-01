const mongoose = require("mongoose");

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};
mongoose
	.connect(process.env.MONGO_DB_CONNECTION, options)
	.then(() => {
		console.log("Database Successfully Connected!");
	})
	.catch((error) => {
		console.log("Database Cannot Connect: ", error.message);
	});
