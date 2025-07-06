import React, { useState } from "react";
import { toast } from "react-toastify";

const Uploadfile = ({ form, setForm }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleOnChange = (e) => {
    // code
    const files = e.target.files;
    if (files) {
      setIsLoading(true);
      let allFiles = form.images; // []
      for (let i = 0; i < files.length; i++) {
        console.log(files[i]);

        // Validate
        const file = files[i];
        if (!file.type.startsWith("image/")) {
          toast.error(`File ${file.name} not image`);
          continue;
        }
        // Image Resize
      }
    }
  };
  return (
    <div>
      <input onChange={handleOnChange} type="file" name="images" multiple />
    </div>
  );
};

export default Uploadfile;
