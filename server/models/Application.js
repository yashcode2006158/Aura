const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: true },
  website: { type: String },
  phone: { type: String },
  service: { type: String, required: true },
  message: { type: String, required: true },
  links: [{ type: String }],
  status: { type: String, enum: ['pending', 'reviewed', 'contacted'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
