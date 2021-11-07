const cdh = document.getElementById('cd')
var cdt = 10
function getRanLink() {
    const links = ["https://www.youtube.com/watch?v=jM5AYgKpKg0", "https://www.youtube.com/watch?v=lOfZLb33uCg", "https://www.youtube.com/watch?v=ql3Wi2qrAEM", "https://www.youtube.com/watch?v=nrsnN23tmUA", "https://www.youtube.com/watch?v=BhiPp4Oe_FA", "https://www.youtube.com/watch?v=LPOlk22eftg"]
    const randomNumber = Math.floor(Math.random() * 100)
    if (randomNumber >= 75) {
        return "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    } else {
        return links[Math.floor(Math.random() * links.length)]
    }
}
setInterval(function() {
    if (cdt <= 0) {
        window.location.href = getRanLink()
    } else {
        cdt-=1;
        cdh.innerHTML = String(cdt)
    }
}, 1000)