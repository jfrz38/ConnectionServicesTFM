//import fetch from 'cross-fetch';
require('../domain/db');
const repository = require('../dao/mongo-repository');

module.exports.getList = () => {
    
    return repository.getRandomData("es").then(response => {
        console.log("response = ",response)
        return response;
    }).catch(e => {
        return {};
    })
}
