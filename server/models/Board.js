const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const boardSchema = new Schema(
  {
    boardText: {
      type: String,
      required: 'You need to leave a board!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);


const Board = model('Board', boardSchema);

module.exports = Board;
