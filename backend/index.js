const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
// app.use(cors());
app.use(cors({
  origin: "https://mongo-auth-app.vercel.app", // your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model('User', UserSchema);

app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  await user.save();
  res.json({ message: 'User saved' });
});

app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
