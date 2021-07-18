var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql')
require('./model/db')
const controller = require('./controller/map.controller')

var app = express()
app.use('/map', express.static('./build'));

var schema = buildSchema(`
type Query {
  globalData: GlobalData
  countryData (iso: String!): GlobalData
}
type GlobalData{
  region: String
  data: [[String]]
}
`);

// The root provides a resolver function for each API endpoint
var root = {
    globalData: () => {
        return controller.getWorldMap()
    },
    countryData: ({ iso }) => {
        return controller.getRegionMap(iso)
    }
};
app.use('/map', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(6203);
