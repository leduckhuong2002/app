import User from "../models/User.js";
class Data{
    show(req, res, next){
        if(req.query.admin === '@khuong'){
            User.find({}).then(users => res.json(users)).catch(next);
        }
    }
};
export default new Data();