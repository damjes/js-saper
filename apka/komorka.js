const plansza = document.getElementById('plansza')

function dajSpan(symbol) {
	if (symbol == 'mina') {
		return '<span class="iconify" data-icon="mdi:mine"></span>'
	} else if (symbol == 'flaga') {
		return '<span class="iconify" data-icon="dashicons:flag"></span>'
	} else {
		return ''
	}
}

function odkryjPole(x, y, co) {
	const pole = plansza.children[y].children[x]
	if (Number.isInteger(co)) {
		// liczba, to liczba min naokoło
		pole.innerHTML = co
		pole.classList = 'n' + co
	} else {
		switch (co) {
			case 'wybuch':
				pole.classList = 'wybuch'
				pole.innerHTML = dajSpan('mina')
				break;
			case 'mina':
				pole.classList = 'mina'
				pole.innerHTML = dajSpan('mina')
				break;
			case 'flaga':
				pole.classList = 'flaga'
				pole.innerHTML = dajSpan('flaga')
				break;
		}
	}
}

function generujPola(wiersze, kolumny) {
	plansza.innerHTML = ''
	for(let y=0; y<wiersze; y++) {
		let wiersz = document.createElement('tr')
		plansza.appendChild(wiersz)
		for(let x=0; x<kolumny; x++) {
			let komorka = document.createElement('td')
			komorka.classList = 'zakryte'
			komorka.onmouseup = (e) => zdarzenie(e, x, y)
			wiersz.appendChild(komorka)
		}
	}
}

function zdarzenie(e, x, y) {
	window.alert(sprawdzPole(x, y))
}