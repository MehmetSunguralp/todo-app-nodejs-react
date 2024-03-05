const express = require("express");
const app = express();
require("dotenv").config();
require("./src/config/dataBaseConnection");
const port = process.env.PORT || 5001;
const toDoRouter = require("../TODO/src/router/toDoRouter");

app.use(express.json());
app.use("/api", toDoRouter);

app.get("/", (req, res) => {
	res.send("Welcome Aboard!");
});

//Initiate Server
app.listen(port, () => {
	console.log(`Server is running on port ${port}...`);
});
