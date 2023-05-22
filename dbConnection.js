const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/todoList', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  const todoList = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
  });
  
  const todoItem = mongoose.model('todoItem', todoList);
