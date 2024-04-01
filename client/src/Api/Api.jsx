import axios from "axios";

export const createTodo = (title, description) => {
	axios.post("http://localhost:5000/api/todo", { title: title, description: description });
};

export const fetchTodos = () => axios.get("http://localhost:5000/api/todo");

export const deleteTodo = (id) => axios.delete(`http://localhost:5000/api/todo/${id}`);

export const updateTodo = (title, description, id) => axios.put(`http://localhost:5000/api/todo/${id}`, { title, description });
