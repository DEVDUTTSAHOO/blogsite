import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';


export const signup = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
 console.log("signup entered");
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists.Please sign in." });
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match. Please enter matching passwords." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
if (!emailRegex.test(email)) {
  return res.status(400).json({ message: "Invalid email format. Please enter a valid email address." });
} 


    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if (!passwordRegex.test(password)) {
  return res.status(400).json({ message: "The password must have minimum length 8, at least one uppercase letter, one lowercase letter, one number, and one special character." });
}



    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign({ email: newUser.email, id: newUser._id }, "secretkey", { expiresIn: "1h" });
    return res.status(201).json({ decoded: newUser, token });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Sign Up Failed." });
  }
};
export const signin =async(req,res)=>{
    const {email,password}=req.body;

    try {
        console.log("entered signin");
        const existingUser=await User.findOne({email});
        if(!existingUser) return res.status(404).json({message:"User doesn't exist.Please signup"});
        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message:"Password doesn't match.Please enter the correct password"});
        const token = jwt.sign({email:existingUser.email,id:existingUser._id},"secretkey",{expiresIn:"1h"});
        
        res.status(200).json({decoded: existingUser , token });
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Something went wrong'});
    }
}

