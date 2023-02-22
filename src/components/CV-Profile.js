import React, { useState } from "react";
import "../styles/CV-Profile.css";
import { useDropzone, useDRopzone } from "react-dropzone";

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
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="">Drop the image here...</p>
        ) : (
          <p className="">Drag 'n' drop image here</p>
        )}
      </div>
      <div>
        {image.map((upFile) =>{
          return(
            <div>
              <img src={upFile.preview} alt="preview"/>
            </div>
          )
        })}
      </div>
      <input className="CV-username" placeholder="Your name here"></input>
      <input
        className="CV-job-title"
        placeholder="Your current role here"
      ></input>
    </div>
  );
}

export default CVProfile;
