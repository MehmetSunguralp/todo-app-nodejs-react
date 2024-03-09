const mongoose = require("mongoose");
const toDoSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: false,
			trim: true,
		},
		completed: {
			type: Boolean,
			default: false,
		},
	},
	{
		collection: "TODO",
		timestamps: true,
	}
);

const toDoModel = mongoose.model("TODO", toDoSchema);

module.exports = toDoModel;
