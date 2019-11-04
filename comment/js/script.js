window.onload = () => {
	const wrapper = document.querySelector('.wrapper');
	const footer = document.querySelector('.stripFooter');
	const submit = document.querySelector('#submit');
	const reset = document.querySelector('#reset');
	const copy = document.querySelector('#copy');
	const query = document.querySelector("#source");
	const complete = document.querySelector("#complete");
	const popup = () => {
		const div= document.createElement('div');
		div.classList.add('popup');
		div.innerHTML = "Copied!";
		wrapper.appendChild(div)
	};

	footer.addEventListener("click", (e)=>{
		let target = e.target;
		switch (target) {
			case submit:
				let queryValue = query.value;
				complete.value = queryValue.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '');
				break;
			case reset:
				query.value = null;
				complete.value = null;
				break;
			case copy:
				if(!complete.value){
					break;
				}else{
					complete.select();
					document.execCommand("copy");
					popup();
					setTimeout(() => {
						document.querySelector('.popup').remove();
						}, 2000);
					break;
				}
		}
	});
};

