const head = document.querySelector("h1")
let text = head.textContent
head.innerHTML = ""

const chars = text.split("").map(char => {
  let span = document.createElement("span")
  span.textContent = char === " " ? "\u00A0" : char
  span.style.display = "inline-block"
  head.appendChild(span)
  return span
})

anime({
  targets: chars,
  translateY: [
    { value: '-2.75rem', easing: 'easeOutExpo', duration: 600 },
    { value: 0, easing: 'easeOutBounce', duration: 800, delay: 100 }
  ],
  rotate: {
      value: '-1turn',
  },
  delay: anime.stagger(100),
  easing: "easeInOutCirc",
  loopDelay: 1000,
  loop: true
})
