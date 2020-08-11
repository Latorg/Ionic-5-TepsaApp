import Server from './classes/server';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors';

import carouselRoutes from './routes/carousel';
import userRoutes from './routes/user';
import serviceRoutes from './routes/service';
import subserviceRoutes from './routes/subservice';
import categoryRoutes from './routes/category';
import subcategoryRoutes from './routes/subcategory';
import productRoutes from './routes/product';

const server = new Server();
// Congifurar Cors
server.app.use( cors({ origin: true, credentials: true }) );
server.app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Body Parser
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json() );

// File Upload
server.app.use( fileUpload() );

// Routes
server.app.use('/carousel', carouselRoutes);
server.app.use('/user', userRoutes);
server.app.use('/service', serviceRoutes);
server.app.use('/subservice', subserviceRoutes);
server.app.use('/category', categoryRoutes);
server.app.use('/subcategory', subcategoryRoutes);
server.app.use('/product', productRoutes);

// Connect DB
mongoose.connect('mongodb://localhost:27017/tepsa', 
                { useNewUrlParser: true, useCreateIndex: true }, ( err ) => {
    if ( err ) throw err;

    console.log('Database online');
})

//Start Express
server.start( () => {
    console.log(`Server Running at port ${ server.port }`);
})