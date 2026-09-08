import mongoose from "mongoose";

const cropSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        minLength : 3
    },
    field : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Field",
        required : true
    },
    description : {
        type : String,
        trim : true
    },
    plantedDate : {
        type : Date,
        required : true
    },
    expectedHarvestDate : {
        type : Date,
        // required : true
    },
    actualHarvestDate : {
        type : Date
    }
},{timestamps : true })

const cropModel = mongoose.model('Crop', cropSchema);

export default cropModel;