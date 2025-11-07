const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const User = require('./models/User');

async function checkUsers() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    
    console.log('✅ Connected to MongoDB\n');
    
    const users = await User.find();
    console.log(`📚 Total Users: ${users.length}\n`);
    
    users.forEach((user, index) => {
      console.log(`${index + 1}. Email: ${user.email}, Role: ${user.role || 'user'}, Username: ${user.username}`);
    });
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

checkUsers();
