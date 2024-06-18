import express from 'express'

const express = require ('express');


const routes = require ('./routes');

const app = express();
app.use(express.json());

app.use(routes);

app.get('./usuarios')

const PORT = 333;
app.listen(PORT, () => console.log('Server is running on Port $(PORT)'));
