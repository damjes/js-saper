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

rozpocznijGre()