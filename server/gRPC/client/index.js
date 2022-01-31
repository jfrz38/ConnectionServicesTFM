const { performance } = require('perf_hooks');
const client = require('./client')
const objectsCreation = require('../../ObjectsCreation')
const nCallTries = objectsCreation.nCallTries//require('../../ObjectsCreation').nCallTries
const sizes = objectsCreation.sizes//require('../../ObjectsCreation').sizes
//[131072, 262144, 524288, 1048576, 2097152, 5242880, 20971520, /*52428800/*, 104857600*/]
doCalls()
async function doCalls() {

    const times = []
    /*for (const size of sizes) {
        var totalTime = 0
        for (let i = 0; i < nCallTries; i++) {
            const start = performance.now()
            await new Promise((resolve, reject) => {
                client.getExample({ size: size }, (error, response) => {
                    if (error) return reject(error)
                    resolve(response)
                })
            })
            const end = performance.now()
            totalTime += end - start
        }
        times.push({ size: getSize(size), time: totalTime / nCallTries })
    }*/

    //console.log("times in ms = ", times)

    // Prueba unitaria
    const size = sizes[0]//sizes[sizes.length-2]
    const start = performance.now()
    client.getExample({ size: size }, (error, response) => {
        const end = performance.now()
        console.log("Time = ",end - start)
    })
    

}

function getSize(size){
    return {
        B: size,
        kB: size /1024,
        MB: size / 1024 / 1024
    }
}

