window.addEventListener('DOMContentLoaded', function () {
	
	let products = document.querySelectorAll('.product'),
			buttons = document.getElementsByTagName('button'),
			open = document.getElementsByClassName('open')[0],
			shop = document.getElementsByClassName('shop')[0];

	function createCart() {
			let cart = document.createElement('div'),
					field = document.createElement('div'),
					heading = document.createElement('h2'),
					close = document.createElement('button');

			cart.classList.add('cart');	
			field.classList.add('cart-field');		
			close.classList.add('close');		

			close.textContent = 'Закрыть';
			heading.textContent = 'В шаей корзине: ';

			document.body.appendChild(cart);
			cart.appendChild(heading);	
			cart.appendChild(field);	
			cart.appendChild(close);	
	};		

	createCart();
	let field = document.querySelector('.cart-field'),
			cart = document.querySelector('.cart'),
			close = document.querySelector('.close');

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function() {
			let item = products[i].cloneNode(true),
					btn = item.querySelector('button');

					btn.textContent = 'Убрать';
					field.appendChild(item);
					products[i].remove();

					btn.addEventListener('click' , function() {
						let item1 = item.cloneNode(true);

							btn1 = item1.querySelector('button');
							btn1.textContent = 'Купить';
						shop.appendChild(item1);
						// shop.insertBefore(item1, shop.childNodes[i+1]);
							item.remove();
					});
		});
	}		

	function openCart() {
		cart.style.display = 'block';
	}
		function closeCart() {
		cart.style.display = 'none';
	}

	open.addEventListener('click', openCart);
	close.addEventListener('click', closeCart);








})