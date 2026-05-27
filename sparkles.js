document.addEventListener("click", function(e) {

  for(let i = 0; i < 12; i++) {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";

    // dirección aleatoria
    const x = (Math.random() - 0.5) * 120;
    const y = (Math.random() - 0.5) * 120;

    sparkle.style.setProperty("--x", x + "px");
    sparkle.style.setProperty("--y", y + "px");

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 2000);

  }

});