const video = document.getElementById("video")
const progreso = document.getElementById("progreso")
const tiempo = document.getElementById("tiempo")
const volumen = document.getElementById("volumen")

function reproducirPausar(){
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function retrasar() {
    video.currentTime -= 10;
}

function adelantar() {
    video.currentTime += 10;
}

video.addEventListener("timeupdate", () => {

    let porcentaje = (video.currentTime / video.duration) * 100
    progreso.value = porcentaje

    progreso.style.setProperty(
        "--progreso",
        porcentaje + "%"
    )

    actualizarTiempo()
})

function actualizarTiempo(){
    tiempo.textContent =
        formatoTiempo(video.currentTime) + "/" +
        formatoTiempo(video.duration)
}

function formatoTiempo(segundos){

    let minutos = Math.floor(segundos / 60)
    let secs = Math.floor(segundos % 60)
    
    if (secs < 10) {
        secs = "0" + secs
    }
    return minutos + ":" + secs
}

