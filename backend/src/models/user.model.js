import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const access_Token_Secret = "JapanPatelSDEDev#07@2002";
const refresh_Token_Secret = "JapanPatelSDEDev#07@2002";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }
}, { timestamps: true })

userSchema.pre( "save", async function (next) {

    // console.log("before:", this.password);

    if(this.isModified("password")){

        this.password = await bcrypt.hash( this.password, 10);
    }
    // console.log("after:", this.password);
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare( password, this.password);
}

userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            password: this.password
        },
        access_Token_Secret
    )
}

userSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
            _id: this._id,
        },
        refresh_Token_Secret
    )
}

const User = mongoose.model("User", userSchema);

export default User;