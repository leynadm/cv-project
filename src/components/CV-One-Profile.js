import React, {useState} from "react";
import profileImage from "../images/cat.png";
import "../styles/CV-One-Profile.css";
import { useDropzone } from "react-dropzone";

const CVOneProfile = () => {

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
    <div className="cv-one-profile">
      <div className="cv-one-left-side">
        <input className="cv-one-name" placeholder="Your name here"></input>
        <input
          className="cv-one-role"
          placeholder="Your current role here"
        ></input>
      </div>

      <div className="cv-one-profile-photo" {...getRootProps()}>
        <input {...getInputProps()} />
        
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
      
    </div>
  );
};

export default CVOneProfile;
