import fs from 'fs'

export function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path,'utf-8', (error, datos) => {
            if(error) reject(error)
            else resolve(datos)
        })
    })
}

export function writeFilePromise(path, datos) {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, datos, error => {
            if(error) reject(error)
            else resolve()
        })
    })
}

export default async function readAndWriteFileAsyncPromises(path){
    try {
        let lectura = await readFilePromise(path)

        let info = {
            contenidoStr: JSON.stringify(lectura, null, '\t'),
            contenidoObj: lectura,
            size: fs.statSync(path).size
        }
        
        console.log(info)

        await writeFilePromise('./info.txt', JSON.stringify(info))

    } catch (error) {
        console.log(`Error en operacion asincronica con promesas (async/await): ${error.message}`)
    }
}
