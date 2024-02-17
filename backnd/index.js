const express = require('express');
const multer = require('multer')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Path = require('path')
const imageModel = require('./module/Blog');
const dotenv = require('dotenv');
dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()
//-----------------------------medialware----------------------------------
app.use(express.json())
app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json())

//-------------------------------database----------------------------------
try {
  mongoose.connect(process.env.MONGODB_URL)
  console.log('mongodb connected successfully');
} catch (error) {
  console.log(`mongoose connect error: ${error}`);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/Images')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + Path.extname(file.originalname))

  }
})

const upload = multer({ storage: storage })

// -----------------------------upload image-----------------------------
app.post('/upload', upload.single('file'), async (req, res) => {
  // console.log(req.file);
  // console.log(req.body.name);
  // console.log(req.city);
  // console.log(req.body.Description);
  // console.log(req.body.date);

  await imageModel.create({
    image: req.file.filename,
    name: req.body.name,
    city: req.body.city,
    Description: req.body.Description,
    date: req.body.date,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err))

})


// -----------------------------get image from display------------------------------
app.get('/getData', async (req, res) => {
  await imageModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})



// -----------------------------------get dynamic router post------------------------------------- 
app.post('/getRoute/:id', async (req, res) => {
  const { id } = req.params
  await imageModel.findById({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err))

})

// -----------------------------------Post Edit------------------------------------- 
app.put('/editPost/:id', async (req, res) => {
  const { id } = req.params
  await imageModel.findByIdAndUpdate({ _id: id },
    { name: req.body.name, Description: req.body.Description, city: req.body.city })
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})


//  -----------------------------delete----------------------------------------------
app.delete('/delete/:id', async (req, res) => {
  const { id } = req.params
  await imageModel.findByIdAndRemove({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err))

})

// -----------------------------------Server------------------------------------- 
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT)
})