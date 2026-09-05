import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        minLength : 3,
        required : true,
        trim: true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password : {
        type : String,
        required : true,
        minLength : 8
    },
    gender : {
        type : String,
        enum : ["Male", "Female"]
    }
},{timestamps : true})

UserSchema.pre("save", async function () {
    if(!this.isModified("password")){
        return ;
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
})

UserSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword,this.password)
    
}

const userModel = mongoose.model("User", UserSchema)

export default userModel;