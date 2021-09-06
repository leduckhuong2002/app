import person from "../models/person.js";
import mongoose from "../until/mongoose.js";
class Site{
    index(req, res, next){
        person.find({})
            .then((people) => res.render('home',{
                people: mongoose.multipleMongoosesToObject(people)[0]
            })).catch(next);
    };
};
export default new Site();