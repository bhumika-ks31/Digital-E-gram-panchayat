require('dotenv').config();
const connectDB = require('../src/config/db');
const User = require('../src/models/User');

const seed = async () => {
  await connectDB();
  const users = [
    { name:'Officer One', email:'officer@example.com', password:'password123', role:'officer' },
    { name:'Staff One', email:'staff@example.com', password:'password123', role:'staff' },
    { name:'User One', email:'user@example.com', password:'password123', role:'user' },
  ];
  for (const u of users) {
    const exists = await User.findOne({ email: u.email });
    if (!exists) {
      await User.create(u);
      console.log('Created:', u.email);
    } else {
      console.log('Already exists:', u.email);
    }
  }
  process.exit();
};

seed().catch(err => { console.error(err); process.exit(1); });
