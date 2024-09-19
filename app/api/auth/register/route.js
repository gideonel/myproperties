import connectDB from '@/config/database'; // Adjust the import according to your project structure
import User from '@/models/User'; // Adjust the import according to your project structure
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await connectDB();

  const { email, username, password, confirmPassword } = await req.json();

  if (!email || !username || !password || !confirmPassword) {
    return new Response(JSON.stringify({ message: 'All fields are required' }), { status: 400 });
  }

  if (password !== confirmPassword) {
    return new Response(JSON.stringify({ message: 'Passwords do not match' }), { status: 400 });
  }

  try {
    // Check if user with this email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: 'Email already exists' }), { status: 400 });
    }
    
    // Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return new Response(JSON.stringify({ message: 'Username already exists' }), { status: 400 });
    }

    // Hash password and create new user
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();
    return new Response(JSON.stringify({ message: 'User registered successfully' }), { status: 201 });
    
  } catch (error) {
    console.error('Error during registration:', error);
    return new Response(JSON.stringify({ message: 'An error occurred during registration' }), { status: 500 });
  }
}
