export class ProgressBar {
	constructor() {
		const progress = document.querySelectorAll(".skills .progress-done");
		for(let item of progress) {
			setTimeout(() => {
				item.style.opacity = 1;
				item.style.width = item.getAttribute('data-done') + "%";
			}, 500)
		}	
	}
}
