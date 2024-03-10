import { IoMdAdd } from "react-icons/io";
import "./Header.css";
import { useState } from "react";
import axios from "axios";

function Header() {
	const [title, setTitle] = useState("");
	const handleTitle = (e) => {
		setTitle(e.target.value);
	};
	const [description, setDescription] = useState("");
	const handleDescription = (e) => {
		setDescription(e.target.value);
	};

	const addTodo = (e) => {
		e.preventDefault();
		if (title) {
			axios
				.post("http://localhost:5000/api/todo", {
					title: title,
					description: description,
				})
				.then((respone) => console.log(respone.data))
				.catch((err) => console.error(err));
		}
		setTitle("");
		setDescription("");
	};

	return (
		<header>
			<h1 className="app-title">TO-DO LIST</h1>
			<form className="add-task">
				<div className="task-text-content">
					<input type="text" placeholder="Task Title" onChange={handleTitle} value={title} className="title-bar" maxLength="30" />
					<textarea
						type="textarea"
						placeholder="Task Description"
						onChange={handleDescription}
						value={description}
						className="description-bar"
						maxLength="120"
					/>
				</div>
				<button className="add-task-btn" onClick={addTodo}>
					<IoMdAdd color="#755564" fontSize="2em" className="add-icon" />
				</button>
			</form>
		</header>
	);
}

export default Header;
