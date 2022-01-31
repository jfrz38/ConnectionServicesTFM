const axios = require('axios').default;
const { performance } = require('perf_hooks');
const sizes = require('../ObjectsCreation').sizes

doCalls()

async function doCalls(){
    const size = sizes[0]
    const query = {
        query: `{
            getExample(size:${sizes[0]}){
              message,
              array
            }
          }`
    }
    const start = performance.now()
    const response = await axios.post(`http://localhost:8080/${size}`,query)
    const end = performance.now()
    console.log("Time = ", end - start)
    
}

/*

db.collection.aggregate([
  {
    "$project": {
      "_id": 0,
      "result": {
        "$avg": "$key"
      },
      "total": {
        "$size": "$key"
      }
    }
  }
])

*/
