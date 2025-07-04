function ReproducirHOME() {
  const audio = document.getElementById("HOME");
  const boton = document.querySelector(".HOME");

  if (audio.paused) {
    audio.play();
    boton.textContent = "⏸️ Pausar";
  } else {
    audio.pause();
    boton.textContent = "▶️ HOME";
  }
}
