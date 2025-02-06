const mongoose = require('mongoose');

// Connection URI for local MongoDB
const uri = "mongodb://127.0.0.1:27017/Backend"; 

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to Local MongoDB Successfully...');
  })
  .catch(err => {
    console.error('Could not connect to Local MongoDB...', err);
  });

// Define Schema
const UserSchema = new mongoose.Schema({  // ✅ Use UserSchema instead of LogInSchema
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true
    },
    adminId: {
        type: String,
        default: null
    }
});

// Create Model
const User = mongoose.model('User', UserSchema);  // ✅ Changed LogInSchema to UserSchema

module.exports = User;  // ✅ Exporting correctly
