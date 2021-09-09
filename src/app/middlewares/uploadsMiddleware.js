import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import multer  from 'multer';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.resolve(__dirname, '../../public/uploads'))
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
});

// const upload = multer({ storage: fileStorageEngine });
const upload = multer({ dest: path.resolve(__dirname, '../../public/uploads') });
export default {
    upload,
    opUpload : upload.fields([{ name: 'imgProduct' }, { name: 'listImg', maxCount: 8 }])
}