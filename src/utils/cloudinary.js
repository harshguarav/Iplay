import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';




    // Configuration
    cloudinary.config({ 
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    
    // Upload an image
   const uploadOnCloudinary= async (localfilepath)=>{
        try {
            if(!localfilepath){
                return null
            }
            const result = await cloudinary.uploader.upload(localfilepath, {
                resource_type:"auto",
            })
            console.log(`file is uploaded successfully ${result.secure_url}`)
            fs.unlinkSync(localfilepath);
            return result
        }
        catch(error){
            fs.unlinkSync(localfilepath) // remove the locally saved file as the upload operation got failed
            console.log(error)
            return null
        }

   }
   export {uploadOnCloudinary}