const fs = require('fs/promises');
const convert = require('heic-convert');

(async () => {
    const vhodnaDatoteka = await fs.readFile('./vhodnaDatoteka.heic');

    const convertSettings = {
        buffer: vhodnaDatoteka, // the HEIC file buffer
        format: 'JPEG',         // output format
        quality: 1              // the jpeg compression quality, between 0 and 1
    };

    const izhodniBuffer = await convert(convertSettings);

    fs.writeFile('./izhodnaDatoteka.jpg', izhodniBuffer);
})();