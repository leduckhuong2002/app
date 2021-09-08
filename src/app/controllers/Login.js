import Person from "../models/Person.js";
class Login{
    auto(req, res, next){
        res.render('login');
    };
    post(req, res, next){
        const person = new Person(req.body);
        person.save().then(()=> res.redirect('/')).catch(next);
    };
};
export default new Login();