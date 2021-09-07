class Login{
    auto(req, res, next){
        res.render('login');
    };
};
export default new Login();