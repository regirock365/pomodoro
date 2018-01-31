// const DOM = {
//   session: document.getElementById("session-length"),
//   rest: document.getElementById("rest-length"),
//   circle: document.getElementById("circle"),
//   timeLeft: document.getElementById("time-left"),
// }
//
// let session = 25
// let rest = 5
// let endTime, interval, inSession = true
//
// DOM.session.addEventListener("change", () => {
//   session = DOM.session.value
//   console.log(session)
// })
// DOM.rest.addEventListener("change", () => {
//   rest = DOM.rest.value
//   console.log(rest)
// })
//
// DOM.circle.addEventListener("click", () => {
//   // clear any previous interval
//   clearInterval(interval)
//
//   // toggle the session type & determine the session being currently used
//   inSession = !inSession
//   const sessionInUse = (inSession ? rest : session)
//
//   endTime = Date.now() + 1000 * 60 * sessionInUse
//
//   intervalFunction()
//   interval = setInterval(intervalFunction, 1000)
// })
//
// // function to check the time remaining at set intervals
// const intervalFunction = () => {
//   const timeRemaining = Math.round((endTime - Date.now()) / 1000)
//   const minutesRemaining = Math.floor(timeRemaining / 60)
//   const secondsRemaining = timeRemaining % 60
//   console.log(minutesRemaining, secondsRemaining)
//   if (Date.now() > endTime) {
//     alert("you are finished")
//     clearInterval(interval)
//   }
// }
