function checkAnswer() {
  const form = document.querySelector("form[data-answer]");
  const inputField = form.querySelector("#answer");
  const message = document.getElementById("message");
  const resultField = form.querySelector("#result");

  const userAnswer = inputField.value.toLowerCase().trim();
  const correctAnswer = form.dataset.answer.toLowerCase();
  const nextRoom = form.dataset.next;

  if (!userAnswer) {
    message.textContent = "💭 Type something first.";
    return;
  }

  const isCorrect = userAnswer === correctAnswer;
  resultField.value = isCorrect ? "Correct" : "Wrong: " + userAnswer;

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { "Accept": "application/json" }
  })
    .then(() => {
      if (isCorrect) {
        message.textContent = "✈️ Boarding complete…";
        window.location.href = nextRoom;
      } else {
        message.textContent = "❌ Try again, Sunshine ☀️";
      }
    })
    .catch(() => {
      message.textContent = "⚠️ Signal lost… try again.";
    });
}
