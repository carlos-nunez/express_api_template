const mongoose = require("mongoose");
/**
Types

String
Number
Boolean
Date
[Number]


Fields

type
unique
required
default

**/

const serialSchema = new mongoose.Schema({
  key: {
    type: String,
    unique: true,
    required: true,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

mongoose.model("SerialKey", serialSchema);
