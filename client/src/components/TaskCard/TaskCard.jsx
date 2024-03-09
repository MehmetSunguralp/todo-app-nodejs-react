import axios from "axios";
import "./TaskCard.css";
import { FaTrashAlt } from "react-icons/fa";

const deleteTask = (e) => {
	axios
		.delete(`http://localhost:5000/api/todo/${e.target.parentElement.parentElement.getAttribute("id")}`)
		.then((response) => {
			console.log(response);
		})
		.catch((err) => {
			console.error(err);
		});
};

function TaskCard({ title, description, id }) {
	return (
		<li className="task-card" id={id}>
			<div className="task-content">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<FaTrashAlt fontSize="1.5em" className="trash-icon" onClick={deleteTask} />
		</li>
	);
}

export default TaskCard;
