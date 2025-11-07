const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const User = require('./models/User');

async function verifyAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    
    const admin = await User.findOne({ email: 'admin@mcq.com' });
    
    if (admin) {
      console.log('✅ Admin found:');
      console.log(`Email: ${admin.email}`);
      console.log(`Username: ${admin.username}`);
      console.log(`Role: ${admin.role}`);
    } else {
      console.log('❌ Admin not found');
    }
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

verifyAdmin();
