export const loadModel = async (filename) => {
	const model = await tf.loadLayersModel(`./model/${filename}`);
	model.summary();
	return model;
};

export const generateImage = (model) => {
	return tf.tidy(() => {
		const xs = tf.randomNormal([1, 100]);
		const generatedImage = model.predict(xs);
		return generatedImage;
	});
};
