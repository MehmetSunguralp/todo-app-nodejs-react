import { useState } from "react";
import ReactModal from "react-modal";
import { deleteTodo, updateTodo } from "../../Api/Api";
import { FaEdit, FaTrashAlt, FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import "./TaskCard.css";

//ReactModal setup
ReactModal.setAppElement("#root");

//Modal styles
const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		borderRadius: "20px",
	},
};

function TaskCard({ title, description, id }) {
	//Update todo task
	const updateTodoTask = async () => {
		try {
			await updateTodo(editTitle, editDescription, id);
		} catch (error) {
			console.log(error);
		}
	};

	//State of edit modal visibility
	const [modalVisibility, setModalVisibility] = useState(false);

	//Updates todo task
	const saveTodo = () => {
		updateTodoTask();
		setModalVisibility(false);
		setWarnerModalVisibility(false);
	};

	//Todo title and description handlers
	const [editTitle, setEditTitle] = useState(title);
	const handleEditTitle = (e) => {
		setEditTitle(e.target.value);
	};
	const [editDescription, setEditDescription] = useState(description);
	const handleEditDescription = (e) => {
		setEditDescription(e.target.value);
	};
	//State of warner and delete modal visibility
	const [warnerModalVisibility, setWarnerModalVisibility] = useState(false);
	const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);

	//Delete task by ID
	const deleteTaskForSure = (id) => {
		try {
			deleteTodo(id);
		} catch (error) {
			console.error(error);
		}
	};

	const deleteTask = () => {
		setDeleteModalVisibility(true);
	};

	//Close edit modal
	const closeModal = () => {
		if (title != editTitle || description != editDescription) {
			setWarnerModalVisibility(true);
		}
		setModalVisibility(false);
	};
	//Discard changes made
	const discardChanges = () => {
		setEditTitle(title);
		setEditDescription(description);
		setWarnerModalVisibility(false);
		setModalVisibility(false);
	};
	return (
		<div className="task-card" id={id}>
			<div className="task-content">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div>
				<FaEdit fontSize="1.5em" className="edit-icon" onClick={() => setModalVisibility(true)} />
				<FaTrashAlt fontSize="1.5em" className="trash-icon" onClick={() => deleteTask()} />
			</div>

			<ReactModal isOpen={modalVisibility} onRequestClose={closeModal} style={customStyles} contentLabel="Edit TODO Modal">
				<div className="edit-task-modal">
					<input
						type="text"
						placeholder="Task Title"
						onChange={handleEditTitle}
						value={editTitle}
						className="title-bar-modal"
						maxLength="30"
					/>
					<textarea
						type="textarea"
						placeholder="Task Description (optional)"
						onChange={handleEditDescription}
						value={editDescription}
						className="description-bar-modal"
						maxLength="120"
					/>
				</div>
				<div className="modal-buttons">
					<MdCancel fontSize="2em" className="cancel-icon" onClick={() => closeModal()} />
					<FaSave fontSize="2em" className="save-icon" onClick={() => saveTodo()} />
				</div>
			</ReactModal>
			<ReactModal isOpen={warnerModalVisibility} style={customStyles}>
				<p>Do you want to discard changes?</p>
				<div className="buttons">
					<button className="modal-btn" onClick={() => saveTodo()}>
						Save
					</button>
					<button className="modal-btn" onClick={() => discardChanges()}>
						Discard
					</button>
				</div>
			</ReactModal>
			<ReactModal isOpen={deleteModalVisibility} style={customStyles}>
				<p>Do you really want to delete the task?</p>
				<div className="buttons">
					<button className="modal-btn" onClick={() => deleteTaskForSure(id)}>
						Yes
					</button>
					<button className="modal-btn" onClick={() => setDeleteModalVisibility(false)}>
						No
					</button>
				</div>
			</ReactModal>
		</div>
	);
}

export default TaskCard;
