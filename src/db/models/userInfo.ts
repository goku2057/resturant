import mongoose, { Schema, models } from "mongoose";

const userInfoSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    },  
    {timestamps: true}
);

const UserInfo = models.UserInfo || mongoose.model("UserInfo", userInfoSchema);
export default UserInfo;