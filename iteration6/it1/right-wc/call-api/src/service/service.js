//import fetch from 'cross-fetch';
require('./mongo-service/domain/db');
const repository = require('./mongo-service/dao/mongo-repository');

export const getList = () => {
    
    return repository.getRandomData("es").then(response => {
        console.log("response = ",response)
        return response;
    }).catch(e => {
        return {};
    })
}
