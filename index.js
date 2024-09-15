const path = "./package.json";

// sync
import readAndWriteFileSync from "./Lectura y Escritura/ms.js";
readAndWriteFileSync(path);

// async with callbacks
import readAndWriteFileAsycnCallback from "./Lectura y Escritura/mac.js";
readAndWriteFileAsycnCallback(path);

// async with promise (then/catch)
import readFileAsyncPromises1 from "./Lectura y Escritura/maptc.js";
readFileAsyncPromises1(path);

// async with promise (async/await)
import readAndWriteFileAsyncPromises2 from "./Lectura y Escritura/mapaa.js";
await readAndWriteFileAsyncPromises2(path);
