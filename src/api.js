import axios from "axios";
export function getData() {
	const data = fetch("https://murmuring-garden-85887.herokuapp.com/api/getData")
		.then((data) => data.json())
		.then((res) => res.data);
	return data;
}
export const putData = (message, title, idToBeAdded) => {
	axios.post("https://murmuring-garden-85887.herokuapp.com/api/putData", {
		id: idToBeAdded,
		message: message,
		title: title,
	});
};
export const deleteData = (idToBeDeleted) => {
	axios.delete("https://murmuring-garden-85887.herokuapp.com/api/deleteData", {
		data: {
			id: idToBeDeleted,
		},
	});
};
export const updateData = (objIdToUpdate, updateToApply) => {
	axios.post("https://murmuring-garden-85887.herokuapp.com/api/updateData", {
		id: objIdToUpdate,
		update: { message: updateToApply },
	});
};
