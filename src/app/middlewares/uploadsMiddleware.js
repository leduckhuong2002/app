import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import multer  from 'multer';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log('hathikimanh', path.resolve(__dirname, '../../public/uploads'));
console.log('hathikimanh', path.resolve( __dirname, '../../../public/uploads'));
const upload = multer({ dest: path.resolve(__dirname, '../../public/uploads') });
export default {
    upload,
    opUpload : upload.fields([{ name: 'imgProduct' }, { name: 'listImg', maxCount: 8 }])
}