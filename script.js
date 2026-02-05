function checkAnswer() {
  const input = document.getElementById("answer").value
    .toLowerCase()
    .trim();

  const message = document.getElementById("message");

  if (!input) {
    message.textContent = "💭 Type something first.";
    return;
  }

  if (input === "min solstrale") {
    message.textContent = "";
    window.location.href = "room2.html";
  } else {
    message.textContent = "❌ Try again, Sunshine ☀️";
  }
}
