import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dotenv from 'dotenv';
import handlebars from 'express-handlebars';
import methodOverride from 'method-override';

import helperHandlebars from './helpers/handlebars.js';
import route from './routers/index.js';
import db from './configs/db/index.js';

dotenv.config();
db.connect();
const app = express();
const port = process.env.PORT||3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'resources','views'));
app.engine('hbs', handlebars(helperHandlebars));
app.set('view engine', 'hbs');
route(app);

app.listen(port, () => console.log(`App listen in http://localhost:${port}`));
