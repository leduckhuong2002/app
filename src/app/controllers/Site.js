import Person from "../models/Person.js";
import mongoose from "../until/mongoose.js";
class Site{
    index(req, res, next){
        Person.find({}).then(persons => res.render('home',{ persons: mongoose.mongooseToObject(persons[0]) }))
    }
};
export default new Site();