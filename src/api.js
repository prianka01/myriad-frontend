import axios from "axios";
export function getData() {
  const data = fetch("http://localhost:3001/api/getData")
    .then((data) => data.json())
    .then((res) => res.data);
  return data;
}
export const putData = (message, title, idToBeAdded) => {
  axios.post("http://localhost:3001/api/putData", {
    id: idToBeAdded,
    message: message,
    title: title,
  });
};
export const deleteData = (idToBeDeleted) => {
  axios.delete("http://localhost:3001/api/deleteData", {
    data: {
      id: idToBeDeleted,
    },
  });
};
export const updateData = (objIdToUpdate, updateToApply) => {
  axios.post("http://localhost:3001/api/updateData", {
    id: objIdToUpdate,
    update: { message: updateToApply },
  });
};
