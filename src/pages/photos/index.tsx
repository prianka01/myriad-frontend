import React, { useEffect, useRef } from "react";
import { getImageData, deleteImageData } from "../../api";
import DropZone from "./Dropzone/dropzone";
const Photos = () => {
  const [state, setState] = React.useState({
    data: [],
    reRender: 1,
    input_title: "",
  });

  const reRender = () => {
    setState({ ...state, reRender: 1 });
  };
  const getDataFromDb = async () => {
    let result = await getImageData();
    setState({ ...state, data: result });
  };
  const onClickDeleteData = async (idTodelete: any) => {
    let objIdToDelete = null;
    state.data.forEach((dat: any) => {
      if (dat._id === idTodelete) {
        objIdToDelete = dat._id;
      }
    });
    await deleteImageData(objIdToDelete);
    reRender();
    // let result = await getImageData();
    // setState({ ...state, data: result });
  };
  useEffect(() => {
    if (state.reRender === 1) {
      getDataFromDb();
      state.reRender = 0;
    }
  });

  return (
    <div>
      <p className="title">React Drag and Drop Image Upload</p>
      <div className="content">
        <DropZone reRender={reRender} getDataFromDb={getDataFromDb} />
      </div>
      <div id="card-columns" className="card-columns">
        {state.data.length <= 0
          ? "No images"
          : state.data.map((image: any) => (
              <div id="card" className="card text-center" key={image._id}>
                <div className="card-body">
                  <img
                    id="image"
                    src={
                      "data:" +
                      image.img.contentType +
                      ";base64," +
                      Buffer.from(image.img.data.data).toString("base64")
                    }
                  />
                </div>
                <button
                  id="button1"
                  className="card-link"
                  onClick={() => onClickDeleteData(image._id)}
                >
                  DELETE NOTE
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};
export default Photos;
