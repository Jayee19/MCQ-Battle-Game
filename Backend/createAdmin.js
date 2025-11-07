const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config();

const User = require('./models/User');

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    
    console.log('✅ Connected to MongoDB\n');
    
    // Hash the password
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    // Create admin user
    const admin = new User({
      username: 'admin',
      email: 'admin@mcq.com',
      password: hashedPassword,
      role: 'admin'
    });
    
    await admin.save();
    console.log('✅ Admin user created successfully!');
    console.log(`Email: admin@mcq.com`);
    console.log(`Password: admin123`);
    console.log(`Role: admin`);
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

createAdmin();
