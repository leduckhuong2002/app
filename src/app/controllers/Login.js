import User from "../models/User.js";
import bcrypt from 'bcryptjs';
const saltRounds = 10;
import mongoose from '../until/mongoose.js'
class Login{
    auto(req, res, next){
        if(req.signedCookies.newUser){
            let cookies = JSON.parse(req.signedCookies.newUser);
            res.render('login', { cookies });
            return;
        }
        res.render('login');
    };
    post(req, res, next){
        const brief = req.body;
        bcrypt.hash(brief.password, saltRounds)
                .then( hashPassWord =>{
                    brief.password = hashPassWord;
                    const user = new User(brief);
                    user.save()
                        .then(() => {
                            res.cookie('newUser', JSON.stringify(brief), { signed : true , expires: new Date(Date.now() + 8 * 3600000)});
                            res.redirect('/login/auto');
                        })
                }).catch(next);
    };
    pass(req, res, next){
        let cookies = JSON.parse(req.signedCookies.newUser);
        User.findOne({ account : req.body.account })
            .then(user => {
                if(user){
                    if(req.body.password === cookies.password){
                        return mongoose.mongooseToObject(user);
                    }else if(bcrypt.compareSync(req.body.password, user.password)){
                        return mongoose.mongooseToObject(user);
                    }else{
                        return Promise.reject(new Error("Tài khoản không đúng!"));
                    }
                };
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
        if(payload.nickname) data.nickname = payload.nickname;
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