const express = require('express');
const {celebrate, Joi} = require('celebrate');

const routes = express.Router();

const ProductController = require('./controller/ProductController');

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products',
    celebrate({
        body: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            url: Joi.string().required()
        })
    }, {
        abortEarly: false
    }),
    ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;
