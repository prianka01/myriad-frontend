import React, { useEffect } from "react";
import { putImageData, getImageData, deleteImageData } from "../../api";
import DropZone from "./Dropzone/dropzone";
const Photos = () => {
  const [state, setState] = React.useState({
    data: [],
    reRender: 1,
    input_title: "",
    numberOfIDs: 0,
  });
  useEffect(() => {
    if (state.reRender === 1) {
      getDataFromDb();
      state.reRender = 0;
    }
  });
  const getDataFromDb = async () => {
    let result = await getImageData();
    setState({ ...state, data: result });
  };
  const data = state.data;
  return (
    <div>
      <p className="title">React Drag and Drop Image Upload</p>
      <div className="content">
        <DropZone idToBeContinued={state.numberOfIDs} />
      </div>
      <div id="card-columns" className="card-columns">
        {data.length <= 0
          ? "No images"
          : data.map((image: any) => (
              <div className="card-body" key={image._id}>
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
            ))}
      </div>
    </div>
  );
};
export default Photos;
