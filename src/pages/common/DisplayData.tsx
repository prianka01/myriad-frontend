import React from "react";
import { deleteTextData, updateData } from "../../api";
const DisplayData = (props: any) => {
	const [state, setState] = React.useState({
		updated_text: "",
		updateIsClicked: false,
		id: 0,
	});
	const onClickDeleteData = async (idTodelete: any) => {
		parseInt(idTodelete);
		let objIdToDelete = null;
		props.data.forEach((dat: any) => {
			if (dat.id === idTodelete) {
				objIdToDelete = dat._id;
			}
		});
		await deleteTextData(objIdToDelete);
		props.reRender();
	};
	const onClickUpdateData = (id: any, message: string) => {
		setState({
			...state,
			updateIsClicked: true,
			id: id,
			updated_text: message,
		});
	};
	const handleChangeUpdatedText = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setState({ ...state, updated_text: e.target.value });
	};
	const onClickSaveData = async (idToUpdate: any, updateToApply: String) => {
		let objIdToUpdate = null;
		parseInt(idToUpdate);
		data.forEach((dat: any) => {
			if (dat.id === idToUpdate) {
				objIdToUpdate = dat._id;
			}
		});
		await updateData(objIdToUpdate, updateToApply);
		setState({ ...state, updateIsClicked: false });
		props.reRender();
	};
	const data = props.data;
	const updatedText = state.updated_text;
	return (
		<>
			<div id="card-columns" className="card-columns">
				{data.length <= 0
					? "No notes"
					: data.map((dat: any) => (
							<div id="card" className="card text-center" key={dat._id}>
								<div className="card-body">
									<h5 className="card-title">{dat.title}</h5>
									<h6 className="card-subtitle mb-2 text-muted">
										{new Intl.DateTimeFormat("en-US", {
											year: "numeric",
											month: "long",
											day: "2-digit",
											hour: "numeric",
											minute: "numeric",
											hour12: true,
										}).format(Date.parse(dat.createdAt))}
									</h6>
									<p id="text" className="card-text">
										{dat.message}
									</p>
									<button
										id="button1"
										className="card-link"
										onClick={() => onClickUpdateData(dat.id, dat.message)}
									>
										EDIT NOTE
									</button>
									<button
										id="button1"
										className="card-link"
										onClick={() => onClickDeleteData(dat.id)}
									>
										DELETE NOTE
									</button>
								</div>
								<div id="update_block">
									{state.updateIsClicked === true && dat.id === state.id && (
										<div>
											<textarea
												id="textarea_notes"
												value={updatedText}
												className="form-control"
												onChange={handleChangeUpdatedText}
											/>
											<button
												id="button1"
												onClick={() => onClickSaveData(dat.id, updatedText)}
											>
												SAVE
											</button>
										</div>
									)}
								</div>
							</div>
					  ))}
			</div>
		</>
	);
};
export default DisplayData;
