
const Jimp = require('jimp');
const path = require('path');

const inputPath = 'C:/Users/dhaga/.gemini/antigravity/brain/9514a663-16a6-4537-890f-471e67a57e0c/uploaded_image_1766909001135.png';
const outputPath = path.join(__dirname, 'public', 'logo.png');

async function processLogo() {
    try {
        console.log(`Reading image from: ${inputPath}`);
        const image = await Jimp.read(inputPath);

        console.log(`Image size: ${image.bitmap.width}x${image.bitmap.height}`);

        // Scan every pixel
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];
            const alpha = this.bitmap.data[idx + 3];

            // If pixel is white (or very close to white), make it transparent
            // Tolerance of 240 to catch compression artifacts
            if (red > 240 && green > 240 && blue > 240) {
                this.bitmap.data[idx + 3] = 0; // Set Alpha to 0
            }
        });

        // Crop whitespace around the logo
        image.autocrop();

        await image.writeAsync(outputPath);
        console.log(`Successfully saved transparent logo to: ${outputPath}`);

    } catch (err) {
        console.error('Error processing image:', err);
    }
}

processLogo();
