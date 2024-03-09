import "./App.css";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { useEffect, useState } from "react";

function App() {


	return (
		<>
			<Header />
			<TaskList />
		</>
	);
}

export default App;
