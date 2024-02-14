import React, { useState } from 'react';
import './CreatePage.css'; // Import CSS file for styling

const CreatePage = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      // Perform upload logic here, like sending the file to a server
      console.log("Uploading file:", file);

      // Display selected image
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a file before uploading");
    }
  };

  return (
    <div className="container">
      <h1>Create Page</h1>
      <div className="image-container">
        {imageUrl && <img src={imageUrl} alt="Selected" />}
      </div>
      <div className="button-container">
        <input type="file" onChange={handleFileChange} />
        <button className="upload-button" onClick={handleUpload}>Upload File</button>
      </div>
    </div>
  );
};

export default CreatePage;
