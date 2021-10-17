var stan
var liczbaKolumn
var liczbaWierszy
var liczbaMin

function rozpocznijGre() {
	wiersze = 10
	kolumny = 10
	miny = 10
	generujPlansze(wiersze, kolumny, miny)
	stan = 'gra'
	liczbaKolumn = kolumny
	liczbaWierszy = wiersze
	liczbaMin = miny
}

function sprawdzWygranko() {
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
					pole = tablica[nowey][nowex]
					if(pole == 'mina' || pole == 'minaflaga') {
						miny++
					}
				}
			})
		}
	})

	return miny
}

rozpocznijGre()