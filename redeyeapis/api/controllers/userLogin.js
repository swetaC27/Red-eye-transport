"use strict";

const mongoose = require('mongoose'),
jwt = mongoose.model('jsonwebtoken'),
bcrypt = require('bcrypt'),
User = mongoose.model('UserLogin');
