const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
	start: [12800],
	step: 100,
	connect: true,
	range: {
		'min': [ 1500 ],
		'max': [ 20000 ]
	} 
});

	const input0 = document.getElementById('input-0');
	const inputs = [input0];

	rangeSlider.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});

	// const btnMinus = document.getElementById('minus');
	// const btnPlus = document.getElementById('plus');
}
	

