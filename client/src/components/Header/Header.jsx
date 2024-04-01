import "./Header.css";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import { createTodo } from "../../Api/Api";

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
			createTodo(title, description);
			setTitle("");
			setDescription("");
		}
	};

	return (
		<header>
			<h1 className="app-title">TO-DO LIST</h1>
			<form className="add-task">
				<div className="task-text-content">
					<input type="text" placeholder="Task Title" onChange={handleTitle} value={title} className="title-bar" maxLength="30" />
					<textarea
						type="textarea"
						placeholder="Task Description (optional)"
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
