import person from "../models/person";
import mongoose from "../until/mongoose";
class Site{
    index(req, res, next){
        person.find({})
            .then((people) => res.render('home',{
                people: mongoose.multipleMongoosesToObject(people)[0]
            })).catch(next);
    };
};
export default new Site();