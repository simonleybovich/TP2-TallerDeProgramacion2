import fs from 'fs'

export default function readAndWriteFileSync(path){
    console.log('Inicio del programa Sincronico')
    try {
        const lectura = fs.readFileSync(path, 'utf-8')
        
        let info = {
            contenidoStr: lectura,
            contenidoObj: JSON.parse(lectura),
            size: fs.statSync(path).size
        }

        console.log(info)

        fs.appendFileSync('./info.txt', JSON.stringify(info, null, '\t'))
        
        console.log('Fin del programa Sincronico')

    } catch (error) {
        console.log(`Error en operacion sincronica: ${error.message}`)
    }
}