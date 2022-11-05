require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// routes
const userRoutes = require('./routes/user');
const farmerRoutes = require('./routes/farmer');
const gleanerRoutes = require('./routes/gleaner');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// handle routes for requests
app.use('/api/user', userRoutes);
app.use('/api/farmer', farmerRoutes);
app.use('/api/gleaner', gleanerRoutes);

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`connected to db & listening on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })