import React, { useEffect } from "react";
import { putData, getData } from "../api";
import DisplayData from "./common/DisplayData";
const Diary = () => {
	const [state, setState] = React.useState({
		input_text: "",
		input_title: "",
		data: [],
		reRender: 1,
		intervalIsSet: false,
	});
	const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setState({ ...state, input_text: e.target.value });
	};
	const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, input_title: e.target.value });
	};
	const getDataFromDb = async () => {
		let result = await getData();
		setState({ ...state, data: result });
	};
	useEffect(() => {
		if (state.reRender === 1) {
			getDataFromDb();
			state.reRender = 0;
		}
	});

	const putDataToDB = (message: String, title: String) => {
		let currentIds = state.data.map((data: { id: Number }) => data.id);
		let idToBeAdded = 0;
		while (currentIds.includes(idToBeAdded)) {
			++idToBeAdded;
		}
		return putData(message, title, idToBeAdded);
	};
	const onClickAddData = async () => {
		await putDataToDB(state.input_text, state.input_title);
		reRender();
	};
	const reRender = () => {
		setState({ ...state, input_text: "", input_title: "", reRender: 1 });
	};
	return (
		<div id="diary">
			<div id="diary_info">
				<p>Hello in diary component</p>
				<h2 id="heading1">Enter text to add a note:</h2>
			</div>
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Enter title..."
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
					value={state.input_title}
					onChange={handleChangeTitle}
				/>
			</div>
			<div className="input-group">
				<textarea
					className="form-control"
					placeholder="Enter note..."
					aria-label="With textarea"
					value={state.input_text}
					onChange={handleChangeText}
				></textarea>
				<div className="input-group-append">
					<button
						className="btn btn-outline-secondary"
						type="button"
						id="button"
						onClick={() => onClickAddData()}
					>
						ADD
					</button>
				</div>
			</div>
			<div id="notes">
				<br />
				<h2 id="heading1">MY NOTES</h2>
				<div>
					<DisplayData data={state.data} reRender={reRender} />
				</div>
			</div>
		</div>
	);
};
export default Diary;
