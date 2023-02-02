const modelStatus = document.getElementById("model-status");
const generateDisplay = document.getElementById("generate-display");

export const setModelStatus = (status) => {
	modelStatus.innerText = `Model Status: ${status}`;
};

export const displayGeneratedImage = async (image) => {
	image = image.reshape([image.shape[1], image.shape[2], image.shape[3]]);
	await tf.browser.toPixels(image, generateDisplay);
};
