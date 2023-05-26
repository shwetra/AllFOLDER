const express = require("express");
const cors = require("cors");
const dbConnect = require("./db");
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("./Models/User");
const SliderImage = require("./Models/Sliderimage");
const OfferImage =require("./Models/Offer");
const Hotel = require("./Models/Hotel");
const nodemailer = require("nodemailer");
const FormData = require("./Models/Email");

require("dotenv").config()
const PORT = process.env.PORT || 6000;
const your_secret_key=process.env.KEY

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(
  // Set up session middleware
  session({
    secret: 'your_secret_key',
    resave: true,
    saveUninitialized: true
  })
);


//isko hatana hai
app.put('/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, {
    isAdmin: req.body.isAdmin,
  }, { new: true });
  if (!user) return res.status(404).send('User not found.');
  res.send(user);
});


//get allusers
app.get('/allusers', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete user by id
// DELETE a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully', user: deletedUser });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});


// Set up login or user creation route
app.post('/auth', (req, res) => {
  const { username, password,isAdmin} = req.body;
  User.findOne({ username })
    .then(user => {
      if (user) {
        // User already exists, attempt login
        bcrypt.compare(password, user.password)
          .then(result => {
            if (result === true) {
              const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, 'your_secret_key', { expiresIn: '1h' });
              req.session.token = token;
              if (user.isAdmin) {
                res.send(user)
              } else {
                res.send(user);
              }
            } else {
              res.status(401).json({ message: 'Invalid username or password' });
            }
          })
          .catch(err => {
            throw err;
          });
      } else {
        // User does not exist, create new user
        bcrypt.hash(password, 10)
          .then(hash => {
            const newUser = new User({ username, password: hash, isAdmin });
            newUser.save()
              .then(() => {
                const token = jwt.sign({ id: newUser._id, isAdmin: newUser.isAdmin }, 'your_secret_key', { expiresIn: '1h' });
                req.session.token = token;
                if (newUser.isAdmin) {
                  res.send('hii admin');
                } else {
                  res.send('hi user');
                }
              })
              .catch(err => {
                throw err;
              });
          })
          .catch(err => {
            throw err;
          });
      }
    })
    .catch(err => {
      throw err;
    });
});

// Set up admin dashboard route
app.get('/admin/dashboard', verifyToken, (req, res) => {
  jwt.verify(req.session.token, 'your_secret_key', (err, decoded) => {
    if (err) throw err;
    if (decoded.isAdmin) {
      // Render admin dashboard
      res.send('Welcome to the admin dashboard!');
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  });
});



// Verify JWT token middleware
function verifyToken(req, res, next) {
  const token = req.session.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) throw err;
    req.decoded = decoded;
    next();
  });
}








//sliderimage
app.post('/sliderimages', async (req, res) => {
  try {
    const sliderImage = new SliderImage(req.body);
    const savedSliderImage = await sliderImage.save();
    res.status(201).json(savedSliderImage);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
//deletsliderimage
app.delete('/sliderimages/:id', async (req, res) => {
  try {
    const deletedSliderImage = await SliderImage.findByIdAndDelete(req.params.id);
    if (!deletedSliderImage) {
      return res.status(404).json({ message: 'SliderImage post not found'});
    }
    res.json({ message: 'SliderImage post deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
// Get all SliderImage posts
app.get('/sliderimages', async (req, res) => {
  try {
    const sliderImages = await SliderImage.find();
    res.json(sliderImages);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});




app.post('/offer', async (req, res) => {
  try {
    const { url } = req.body;
    const newOfferImage = await OfferImage.create({ url });
    res.status(201).json(newOfferImage);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// GET all OfferImage posts
app.get('/offerimages', async (req, res) => {
  try {
    const offerImages = await OfferImage.find();
    res.json(offerImages);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// DELETE an OfferImage post by ID
app.delete('/offerimages/:id', async (req, res) => {
  try {
    const deletedOfferImage = await OfferImage.findByIdAndDelete(req.params.id);
    if (!deletedOfferImage) {
      return res.status(404).json({ message: 'OfferImage post not found' });
    }
    res.json({ message: 'OfferImage post deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//get all hotel
app.get('/hotel', async (req, res) => {
  try {
    const hotel = await Hotel.find();
    res.send(hotel);
  } catch (error) {
    res.status(500).send(error);
  }
});

//POST DATA 
app.post('/hoteldata', async (req, res) => {
  const hotel = new Hotel(req.body); 
  try {
  const savedhotel = await hotel.save();
  res.status(201).json(savedhotel);
  }
  catch (error) {
  res.status(500).json({ error });
  }
  });

app.delete('/hotels/:id', async (req, res) => {
  await Hotel.findByIdAndDelete(req.params.id);
  res.send('Hotel deleted successfully');
});



//nodeemaiil
app.post('/send-email', async (req, res) => {
  const FormData = req.body;
  try {
    await main(FormData);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

async function main(FormData) {
  console.log(FormData)
  let testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 2525,
    auth: {
      user: 'sanghamrai1@gmail.com',
      pass: '8143BAC34725CE232DAB2C487C7C565298C6'
    }
  });

  let info = await transporter.sendMail({
    from: "sanghamrai1@gmail.com",
    to: 'sanghamrai7@gmail.com',
    subject: 'AS_Destination',
    html: `
      <p>Name: ${FormData.name}</p>
      <p>Contact Number: ${FormData.contactNumber}</p>
      <p>Email: ${FormData.email}</p>
      <p>Address: ${FormData.address}</p>
      <p>Country: ${FormData.Country}</p>
      <p>Message: ${FormData.message}</p>
    `
  });
}



app.listen(PORT, () => {
  dbConnect();
  console.log(`Server started on port ${PORT}`);
});
