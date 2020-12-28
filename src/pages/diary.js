import React from "react";
import { putData, getData } from "../api";
import DisplayData from "./common/DisplayData";
class Diary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input_text: "",
			input_title: "",
			data: [],
			reRender: 0,
			intervalIsSet: false,
		};
		this.handleChangeText = this.handleChangeText.bind(this);
		this.handleChangeTitle = this.handleChangeTitle.bind(this);
		// this.onClickAddData = this.onClickAddData.bind(this);
	}
	handleChangeText(e) {
		this.setState({ input_text: e.target.value });
	}
	handleChangeTitle(e) {
		this.setState({ input_title: e.target.value });
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
	putDataToDB = async (message, title) => {
		let currentIds = this.state.data.map((data) => data.id);
		let idToBeAdded = 0;
		while (currentIds.includes(idToBeAdded)) {
			++idToBeAdded;
		}
		await putData(message, title, idToBeAdded);
	};
	onClickAddData = async () => {
		await this.putDataToDB(this.state.input_text, this.state.input_title);
		this.getDataFromDb();
		this.setState({ input_text: "", input_title: "" });
	};
	render() {
		const input = this.state.input_text;
		const title = this.state.input_title;
		return (
			<div id="diary">
				<div id="diary_info">
					<p>Hello in diary component</p>
					<h2 id="heading1">Enter text to add a note:</h2>
				</div>
				<div class="input-group mb-3">
					<input
						type="text"
						class="form-control"
						placeholder="Enter title..."
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
						value={title}
						onChange={this.handleChangeTitle}
					/>
				</div>
				<div class="input-group">
					<textarea
						class="form-control"
						placeholder="Enter note..."
						aria-label="With textarea"
						value={input}
						onChange={this.handleChangeText}
					></textarea>
					<div class="input-group-append">
						<button
							class="btn btn-outline-secondary"
							type="button"
							id="button-addon2"
							onClick={() => this.onClickAddData()}
						>
							ADD
						</button>
					</div>
				</div>
				<div id="notes">
					<br />
					<h2 id="heading1">MY NOTES</h2>
					<div>
						<DisplayData data={this.state.data} />
					</div>
				</div>
			</div>
		);
	}
}
export default Diary;
