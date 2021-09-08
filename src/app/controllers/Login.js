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
        User.findOne({ account : req.body.account , pass : req.body.password })
            .then(user => {
                return mongoose.mongooseToObject(user)
            })
            .then(user => res.render('info', {
                user
            })).catch(next);
    };
    async modifier(req, res, next){
        const user = await User.findOne({ _id : req.params.id})
        let data = {};
        let payload = req.body;
        if(payload.name) data.name = payload.name;
        if(payload.age) data.age = payload.age;
        if(payload.weight) data.weight = payload.weight;
        if(payload.hight) data.hight = payload.hight;
        if(payload.maxim) data.maxim = payload.maxim;
        if(req.file) data.avt = req.file.path.split('\\').slice(-2).join('/');
        if(payload.favorites) data.favorites = '/' + payload.favorites.split(',');
        Object.assign(user, data);
        await user.save()
            .then(() => res.redirect('/')).catch(next);
    }
};
export default new Login();