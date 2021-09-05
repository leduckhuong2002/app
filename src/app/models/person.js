import mongoose from "mongoose";
const Schema = mongoose.Schema;
const PersonSchema = new Schema({
    name:{ type: String , unique: true},
    age:{ type: Number },
    weight:{ type: Number },
    hight:{ type: String },
    crush:{ type: Boolean },
    favorites: [ String ],
    maxim:{ type: String },
}, {
    timestamps: true,
});
export default mongoose.model('persons', PersonSchema);
