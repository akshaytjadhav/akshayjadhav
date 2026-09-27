// Rotates a quote based on the day of the year — same quote all day, changes daily.
(function () {
  var quotes = [
    "Discipline is choosing what you want most over what you want now.",
    "You don't need a perfect plan. You need a next step.",
    "Every expert was once a beginner who didn't quit on a bad day.",
    "Small, boring, daily effort beats occasional bursts of motivation.",
    "Your career is a long game — stop making decisions like it's a sprint.",
    "Confidence is built in the practice room, not the interview room.",
    "The best time to start was a year ago. The second best time is today.",
    "You are not behind. You are on your own timeline.",
    "Skills compound. Show up even when it feels slow.",
    "Ask for feedback more than you ask for approval."
  ];
  var dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  var quote = quotes[dayOfYear % quotes.length];
  var el = document.getElementById("daily-quote");
  if (el) { el.textContent = quote; }
})();
