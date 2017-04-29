const sessionLengthInput = document.getElementById("session-length")
const breakLengthInput = document.getElementById("break-length")
const circle = document.getElementById("circle")

let sessionLength = 25
let breakLength = 5
let endTime, interval, session = true

sessionLengthInput.addEventListener("change", () => {
  sessionLength = sessionLengthInput.value
  console.log(sessionLength)
})
breakLengthInput.addEventListener("change", () => {
  breakLength = breakLengthInput.value
  console.log(breakLength)
})

circle.addEventListener("click", () => {
  session = !session
  const sessionInUse = (session ? breakLength : sessionLength)
  endTime = Date.now() + 1000 * 60 * sessionInUse
  interval = setInterval(function () {
    console.log(endTime - Date.now())
    if (Date.now() > endTime) {
      alert("you are finished")
      clearInterval(interval)
    }
  }, 1000)
})
