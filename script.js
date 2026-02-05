<script>
  function checkAnswer() {
    const input = document.getElementById("answer").value
      .toLowerCase()
      .trim();

    const message = document.getElementById("message");
    const form = document.getElementById("valentineForm");
    const result = document.getElementById("result");
    const redirect = document.getElementById("redirect");

    if (!input) {
      message.textContent = "💭 Type something first.";
      return;
    }

    if (input === "min solstrale") {
      result.value = "Correct";
      redirect.value = "room2.html";
      message.textContent = "✈️ Boarding complete…";
      form.submit();
    } else {
      result.value = "Wrong: " + input;
      redirect.value = window.location.href;
      message.textContent = "❌ Try again, Sunshine ☀️";
      form.submit();
    }
  }
</script>
