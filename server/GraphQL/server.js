const initialObjects = require('../ObjectsCreation')
initialObjects.createObjects()
const objects = initialObjects.objects

var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql')

var app = express()

var schema = buildSchema(`
type Query {
  getExample (size: Int!): Message
}
type Message{
  message: String
  array: String
}
`);

var root = {
    getExample: ({ size }) => {
        return objects[size]
    }
};
app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root
}));
app.listen(8080);
