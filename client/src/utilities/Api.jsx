import axios from "axios";
import { useState, useEffect } from "react";

const getTasks = async () => {
	const [tasks, setTasks] = useState();

	const res = await axios.get("http://localhost:5000/api/todo");
	setTasks(await res.data.data);
	console.log(tasks);
	return tasks;
};

export default getTasks;
