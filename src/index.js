import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dotenv from 'dotenv';
import handlebars from 'express-handlebars';

import helperHandlebars from './helpers/handlebars';
import route from './routers';
import db from './configs/db';

dotenv.config();
db.connect();
const app = express();
const port = process.env.PORT||3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'resources','views'));
app.engine('hbs', handlebars(helperHandlebars));
app.set('view engine', 'hbs');
route(app);

app.listen(port, () => console.log(`App listen in http://localhost:${port}`));
