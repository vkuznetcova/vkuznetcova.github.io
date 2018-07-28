let chooseBtn = document.getElementById('choose'),
		receiveBtn = document.getElementById('receive'),
		nameInput = document.getElementsByClassName('contactform_name')[0],
		modal = document.querySelector('.modal'),
		close = document.querySelector('.close'),
		text = document.getElementsByName('message')[0],
		overlay = document.getElementsByClassName('overlay')[0];

function toBlock(elem) {
	elem.style.display = 'block';
}
function toNone(elem) {
	elem.style.display = 'none';
}

receiveBtn.addEventListener('click', function() {
	toBlock(modal);
	toBlock(overlay);
});	

close.addEventListener('click', function() {
	toNone(modal);
	toNone(overlay);
});
overlay.addEventListener('click', function() {
	toNone(this);
	toNone(modal);
});

// receiveBtn.addEventListener('click', function() {
// 	modal.style.display = 'block';
// 	overlay.style.display = 'block';
// });	

// close.addEventListener('click', function() {
// 	modal.style.display = 'none';
// 	overlay.style.display = 'none';
// });
// overlay.addEventListener('click', function() {
// 	this.style.display = 'none';
// 	modal.style.display = 'none';
// });

nameInput.addEventListener('input', function() {
		if (this.value) {
			text.value = 'Меня зовут ' + nameInput.value + '. И я хочу спросить:'
		} else {
			text.value = ''
		}
});