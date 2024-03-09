import "./TaskList.css";
import TaskCard from "../TaskCard/TaskCard";
import axios from "axios";
import { useState, useEffect } from "react";

function TaskList() {
	const [tasks, setTasks] = useState([]);

	const getTasks = async () => {
		const res = await axios.get("http://localhost:5000/api/todo").then((data) => {
			setTasks(data.data.data);
		});
	};
	useEffect(() => {
		getTasks();
	}, []);

	return (
		<main className="task-list">
			<ul>
				{tasks.map((i) => {
					return <TaskCard title={i.title} description={i.description} key={i._id} id={i._id} />;
				})}
			</ul>
		</main>
	);
}

export default TaskList;
