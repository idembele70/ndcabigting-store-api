const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const PORT = process.env.PORT || 5000
dotenv.config();

mongoose
  .connect("mongodb+srv://ikd:ikd@cluster0.szuws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log('App is running.. on port', PORT);
});

app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);