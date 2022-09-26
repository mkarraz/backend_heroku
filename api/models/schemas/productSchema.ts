import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200,
  },
  photoURL: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  timestamp: {
    type: Number,
    required: false,
    default: Date.now,
  },
})

export default mongoose.model('products', productSchema)
