import React, { useState } from "react";
import "../styles/CV-Profile.css";
import { useDropzone } from "react-dropzone";

function CVProfile() {
  const [image, setImage] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/",
    onDrop: (acceptedFiles) => {
      setImage(
        acceptedFiles.map((upFile) =>
          Object.assign(upFile, {
            preview: URL.createObjectURL(upFile),
          })
        )
      );
    },
  });

  return (
    <div className="CV-profile">
      {/* dropzone UI */}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {/* hide text elements when an image has been dropped */}
        {image.length === 0 && (
          <>
            <p className="">Drag 'n' drop image here</p>
          </>
        )}
      </div>
      {/* preview uploaded image */}
      <div>
        {image.map((upFile) => {
          return (
            <div key={upFile.name}>
              <img src={upFile.preview} alt="preview" />
            </div>
          );
        })}
      </div>
      {/* user input fields */}
      <input className="CV-username" placeholder="Your name here" />
      <input className="CV-job-title" placeholder="Your current role here" />
    </div>
  );
}

export default CVProfile;
