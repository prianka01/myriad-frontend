import React from "react";
import { putData, getData, deleteData } from "../../api";
import DropZone from "./Dropzone/dropzone";
import DisplayData from "../common/DisplayData";
class Photos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			reRender: 0,
			intervalIsSet: false,
		};
		this.onClickAddData = this.onClickAddData.bind(this);
	}
	componentDidMount() {
		this.getDataFromDb();
		if (!this.state.intervalIsSet) {
			let interval = setInterval(this.getDataFromDb, 1000);
			this.setState({ intervalIsSet: interval });
		}
	}
	getDataFromDb = async () => {
		let result = await getData();
		this.setState({ ...this.state, data: result });
	};
	putDataToDB = (message, title) => {
		let currentIds = this.state.data.map((data) => data.id);
		let idToBeAdded = 0;
		while (currentIds.includes(idToBeAdded)) {
			++idToBeAdded;
		}
		putData(message, title, idToBeAdded);
		this.setState({ reRender: 1 });
	};
	onClickAddData = () => {
		this.putDataToDB(this.state.input_text, this.state.input_title);
		this.setState({ input_text: "", input_title: "" });
		this.getDataFromDb();
	};
	render() {
		const data = this.state.data;
		return (
			<div>
				<p className="title">React Drag and Drop Image Upload</p>
				<div className="content">
					<DropZone />
				</div>
			</div>
		);
	}
}
export default Photos;
