document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form[data-answer]");
  if (!form) return;

  const inputField = form.querySelector("#answer");
  const message = document.getElementById("message");
  const resultField = form.querySelector('[name="result"]');

  const correctAnswer = form.dataset.answer.toLowerCase();
  const nextRoom = form.dataset.next;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userAnswer = inputField.value.toLowerCase().trim();

    if (!userAnswer) {
      message.textContent = "💭 Type something first.";
      return;
    }

    const isCorrect = userAnswer === correctAnswer;
    resultField.value = isCorrect
      ? "Correct"
      : `Wrong: ${userAnswer}`;

    const roomField = form.querySelector('[name="room"]');
if  (roomField && form.dataset.room) {
  roomField.value = form.dataset.room;
}
    
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then(() => {
        if (isCorrect) {
          message.textContent = "✈️ Boarding complete…";
          setTimeout(() => {
            window.location.href = nextRoom;
          }, 700);
        } else {
          message.textContent = "❌ Try again, Sunshine ☀️";
        }
      })
      .catch(() => {
        message.textContent = "⚠️ Signal lost… try again.";
      });
  });
});
