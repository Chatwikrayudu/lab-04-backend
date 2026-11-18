const express = require('express');
const db = require('./database/database');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.use('/', authRoutes);

// Health check / root route
app.get('/', (req, res) => {
  res.json({
    message: 'Lab 4 Authentication API is running.',
    endpoints: {
      register: 'POST /register',
      login: 'POST /login'
    }
  });
});

// Start Express server only when run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
