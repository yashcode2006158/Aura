const serverless = require('serverless-http');
const { app, connectDB } = require('../server/server');

// Ensure DB connection is established for every request
let isConnected = false;

const handler = async (event, context) => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
  
  // Wrap the express app with serverless-http
  const serverlessApp = serverless(app);
  return await serverlessApp(event, context);
};

module.exports.handler = handler;
