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
    },
    geometry : {
        type : {
            type : String,
            enum : ["polygon"],
            // required : true
        },

        coordinates : {
            type : [[[Number]]],
            // required : true
        }
    }
},{timestamps : true})

fieldSchema.index({ geometry : '2dsphere' })

const fieldModel = mongoose.model("Field", fieldSchema);

export default fieldModel;