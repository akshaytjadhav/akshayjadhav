// Simple scripted FAQ bubble — no AI, just pre-written answers. Swap in a real
// AI-backed widget later once you have a backend for it.
(function () {
  var faqs = [
    { q: "What services do you offer?", a: "Career guidance, 1:1 mentoring, resume & interview prep, and college talks. See the Services page for details." },
    { q: "How do I book a 1:1 session?", a: "Head to the 'Book a Session' page and message on WhatsApp or email — I'll confirm a slot within a day." },
    { q: "Is the guidance content free?", a: "Yes, everything in the Guidance Library is free to read. Paid sessions are only for 1:1 mentoring." },
    { q: "Do you work with colleges/institutions?", a: "Yes — talks, workshops, and placement-prep sessions for institutions can be arranged. Use the Contact page." }
  ];

  var bubble = document.createElement("button");
  bubble.id = "faq-bubble";
  bubble.setAttribute("aria-label", "Open quick questions");
  bubble.textContent = "?";

  var panel = document.createElement("div");
  panel.id = "faq-panel";
  var html = "<h4>Quick questions</h4>";
  faqs.forEach(function (item, i) {
    html += '<button class="faq-q" data-i="' + i + '">' + item.q + "</button>";
    html += '<div class="faq-a" id="faq-a-' + i + '">' + item.a + "</div>";
  });
  panel.innerHTML = html;

  document.body.appendChild(bubble);
  document.body.appendChild(panel);

  bubble.addEventListener("click", function () {
    panel.classList.toggle("open");
  });

  panel.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var i = btn.getAttribute("data-i");
      var ans = document.getElementById("faq-a-" + i);
      ans.classList.toggle("open");
    });
  });
})();
