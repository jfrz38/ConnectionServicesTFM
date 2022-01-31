const axios = require('axios').default;
const { performance } = require('perf_hooks');
const nCallTries = require('../ObjectsCreation').nCallTries
const sizes = require('../ObjectsCreation').sizes

doCalls()
async function doCalls() {

    const times = []
    /*for (const size of sizes) {
        var totalTime = 0
        for (let i = 0; i < nCallTries; i++) {
            const start = performance.now()
            //const response = await axios.get(`http://localhost:8080/${size}`)
            await new Promise((resolve, reject) => {
                axios.get(`http://localhost:8080/${size}`).then(response => {
                    resolve(response.data)
                });
            })
            //const data = await response.data
            const end = performance.now()
            totalTime += end - start
        }
        times.push({ size: getSize(size), time: totalTime / nCallTries })
    }*/

    //console.log("times in ms = ", times)

    // Prueba unitaria
    const size = sizes[0]
    const start = performance.now()
    const response = await axios.get(`http://localhost:8080/${size}`)
    const realSize = Buffer.byteLength(JSON.stringify(response.data))
    const end = performance.now()
    console.log("Time = ",end - start)


}

function getSize(size){
    return {
        B: size,
        kB: size /1024,
        MB: size / 1024 / 1024
    }
}
