import User from "../models/User.js";
class Login{
    auto(req, res, next){
        res.render('login');
    };
    post(req, res, next){
        const user = new User(req.body);
        user.save().then(()=> res.redirect('/')).catch(next);
    };
    pass(req, res, next){
        User.findOne({ account : req.body.account }).then(user => res.render('info')).catch(next);
    };
};
export default new Login();