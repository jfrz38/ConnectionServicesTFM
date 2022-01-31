//const sizes = [131072, 262144, 524288, 1048576, 2097152, 5242880, 20971520/*, 52428800, 104857600*/]

class CreateObjects{

    sizes = [20971520]//[52428800, 104857600]//[131072, 262144, 524288, 1048576, 2097152, 5242880, 20971520/*, 52428800, 104857600*/]
    objects = {}
    nCallTries = 10

    constructor(){
        //this.createObjects()
    }

    get sizes(){
        return this.sizes
    }

    get objects(){
        return this.objects
    }

    get nCallTries(){
        return this.nCallTries
    }

    createObjects() {
        var object = this.createInitialObject()
        const initialSize = Buffer.byteLength(JSON.stringify(object))
        this.sizes.forEach(size => {
            let newObject = this.createInitialObject()
            const iterations = Math.floor((size-initialSize)/2,1)+1
            for(let i = 0; i < iterations; i++){
                newObject.array.push("aa")
            }
            newObject.array = newObject.array.join("")
            const realSize = Buffer.byteLength(JSON.stringify(newObject))
            console.log(`Size should be ${size} and size is ${realSize}B = ${realSize/1024}kB = ${(realSize/1024)/1024}MB`)
            this.objects[size] = newObject
            //arrayObject.push({size:size,value:newObject})
        })
    }

    createInitialObject(){
        return {
            message: "Hola mundo",
            array:[]
        }
    }
}

/*
function createObjects() {
    var objects = {}
    var object = createInitialObject()
    const initialSize = Buffer.byteLength(JSON.stringify(object))
    sizes.forEach(size => {
        let newObject = createInitialObject()
        const iterations = Math.floor((size-initialSize)/2,1)+1
        for(let i = 0; i < iterations; i++){
            newObject.array.push(1)
        }
        const realSize = Buffer.byteLength(JSON.stringify(newObject))
        //console.log(`Size should be ${size} and size is ${realSize}B = ${realSize/1024}kB = ${(realSize/1024)/1024}MB`)
        objects[size] = newObject
        //arrayObject.push({size:size,value:newObject})
    })
    return objects
    //doCalls(arrayObject)
}

function createInitialObject(){
    return {
        message: "Hola mundo",
        array:[]
    }
}

function doCalls(arrayObject){
    var results = []
    arrayObject.forEach(obj => {
        var totalTime = 0
        for(let i = 0; i < nCallTries; i++){
            const start = performance.now()
            // call
            const end = performance.now()
            totalTime += end-start
        }
        results.push({size:obj.size, time: totalTime/nCallTries})
    })
    
    console.log("Results = ",results)
    
}

module.exports.createObjects = createObjects;
*/

module.exports = new CreateObjects()
// TODO : Quizás lo he planteado mal; tiene que ser el servidor el que devuelva todas estas cantidades
// TODO : No el cliente el que las pida en un POST (porque de esta manera no se puede probar GraphQL)
// TODO : Los bucles de medir el tiempo deberían estar en el cliente y aquí en el servidor
// TODO : los bucles que crean los objetos, y según el req.params que pidan se devuelve una cantidad
