var tablica

function generujPlansze(wiersze, kolumny, miny) {
    if(miny > wiersze*kolumny) {
        window.alert('za dużo min')
        return
    }
    generujPola(wiersze, kolumny)
    tablica = []
    kandydaci = []
    for(let y = 0; y < wiersze; y++) {
        let wiersz = []
        for(let x = 0; x < kolumny; x++) {
            wiersz.push('puste')
            kandydaci.push({x: x, y: y})
        }
        tablica.push(wiersz)
    }
    ileKandydatow = kandydaci.length
    limitKandydatow = ileKandydatow - miny
    while(ileKandydatow > limitKandydatow) {
        let wylosowanyIndeks = Math.floor(Math.random() * ileKandydatow)
        let mina = kandydaci[wylosowanyIndeks]
        kandydaci.splice(wylosowanyIndeks, 1)
        tablica[mina.y][mina.x] = 'mina'
        odkryjPole(mina.x, mina.y, 'wybuch')
        ileKandydatow--
    }
}