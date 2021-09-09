import User from "../models/User.js";
import mongoose from '../until/mongoose.js'
class Login{
    auto(req, res, next){
        res.render('login');
    };
    post(req, res, next){
        const user = new User(req.body);
        user.save().then(()=> res.redirect('/')).catch(next);
    };
    pass(req, res, next){
        User.findOne({ account : req.body.account , password : req.body.password })
            .then(user => {
                if(user) return mongoose.mongooseToObject(user);
                return Promise.reject(new Error("Tài khoản không đúng!"));
            })
            .then(user => res.render('info', {
                user
            })).catch(next);
    };
    async modifier(req, res, next){
        const user = await User.findOne({ _id : req.params.id});
        let data = {};
        let payload = req.body;
        if(payload.name) data.name = payload.name;
        if(payload.age) data.age = payload.age;
        if(payload.weight) data.weight = payload.weight;
        if(payload.hight) data.hight = payload.hight;
        if(payload.maxim) data.maxim = payload.maxim;
        if(req.file) data.avt ='/' + req.file.path.split('\\').slice(-2).join('/');
        let tmp = payload.favorites.split(',');
        for (const item in tmp) {
            if (Object.hasOwnProperty.call(tmp, item)) {
                if(tmp[item].trim()==='') tmp.splice(item,1);
            };
        };
        if(payload.favorites) data.favorites = tmp;
        Object.assign(user, data);
        await user.save().then(() => res.redirect('/')).catch(next);
    };
};
export default new Login();