import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required."],
        trim:true,
    },
    email:{
        type:String,
        required:[true,"Email is reuired."],
        trim:true,
        unique:true,
        lowercase:true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email"]

    },
    password:{
        type:String,
        required:[true,"Password is required."],
        minlength:6,
    }
},
{timestamps:true})

const User = mongoose.model("User",userSchema);
export default User;