import React, { useEffect } from "react";
import { getImageData, deleteImageData } from "../../api";
import DropZone from "./Dropzone/dropzone";
import ImageDisplay from "./imageDisplay";
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
      <ImageDisplay data={state.data} onClickDeleteData={onClickDeleteData} />
    </div>
  );
};
export default Photos;
