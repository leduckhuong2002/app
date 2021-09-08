import mongoose from "mongoose";
const Schema = mongoose.Schema;
const PersonSchema = new Schema({
    account:{ type: String , unique: true, maxlength: 100},
    password: { type: String , maxlength: 25},
    name:{ type: String , default: ''},
    age:{ type: Number , default: 0},
    weight:{ type: Number , default: 0},
    hight:{ type: String , default: '1m52'},
    crush:{ type: Boolean , default: false},
    favorites: [ String ],
    maxim:{ type: String , default: ''},
}, {
    timestamps: true,
});
export default mongoose.model('Persons', PersonSchema);
