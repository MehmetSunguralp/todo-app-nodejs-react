import { useState } from "react";
import ReactModal from "react-modal";
import { deleteTodo, updateTodo } from "../../Api/Api";
import { FaEdit, FaTrashAlt, FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import "./TaskCard.css";

const deleteTask = (id) => {
	try {
		deleteTodo(id);
	} catch (error) {
		console.error(error);
	}
};

ReactModal.setAppElement("#root");

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
	const updateTodoTask = async () => {
		try {
			await updateTodo(editTitle, editDescription, id);
		} catch (error) {
			console.log(error);
		}
	};

	//----------------------------------------------
	const [modalVisibility, setModalVisibility] = useState(false);
	const openModal = () => {
		setModalVisibility(true);
	};

	const saveTodo = () => {
		updateTodoTask();
		setModalVisibility(false);
		setWarnerModalVisibility(false);
	};
	const onModalVisibility = () => {};
	//
	const [editTitle, setEditTitle] = useState(title);
	const handleEditTitle = (e) => {
		setEditTitle(e.target.value);
	};
	const [editDescription, setEditDescription] = useState(description);
	const handleEditDescription = (e) => {
		setEditDescription(e.target.value);
	};
	//Warner modal
	const [warnerModalVisibility, setWarnerModalVisibility] = useState(false);

	const closeModal = () => {
		setWarnerModalVisibility(true);
		setModalVisibility(false);
	};

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
				<FaEdit fontSize="1.5em" className="edit-icon" onClick={() => openModal()} />
				<FaTrashAlt fontSize="1.5em" className="trash-icon" onClick={() => deleteTask(id)} />
			</div>

			<ReactModal
				isOpen={modalVisibility}
				onAfterOpen={onModalVisibility}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Edit TODO Modal"
			>
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
			<ReactModal isOpen={warnerModalVisibility}>
				<p>Are you sure you want to discard changes?</p>
				<button onClick={() => discardChanges()}>Discard</button>
				<button onClick={() => saveTodo()}>Save</button>
			</ReactModal>
		</div>
	);
}

export default TaskCard;
