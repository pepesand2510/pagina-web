for (let i = 0; i < 25; i++) {

  const particula = document.createElement("div");

  particula.className = "particula";

  // posición aleatoria
  particula.style.left = Math.random() * window.innerWidth + "px";

  // tamaño aleatorio
  const size = Math.random() * 10 + 5;
  particula.style.width = size + "px";
  particula.style.height = size + "px";

  // duración aleatoria
  particula.style.animationDuration =
    (Math.random() * 10 + 8) + "s";

  // retraso
  particula.style.animationDelay =
    Math.random() * 5 + "s";

  document.body.appendChild(particula);
}