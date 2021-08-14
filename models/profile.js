import mongoose from 'mongoose'



const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  notifications: [String],
  address: String,
  city: String,
  state: String,
  country: String,
  zipcode: Number,
  isAdmin: {
    type: Boolean,
    default: false,
  },
  shops: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop"
  }],
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order"
  }],
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review"
  }],
  cart: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }],
  wishlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }]
}, {
  timestamps: true
});

const Profile = mongoose.model('Profile', profileSchema);

export {
  Profile
}