// import cloudinary from 'cloudinary'

// export const UploadImage = async ( file: File ) => {

//     const buffer = await file.arrayBuffer();
//     const bytes = Buffer.from(buffer);

//     return new Promise(async(resolve, reject) => {
//         await cloudinary.v2.uploader.upload_stream({
//             resource_type: 'auto'
//         }, async (err, result) => {
//             if(err){
//                 reject(err.message)
//             }

//             resolve(resolve);
//         }).end(bytes);
//     })
// }