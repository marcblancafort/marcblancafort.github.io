anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  const
	rainContainer = document.querySelector(".rain-container"),
  // background Colors for the raindrop
  //bgColors = ["aqua", "red", "limegreen", "white", "yellow"];
  bgColors = ["grey"]
for (let amount = 200; amount--; ) {
	let distance = Math.random();
  Object.assign(rainContainer.appendChild(document.createElement("i")).style, {
    width: distance * 5 + "px",
    left: Math.floor(Math.random() * 105 - 2.5) + "%",
    animationDelay: Math.random() * -20 + "s",
    animationDuration: distance * 5 + "s",
    background:
      "linear-gradient(transparent, " +
      bgColors[Math.floor(Math.random() * bgColors.length)] +
      ")",
    opacity: distance * 0.8 + 0.2
  });
}

