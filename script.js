function checkAnswer() {
  const input = document.getElementById("answer").value.toLowerCase();
  const message = document.getElementById("message");

  if (input === "min solstrale") {
    window.location.href = "room2.html";
  } else {
    message.textContent = "❌ Try again, Sunshine☀️";
  }
}
