import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [items, setItems] = useState([]);


	return (
		<div className="container">
			
			<div className="listHolder rounded">
			<h1 className="title">To-do List</h1>
				<ul>
					<li>
						<input type="text"
							onChange={(e) => { setTask(e.target.value) }}
							value={task}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									setItems(items.concat([task]));
									setTask("");
								}
							}}
							placeholder="Write your task here"
						/>
					</li>
					{items.map((tasks, index) => (
						<li key={index}>
							{tasks} 
							<i className="delete fa-solid fa-xmark" 
							onClick={() => setItems(items.filter((t, currentIndex) => index != currentIndex))}></i>
							</li>))}
				</ul>
				<div className="taskNumber">{items.length} tasks</div>
			</div>

		</div>
	);
};

export default Home;
