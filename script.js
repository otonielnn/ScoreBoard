// ScoreBoard
const hscore = document.querySelector(".h-score");
const gscore = document.querySelector(".g-score");
const hbtn1 = document.querySelector(".hbtn1");
const hbtn2 = document.querySelector(".hbtn2");
const hbtn3 = document.querySelector(".hbtn3");
const gbtn1 = document.querySelector(".gbtn1");
const gbtn2 = document.querySelector(".gbtn2");
const gbtn3 = document.querySelector(".gbtn3");
const newBtn = document.querySelector(".new-btn");
const endBtn = document.querySelector(".end-btn");
const homeBG = document.querySelector(".home-bg");
const guestBG = document.querySelector(".guest-bg");
const message = document.querySelector(".mess");
const h_btn = document.querySelectorAll(".h-btn");
const g_btn = document.querySelectorAll(".g-btn");
let isalive = true;
let homeScore = 0;
let guestScore = 0;

hbtn1.addEventListener("click", function () {
  if (isalive) {
    homeScore += 1;
    hscore.textContent = homeScore;
  }
});

gbtn1.addEventListener("click", function () {
  if (isalive) {
    guestScore += 1;
    gscore.textContent = guestScore;
  }
});

// Timer

class Timer {
    constructor(root) {
      root.innerHTML = Timer.getHTML();
  
      this.el = {
        minutes: root.querySelector(".timer__part--minutes"),
        seconds: root.querySelector(".timer__part--seconds"),
        control: root.querySelector(".timer__btn--control"),
      };
  
      this.interval = null;
      this.remainingSeconds = 5 * 60;
      this.updateInterfaceTime();
  
      this.el.control.addEventListener("click", () => {
        if (this.interval === null) {
          this.start();
        } else {
          this.stop();
        }
      });
    }
  
    updateInterfaceTime() {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;
  
      this.el.minutes.textContent = minutes.toString().padStart(2, "0");
      this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }
  
    updateInterfaceControls() {
      if (this.interval === null) {
        this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
        this.el.control.classList.add("timer__btn--start");
        this.el.control.classList.remove("timer__btn--stop");
      } else {
        this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
        this.el.control.classList.add("timer__btn--stop");
        this.el.control.classList.remove("timer__btn--start");
      }
    }
  
    start() {
      if (this.remainingSeconds === 0) return;
  
      this.interval = setInterval(() => {
        this.remainingSeconds--;
        this.updateInterfaceTime();
  
        if (this.remainingSeconds === 0) {
          this.stop();
        }
      }, 1000);
  
      this.updateInterfaceControls();
    }
  
    stop() {
      clearInterval(this.interval);
  
      this.interval = null;
  
      this.updateInterfaceControls();
    }
  
    static getHTML() {
      return `
              <span class="timer__part timer__part--minutes">00</span>
              <span class="timer__part">:</span>
              <span class="timer__part timer__part--seconds">00</span>
              <button type="button" class="timer__btn timer__btn--control timer__btn--start">
                  <span class="material-icons">play_arrow</span>
          `;
    }
  }
  
  new Timer(
      document.querySelector(".timer")
  );
