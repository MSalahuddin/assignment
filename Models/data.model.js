const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Date: {
        type: Date,
      },
      Open: {
      type: Number,
      required: true,
    },
    High: {
      type: Number,
      required: true,
    },
    Low: {
      type: Number,
      required: true,
    },
    Close: {
      type: Number,
      required: true,
    },
    Volume: {
      type: Number,
      required: true,
    },
    createdDate: { type: Date, default: Date.now },
  });
  
  const visualizeData = mongoose.model("users", userSchema);
  
  exports.visualizeData = visualizeData;
  