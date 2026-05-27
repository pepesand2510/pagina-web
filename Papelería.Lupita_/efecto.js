document.addEventListener("mousemove", (e) => {

  const pincelada = document.createElement("div");

  pincelada.className = "pincelada";

  // posición del mouse
  pincelada.style.left = e.clientX - 6 + "px";
  pincelada.style.top = e.clientY - 6 + "px";

  document.body.appendChild(pincelada);

  setTimeout(() => {
    pincelada.remove();
  }, 800);

});