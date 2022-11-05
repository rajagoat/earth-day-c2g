const express = require('express');
const {
    creatUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
} = require('../controllers/farmerController');