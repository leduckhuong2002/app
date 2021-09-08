import User from "../models/User.js";
import mongoose from "../until/mongoose.js";
class Site{
    index(req, res, next){
        User.find({}).then(users => res.render('home',{ users: mongoose.multipleMongoosesToObject(users) }))
    };
};
export default new Site();