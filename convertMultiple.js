const fs = require('fs/promises');
const convert = require('heic-convert');

(async () => {
    const vseDatotekeVMapi = await fs.readdir('./originals');

    const samoHeicDatotekeVMapi = vseDatotekeVMapi.filter((fileName) => {
        return fileName.endsWith('.heic');
    });

    for (let datoteka of samoHeicDatotekeVMapi) {
        const inputBuffer = await fs.readFile('./originals/' + datoteka);

        const outputBuffer = await convert({
            buffer: inputBuffer,
            format: 'JPEG',
            quality: 1
        });

        await fs.writeFile('./converted/' + datoteka + '.jpg', outputBuffer);
        console.log('datoteka je bila pretvorjena: ', datoteka + '.jpg');
    }
})();