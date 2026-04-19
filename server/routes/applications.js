const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const { validateApplication } = require('../middleware/validate');
const nodemailer = require('nodemailer');

router.post('/', validateApplication, async (req, res) => {
  try {
    const appData = req.body;
    
    // Save to database
    const newApplication = new Application(appData);
    await newApplication.save();

    // Send confirmation email
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT || 587,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.EMAIL_TO || process.env.SMTP_USER,
        subject: `New Application from ${appData.name} - ${appData.company}`,
        text: `
          New application received:
          Name: ${appData.name}
          Email: ${appData.email}
          Company: ${appData.company}
          Service: ${appData.service}
          Message: ${appData.message}
          Links: ${appData.links ? appData.links.join(', ') : 'None'}
        `
      };

      try {
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Continue even if email fails, DB insert succeeded
      }
    }

    res.status(201).json({ success: true, message: 'Application received' });
  } catch (error) {
    console.error('Error processing application:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
