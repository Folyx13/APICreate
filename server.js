const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3000;

app.use(express.json());
require('dotenv').config();


module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
    } catch (err) {
        console.error(err);
    }
};



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
    console.log('Connecté à MongoDB Cloud !');
});

// Utilisation des routes liées aux produits
app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});
