const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const User = require('./models/User');

async function makeAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    
    console.log('✅ Connected to MongoDB');
    
    // Update user to admin
    const result = await User.findOneAndUpdate(
      { email: 'justtest@gmail.com' },
      { role: 'admin' },
      { new: true }
    );
    
    if (result) {
      console.log(`✅ Successfully made ${result.email} an ADMIN!`);
      console.log(`User: ${JSON.stringify(result, null, 2)}`);
    } else {
      console.log('❌ User not found!');
    }
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

makeAdmin();
