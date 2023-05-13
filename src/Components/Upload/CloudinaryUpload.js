import { openUploadWidget } from '../../utils/CloudinaryService';
import { cloudinary_upload_preset } from '../../config';
import { cloudinary_cloud } from '../../config';

const CloudinaryUpload = ({ setUrl, setName }) => {
  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: cloudinary_cloud,
        uploadPreset: cloudinary_upload_preset,
        sources: ['local'],
      },
      function (error, result) {
        if (!error && result.event === 'success') {
          setUrl(result.info.secure_url);
          setName(result.info.original_filename);
          console.log(result.info);
        } else {
          if (error) {
            console.log(error);
          }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button
      className=" cloudinary-button  rounded-full text-lg  font-semibold"
      onClick={uploadImageWidget}
    >
      Select Track
    </button>
  );
};

export default CloudinaryUpload;
