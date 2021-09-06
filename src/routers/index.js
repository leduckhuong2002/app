import site from './sub-routers/site.js';
import login from './sub-routers/login.js';
function route(app){
    app.use('/login', login);
    app.use('/', site);
};
export default route;