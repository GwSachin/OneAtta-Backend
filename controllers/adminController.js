import User from '../models/User.js';




import generateToken from '../utils/generateToken.js';


export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password ,role} = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({success:false, message: 'All fields are required' });
    }

    const adminExists = await User.findOne({ email });

    if (adminExists) {
      return res.status(400).json({success:false, message: 'Admin already exists' });
    }

    const admin = await User.create({
      name,
      email,
      password,
      role, 
    });

    res.status(201).json({
        success:true,
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        token: generateToken(admin._id),
        message:"Successfully Registered ",
    });
  } catch (error) {
    res.status(500).json({ success:false,message: 'Server error', error: error.message });
  }
};


export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
     if ( !email || !password ) {
      return res.status(400).json({success:false, message: 'All fields are required' });
    }

    const admin = await User.findOne({ email });

    if (!admin || !(await admin.matchPassword(password)) || admin.role !== 'admin') {
      return res.status(401).json({ success:false,message: 'Invalid credentials or not admin' });
    }

    res.json({
        success:true,
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      token: generateToken(admin._id),
      message:"Successfully Login"
    });
  } catch (error) {
    res.status(500).json({success:false, message: 'Server error', error: error.message });
  }
};




export const getAllUsers = async (req, res) => {
  const users = await User.find({ role: 'user' }).select('-password');
  res.status(200).json({message:"Users fetched successfully",success:true,users});
};
