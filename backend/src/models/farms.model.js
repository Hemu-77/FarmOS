import mongoose from "mongoose";


const FarmSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        minLength : 3,
        trim : true
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    description : {
        type : String,
        minLength : 8
    },

},{
    timestamps : true
})

const FarmModel = mongoose.model("Farm", FarmSchema);

export default FarmModel;