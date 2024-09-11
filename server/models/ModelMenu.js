// import mongoose from 'mongoose';

// const RestaurantMenuSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     message: 'Name is required',
//   },
//   image: {
//     type: String,
//     required: true,
//     message: 'Image is required',
//   },
//   description: {
//     type: String,
//     required: true,
//     message: 'Description is required',
//   },
//   price: {
//     type: Number,
//     required: true,
//     message: 'Price is required',
//   },
//   category: {
//     type: String,
//     required: true,
//     message: 'Category is required',
//   },
//   size: {
//     type: String,
//     required: false,
//     default: null,
//   },
//   date: { type: Date, default: Date.now },
// });

// export default mongoose.model('RestaurantMenu', RestaurantMenuSchema);

import mongoose from 'mongoose';

const RestaurantMenuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  size: {
    type: String,
    default: null,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('RestaurantMenu', RestaurantMenuSchema);
