const rp = require('request-promise');

const api = {
    getProduct(name) {
        const options = {
            method:'GET',
            uri:`https://anas-proj.herokuapp.com/inventory/${name}`,
            json:true
        };
        return rp(options);
    },
    createProduct(product){
        const options = {
            method:'POST',
            uri:`https://anas-proj.herokuapp.com/inventory`,
            json:true,
            body:{
                name: product.name,
                price: product.price,
                room: product.room
            }
        };
        return rp(options);
    }
};
module.exports = api;