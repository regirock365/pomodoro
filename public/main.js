/* global Vue */

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

const title = document.querySelector("title")
const audio = new Audio("sna.wav")
let permission = false
Notification.requestPermission().then(r => {
  if (r !== "denied" && r !== "default") {
    permission = true
  }
})

const timer = new Vue({
  el: "#timer",
  data: {
    work: 25,
    rest: 5,
    working: false,
    paused: false,
    minutes: "00",
    seconds: "00",
    interval: null
  },
  computed: {
    endTime: function() {
      const sessionTime = this.working ? this.work : this.rest
      const minute = 1000 * 60
      return Date.now() + minute * sessionTime
    },
    pauseDisplay: function() {
      return this.paused ? "PLAY" : "PAUSE"
    }
  },
  methods: {
    toggleWorking: function() {
      if (!this.paused) {
        this.working = !this.working
        clearInterval(this.interval)
        this.interval = setInterval(this.intervalFunction, 1000)
      } else {
        alert("cannot toggle while paused")
      }
    },
    togglePaused: function() {
      this.paused = !this.paused

      clearInterval(this.interval)
    },
    intervalFunction: function() {
      const timeRemaining = Math.round((this.endTime - Date.now()) / 1000)
      const minutesRemaining = this.formatTime(Math.floor(timeRemaining / 60))
      const secondsRemaining = this.formatTime(timeRemaining % 60)
      this.minutes = minutesRemaining
      this.seconds = secondsRemaining
      title.innerHTML = `${minutesRemaining}:${secondsRemaining}`
      if (Date.now() > this.endTime) {
        audio.play()
        if (permission) {
          new Notification("ç'est finit", {
            body: `Your ${this.working ? "work" : "break"} session is over`
          })
        } else {
          // alert("you are finished")
        }
        clearInterval(this.interval)
        this.toggleWorking()
      }
    },
    formatTime: function(time) {
      if (time < 10) {
        return `0${time}`
      } else {
        return String(time)
      }
    }
  }
})
