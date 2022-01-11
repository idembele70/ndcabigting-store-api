const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const dotenv = require('dotenv');
dotenv.config();

// REGISTER END POINT
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.SKEY).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//TODO: FIX THE FOLLOWING CODE BELOW BROKEN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(401).send({ msg25: 'Invalid Credentials' });
    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SKEY);
    const password = hashedPassword.toString(CryptoJS.enc.Utf8);
    if (password !== req.body.password) return res.status(401).send({ msg30: 'Invalid Credentials' });

    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    //res.status(500).json(err);
  }
});

module.exports = router;
