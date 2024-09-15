import fs from 'fs'

export function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path,'utf-8', (error, lectura) => {
            if(error) reject(error)
            else resolve(lectura)
        })
    })
}

export function writeFilePromise(path, lectura) {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, lectura, error => {
            if(error) reject(error)
            else resolve()
        })
    })
}

export default async function readAndWriteFileAsyncPromises(path){
    try {
        let lectura = await readFilePromise(path)

        let info = {
            contenidoStr: lectura,
            contenidoObj: JSON.parse(lectura),
            size: fs.statSync(path).size
        }
        
        console.log(info)

        await writeFilePromise('./info.txt', JSON.stringify(info))

    } catch (error) {
        console.log(`Error en operacion asincronica con promesas (async/await): ${error.message}`)
    }
}
