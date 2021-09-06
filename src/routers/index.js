import site from './sub-routers/site.js';
function route(app){
    app.use('/', site);
};
export default route;