import React from "react";
import { useRef } from "react";
const ImageDisplay = (props) => {
  const modalImageRef = useRef();
  const modalRef = useRef();
  const modalImg = useRef();
  const openImageModal = (src) => {
    modalRef.current.style.display = "block";
    modalImageRef.current.src = src;
  };
  const closeModal = () => {
    modalRef.current.style.display = "none";
    modalImageRef.current.style.backgroundImage = "none";
  };
  //   modalImg.onClick = () => openImageModal();
  return (
    <div>
      <div id="card-columns" className="card-columns">
        {props.data.length <= 0
          ? "No images"
          : props.data.map((image) => (
              <div id="card" className="card text-center" key={image._id}>
                <div>
                  <img
                    id="image"
                    ref={modalImg}
                    onClick={() =>
                      openImageModal(
                        "data:" +
                          image.img.contentType +
                          ";base64," +
                          Buffer.from(image.img.data.data).toString("base64")
                      )
                    }
                    alt="image1"
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
                  onClick={() => props.onClickDeleteData(image._id)}
                >
                  DELETE NOTE
                </button>
              </div>
            ))}
      </div>
      <div className="modal" ref={modalRef}>
        <div className="overlay"></div>
        <span className="close" onClick={() => closeModal()}>
          X
        </span>
        <img class="modal-content" ref={modalImageRef} alt="image1" />
      </div>
    </div>
  );
};

export default ImageDisplay;
