import axios from "axios";
export const getTextData = () => {
  return fetch("https://murmuring-garden-85887.herokuapp.com/api/getData")
    .then((data) => data.json())
    .then((res) => res.data);
};
export const putTextData = (message, title, idToBeAdded) => {
  return axios.post(
    "https://murmuring-garden-85887.herokuapp.com/api/putData",
    {
      id: idToBeAdded,
      message: message,
      title: title,
    }
  );
};
export const deleteTextData = (idToBeDeleted) => {
  return axios.delete(
    "https://murmuring-garden-85887.herokuapp.com/api/deleteData",
    {
      data: {
        id: idToBeDeleted,
      },
    }
  );
};
export const updateData = (objIdToUpdate, updateToApply) => {
  return axios.post(
    "https://murmuring-garden-85887.herokuapp.com/api/updateData",
    {
      id: objIdToUpdate,
      update: { message: updateToApply },
    }
  );
};
export const putImageData = (fileToBeAdded, idToBeAdded) => {
  return axios.post(
    "https://myriad-backend-images.herokuapp.com/api/putImageData",
    {
      id: idToBeAdded,
      file: fileToBeAdded,
    }
  );
};
export const deleteImageData = (idToBeDeleted) => {
  return axios.delete(
    "https://myriad-backend-images.herokuapp.com/api/deleteImageData",
    {
      data: {
        _id: idToBeDeleted,
      },
    }
  );
};
export const getImageData = () => {
  return fetch("https://myriad-backend-images.herokuapp.com/api/getImageData")
    .then((data) => data.json())
    .then((res) => res.data);
};
