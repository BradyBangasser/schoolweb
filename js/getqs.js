const correctlinks = ["https://cfriendly.com", "https://tooktwice.click/test/correct", "https://bradyinnovation.com"]
const incorrectlinks = ["http://bradyincorporated.com", "http://dailyperformancelog.com", "https://notarickroll.com"] 
const ranlinkcor = correctlinks[Math.floor(Math.random() * correctlinks.length)]
const ranlinkinc = incorrectlinks[Math.floor(Math.random() * incorrectlinks.length)]
const doAnother = document.getElementById('testbutt')
const nopressother = document.getElementById('testbutt2')
const ran = [doAnother, nopressother]
const corlnikchoice = ran[Math.floor(Math.random() * ran.length)]
if (corlnikchoice === doAnother) {
    doAnother.setAttribute('href', ranlinkcor)
    nopressother.setAttribute('href', ranlinkinc)
} else {
    nopressother.setAttribute('href', ranlinkcor)
    doAnother.setAttribute('href', ranlinkinc)

}