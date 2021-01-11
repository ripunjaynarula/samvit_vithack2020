const mongoose = require('mongoose')

const CertificateSchema = new mongoose.Schema({
  eventname: {
    type: String,
    required: true,
    trim: true,
  },
  id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  email: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  template: {
    type: String,
    required:true
  }
})

module.exports = mongoose.model('Certificate', CertificateSchema)