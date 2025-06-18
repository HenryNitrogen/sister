"use client";

import React, { useState } from 'react';
export default function UploadPage() {
    const [file, setFile] = useState<File | null>(null);
    const handleUpload = async () => {
        if (!file) {
            return( alert("Please select a file to upload."));
           
        }
        const formData = new FormData();
        formData.append('file', file);
        const res = await fetch('/api/uploadvideo', {
            method: 'POST',
            body: formData,
        });
        const data = await res.json();
        console.log('File uploaded successfully:', data);
}

return (
    <div className="m-20 mt-30">
      <h1>Upload Page</h1>
      <p>Welcome to the upload page!</p>
          <div>
       <input type="file" accept="video/*" onChange={(e)=> setFile(e.target.files?.[0] ?? null)} />
       <button onClick={handleUpload}>upload</button>
    </div>
    </div>
  );
}
