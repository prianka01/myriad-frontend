import React from "react";
import { deleteData, updateData } from "../../api";
class DisplayData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			updated_text: "",
			updateIsClicked: false,
			id: 0,
		};
		this.handleChangeUpdatedText = this.handleChangeUpdatedText.bind(this);
		this.onClickUpdateData = this.onClickUpdateData.bind(this);
	}
	onClickDeleteData = (idTodelete) => {
		parseInt(idTodelete);
		let objIdToDelete = null;
		this.props.data.forEach((dat) => {
			if (dat.id === idTodelete) {
				objIdToDelete = dat._id;
			}
		});
		deleteData(objIdToDelete);
	};
	onClickUpdateData = (id, message) => {
		this.setState({ updateIsClicked: true, id: id, updated_text: message });
		// this.forceUpdate();
	};
	handleChangeUpdatedText(e) {
		this.setState({ updated_text: e.target.value });
	}
	onClickSaveData = (idToUpdate, updateToApply) => {
		let objIdToUpdate = null;
		parseInt(idToUpdate);
		this.props.data.forEach((dat) => {
			if (dat.id === idToUpdate) {
				objIdToUpdate = dat._id;
			}
		});
		updateData(objIdToUpdate, updateToApply);
		this.setState({ updateIsClicked: false });
	};
	render() {
		const data = this.props.data;
		const updatedText = this.state.updated_text;
		return (
			<div id="card-columns" class="card-columns">
				{data.length <= 0
					? "No notes"
					: data.map((dat) => (
							<div id="card" class="card text-center" key={dat._id}>
								<div class="card-body">
									<h5 class="card-title">{dat.title}</h5>
									<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
									<p id="text" class="card-text">
										{dat.message}
									</p>
									<button
										id="button1"
										class="card-link"
										onClick={() => this.onClickUpdateData(dat.id, dat.message)}
									>
										EDIT NOTE
									</button>
									<button
										id="button1"
										class="card-link"
										onClick={() => this.onClickDeleteData(dat.id)}
									>
										DELETE NOTE
									</button>
								</div>
								<div id="update_block">
									{this.state.updateIsClicked === true &&
										dat.id === this.state.id && (
											<div>
												<textarea
													id="textarea_notes"
													value={updatedText}
													type="text"
													class="form-control"
													onChange={this.handleChangeUpdatedText}
												/>
												<button
													id="button1"
													onClick={() =>
														this.onClickSaveData(dat.id, updatedText)
													}
												>
													SAVE
												</button>
											</div>
										)}
								</div>
							</div>
							//  <br />
							// </div>
					  ))}
			</div>
		);
	}
}
export default DisplayData;
