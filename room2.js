function checkAnswer(correctAnswer, nextRoom) {
  const inputField = document.getElementById("answer");
  const message = document.getElementById("message");
  const form = document.getElementById("valentineForm");
  const resultField = document.getElementById("result");

  const input = inputField.value.toLowerCase().trim();
  if (!input) {
    message.textContent = "💭 Type something first.";
    return;
  }

  // Set result for logging
  if (input === correctAnswer.toLowerCase()) {
    resultField.value = "Correct";
    message.textContent = "✅ Smooth skies ahead… ✈️";
  } else {
    resultField.value = "Wrong: " + input;
    message.textContent = "❌ Turbulence… try again!";
  }

  // Build FormData and send to Formspree
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
    .then(response => {
      if (response.ok && input === correctAnswer.toLowerCase()) {
        // Only redirect if correct
        window.location.href = nextRoom;
      }
    })
    .catch(error => {
      console.error("Formspree submission failed:", error);
    });
}
