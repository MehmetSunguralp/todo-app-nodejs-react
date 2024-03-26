import { useState, useEffect } from "react";
import TaskCard from "../TaskCard/TaskCard";
import { fetchTodos } from "../../Api/Api";
import "./TaskList.css";

function TaskList() {
	const [tasks, setTasks] = useState([]);

	const getTasks = async () => {
		try {
			const { data } = await fetchTodos();
			setTasks(data.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getTasks();
	}, [tasks]);

	return (
		<main className="task-list">
			<div>
				{tasks?.map((i) => {
					return <TaskCard title={i.title} description={i.description} key={i._id} id={i._id} />;
				})}
			</div>
		</main>
	);
}

export default TaskList;
