const toDoModel = require("../model/toDoModel");

const addToDo = async (req, res) => {
	try {
		const add = new toDoModel(req.body);
		//console.log(add);
		await add
			.save()
			.then(() => {
				return res.status(201).json(add);
			})
			.catch((err) => {
				return res.status(400).json({
					success: false,
					message: "An error occured:" + err,
				});
			});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "A Server error occured:" + error,
		});
	}
};

const getAllToDos = async (req, res) => {
	try {
		const all = await toDoModel.find({});
		res.status(200).json({
			success: true,
			data: all,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

const updateToDo = async (req, res) => {
	const { id } = req.params;
	try {
		const update = await toDoModel.findByIdAndUpdate(id, req.body);
		if (update) {
			res.status(200).json({
				success: true,
				message: "Update is succesful!",
				data: req.body,
			});
		} else {
			return res.status(400).json({
				success: false,
				message: "Update failed!",
			});
		}
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

const deleteToDo = async (req, res) => {
	try {
		const { id } = req.params;
		const toDoDelete = await toDoModel.findByIdAndDelete(id);
		if (toDoDelete) {
			return res.status(200).json({
				success: true,
				message: "TODO has been deleted!",
			});
		} else {
			res.status(400).json({
				success: false,
				message: "Something has gone wrong!",
			});
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

module.exports = {
	addToDo,
	getAllToDos,
	updateToDo,
	deleteToDo,
};
