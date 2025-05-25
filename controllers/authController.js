import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, preferences } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success:false,message: 'Name, email, and password are required.' });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({success:false, message: 'User already exists with this email.' });
    }

    const user = await User.create({ name, email, password, preferences });

    res.status(201).json({
        success:true,
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      message:"User Successfully Registered"
    });
  } catch (error) {
    next(error); // Pass to error handling middleware
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success:false,message: 'Email and password are required.' });
    }

    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ success:false,message: 'Invalid email or password.' });
    }

    res.json({
        success:true,
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      message:"Successfully login"
    });
  } catch (error) {
    next(error);
  }
};
