import mongoose from "mongoose";

const fieldSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    farm : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Farm',
        required : true
    },
    description : {
        type : String,
        minLength : 12,
    }
},{timestamps : true})

const fieldModel = mongoose.model("Field", fieldSchema);

export default fieldModel;