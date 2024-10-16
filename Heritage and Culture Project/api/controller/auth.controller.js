// import User from '../models/user.model.js';
// import bcryptjs from 'bcryptjs';
// import { errorHandler } from '../utils/error.js';

// export const signup = async (req, res, next) => {
//     const { username, email, password } = req.body;
//     const hashedPassword = bcryptjs.hashSync(password, 10);
//     const newUser = new User({ username, email, password: hashedPassword});
//     try{
//         await newUser.save();
//         res.status(201).json({message: 'User created successfully'});
//     }catch(error){
//         next(error);
//         // next(errorHandler(550, 'error from the function'));

//     }
// };

import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Validate input fields
  if (!email || !username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the user already exists with the same email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create new user
    const newUser = new User({ username, email, password: hashedPassword });

    // Save user to the database
    await newUser.save();

    // Send success response
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    next(errorHandler(500, 'Failed to create user'));
  }
};
