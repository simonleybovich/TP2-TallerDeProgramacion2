import fs from 'fs'

export default function readAndWriteFileAsycnCallback(path){
    try {
        console.log('Inicio del programa Asincronico con callbacks')
        fs.readFile(path, 'utf-8', (error, datos) => {
            if(error) throw Error(`Error en lectura asincronica con callbacks: ${error.message}`)
    
            let info = {
                contenidoStr: JSON.stringify(datos, null, '\t'),
                contenidoObj: datos,
                size: fs.statSync(path).size
            }
    
            console.log(info)
    
            fs.appendFile('./info.txt', JSON.stringify(info), error => {
                if(error) throw Error(`Error en escritura asincronica con callbacks: ${error.message}`)    
            })
        })
        console.log('Fin del programa Asincronico con callbacks')
    } catch (error) {
        console.log(`Error en operacion asincronica con callbacks: ${error.message}`)
    }
}