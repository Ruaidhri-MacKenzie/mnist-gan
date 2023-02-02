import { setModelStatus, displayGeneratedImage } from "./ui.js";
import { loadModel, generateImage } from "./model.js";

const generateInput = document.getElementById("generate-input");

// Load Model
setModelStatus("loading");
const model = await loadModel("mnist-generator.json");
setModelStatus("ready");

const onGenerateMNIST = (event) => {
	setModelStatus("generating");
	const image = generateImage(model);
	displayGeneratedImage(image);
	setModelStatus("ready");
};

generateInput.addEventListener("click", onGenerateMNIST);
