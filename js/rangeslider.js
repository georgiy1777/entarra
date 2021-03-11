const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
	start: [12800],
	step: 100,
	connect: false,
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


	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;
		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSlider(index, e.currentTarget.value);
		});
	});
	
}

const counter = function () {
	const btns = document.querySelectorAll('.rangeslider-slider__btn');

	btns.forEach(btn => {
		btn.addEventListener('click', function () {

			const direction = this.dataset.direction;
			const inp = document.querySelector('.rangeslider-slider__control');
			const currentValue = +inp.value;
			let newValue;

			if (direction === 'plus') {
				newValue = currentValue + 100;
			} else {
				newValue = currentValue - 100 > 0 ? currentValue - 100 : 0;
			}

			inp.value = newValue;

		})
	})

}

counter();


