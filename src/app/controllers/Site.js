import User from "../models/User.js";
import mongoose from "../until/mongoose.js";
class Site{
    index(req, res, next){
        User.find({})
        .then(users =>{
            return mongoose.multipleMongoosesToObject(users);
        })
        .then(users => {
            return users.map(( item, index ) =>{
                return Object.assign(item, { 
                    avt: '/' + item.avt.split('/').slice(-2).join('/'),
                    idUser: index
                });
            });
        })
        .then(users => res.render('home',{ users })).catch(next);
    };
};
export default new Site();