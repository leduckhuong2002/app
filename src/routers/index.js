import site from './sub-routers/site';
function route(app){
    app.use('/', site);
};
export default route;