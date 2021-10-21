var stan
var liczbaKolumn
var liczbaWierszy
var liczbaMin

function rozpocznijGre() {
	wiersze = 15
	kolumny = 20
	miny = 10
	generujPlansze(wiersze, kolumny, miny)
	stan = 'gra'
	liczbaKolumn = kolumny
	liczbaWierszy = wiersze
	liczbaMin = miny
}

function sprawdzWygranko() {
	// TODO: WTF, poprawić
	if(liczbaMin === 0) {
		stan = 'wygranko'
	}
}

function sprawdzPole(x, y) {
	let miny = 0
	const delta = [-1, 0, 1]

	delta.forEach((dx) => {
		let nowex = x+dx
		if(nowex >= 0 && nowex < liczbaKolumn) {
			delta.forEach((dy) => {
				let nowey = y+dy
				if(nowey >= 0 && nowey < liczbaWierszy) {
					let pole = tablica[nowey][nowex]
					if(pole == 'mina' || pole == 'minaflaga') {
						miny++
					}
				}
			})
		}
	})

	return miny
}

function zdarzenie(e, x, y) {
	if(stan == 'gra') {
		pole = tablica[y][x]

		if(e.button == 0) {
			//lewy przycisk
			switch(pole) {
				case 'mina':
					odkryjPole(x, y, 'wybuch')	
					przegraj()
					break
				case 'puste':
					odkrywajPola(x, y)
			}
		} else if(e.button == 2) {
			//prawy przycisk
		}
	}
}

function przegraj() {
	stan = 'przegranko'
	window.alert('Przegrałeś w grę')
}

function odkrywajPola(x, y) {
	console.log(x, y)
	if(x < 0 || x >= liczbaKolumn) {
		return
	}
	if(y < 0 || y >= liczbaWierszy) {
		return
	}
	if(tablica[y][x] == 'odkryte') {
		return
	}
	let ile = sprawdzPole(x, y)
	tablica[y][x] = 'odkryte'
	if(ile == 0) {
		//odkrywaj rekurencyjnie
		odkryjPole(x, y, 'puste')
		
		const delta = [-1, 0, 1]

		delta.forEach((dx) =>
			delta.forEach((dy) => 
				odkrywajPola(x+dx, y+dy)
			)
		)
	} else {
		odkryjPole(x, y, ile)
	}
}

rozpocznijGre()