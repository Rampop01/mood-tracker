"use strict";
const dailyDate = document.querySelector(".everyDayDate");
const userNote = document.forms[".userNote"];
const noteInput = document.querySelector(".todayNoteInput");
const inputSubmit = document.querySelector(".inputSubmit");
const dailyMood = document.querySelector(".dailyMood");
const dailyMoodAppend = document.querySelector(".dailyMoodAppend");

// daily date--------------
const now = new Date();
const day = now.getDate();
const month = now.toLocaleString("default", { month: "long" });
const year = now.getFullYear();

dailyDate.innerHTML = `${day}th ${month} ${year}`;

// quote of the day---------------

// inputSubmit.addEventListener("click", function () {
//   todayNoteInput.innerHTML = set.userNote;
// });

// daily mood---------

function excitedButton() {
  document.getElementById("excitedCount").innerHTML++;
}

function veryHappyButton() {
  document.getElementById("anxiousCount").innerHTML++;
}

function happyButton() {
  document.getElementById("happyCount").innerHTML++;
}

function chillButton() {
  document.getElementById("chillCount").innerHTML++;
}
function neutralButton() {
  document.getElementById("neutralCount").innerHTML++;
}
function sadButton() {
  document.getElementById("sadCount").innerHTML++;
}
function anxiousButton() {
  document.getElementById("anxiousCount").innerHTML++;
}
function angryButton() {
  document.getElementById("angryCount").innerHTML++;
}
function stressedButton() {
  document.getElementById("stressedCount").innerHTML++;
}

// quote of the day---------------

// user safe place for mood---------
function addItem(e) {
  e.preventDefault();
  let userInput = document.getElementById("mood").value;
  document.querySelector(".todayNoteInput").innerText += userInput;
}

// Statistic of mood----------------->

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["mon", "tue", "wed", "thurs", "fri", "sat", "sun"],
    datasets: [
      {
        label: "Recent Week Overview",
        data: [6, 8, 10, 10, 4, 9, 9],
        backgroundColor: "#DCAE96",
        // fill: true,
        borderColor: ["black"],
        borderWidth: 1,
        pointBackgroundColor: "white",
      },
    ],
  },
  options: {
    aspectRatio: 2.5,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          borderColor: "black",
        },
      },
      y: {
        // beginAtZero: true,
        ticks: {
          callback: function (value, index, values) {
            const emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "🙂"];
            return emojis[index];
          },
        },
        grid: {
          borderColor: "black",
        },
      },
    },
  },
});