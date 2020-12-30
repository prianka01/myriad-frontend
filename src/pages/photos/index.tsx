import React, { useEffect } from "react";
import { putData, getData, deleteData } from "../../api";
import DropZone from "./Dropzone/dropzone";
const Photos = () => {
	const [state, setState] = React.useState({
		data: { id: 1 },
		reRender: 0,
		intervalIsSet: false,
		input_text: "",
		input_title: "",
	});

	useEffect(() => {
		let a = "";
		let b = 1;
		console.log(a);
		getDataFromDb();
		if (!state.intervalIsSet) {
			// let interval = setInterval(getDataFromDb, 1000);
			setState({ ...state, intervalIsSet: false });
		}
	});

	const getDataFromDb = async () => {
		let result = await getData();
		setState({ ...state, data: result });
	};
	// const putDataToDB = (message: string, title: string) => {
	// 	let currentIds = state.data.id;
	// 	let idToBeAdded = 0;
	// 	while (currentIds.includes(idToBeAdded)) {
	// 		++idToBeAdded;
	// 	}
	// 	putData(message, title, idToBeAdded);
	// 	setState({ ...state, reRender: 1 });
	// };
	const onClickAddData = () => {
		// putDataToDB(state.input_text, state.input_title);
		setState({ ...state, input_text: "", input_title: "" });
		getDataFromDb();
	};

	const data = state.data;
	return (
		<div>
			<p className="title">React Drag and Drop Image Upload</p>
			<div className="content">
				<DropZone />
			</div>
		</div>
	);
};
export default Photos;
