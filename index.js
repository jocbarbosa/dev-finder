const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-mlbks.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.listen(3333);

app.get('/users', (request, response) => {
    const { id, name } = request.body;

    response.json({
        id: id,
        name: name
    });
});