import fs from "fs";
import readFilePromise from "./mapaa.js";
import writeFilePromise from "./mapaa.js";

export default function readAndWriteFileAsyncPromises(path) {
  readFilePromise(path)
    .then((lectura) => {
      let info = {
        contenidoStr: lectura,
        contenidoObj: JSON.parse(lectura),
        size: fs.statSync(path).size,
      };

      console.log(info);

      writeFilePromise("./info.txt", JSON.stringify(info));
    })
    .catch((error) => {
      console.log(`Error en operacion asincronica con promesas (then/catch): ${error.message}`);
    });
}
