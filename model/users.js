import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }, 
    phoneNumber:{
        type: Number,
        required: true
    },
    id: {
        type: String
    }
});
const Users=mongoose.model("Users", userSchema);
export default Users;