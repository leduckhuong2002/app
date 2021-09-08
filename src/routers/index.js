import site from './sub-routers/site.js';
import data from './sub-routers/data.js';
import login from './sub-routers/login.js';
function route(app){
    app.use('/login', login);
    app.use('/data', data);
    app.use('/', site);
};
export default route;