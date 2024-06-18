const express = require ('express');


const routes = require ('./router');

const app = express();
app.use(express.json());

app.use(routes);


const PORT = 3333;
app.listen(PORT, () => console.log('Server is running on Port 3333'));
