const signupFormHandler = async function (event) {
  event.preventDefault();

  const nameInput = document.querySelector("#user-name-input-signup");
  const passInput = document.querySelector("#user-pass-input-signup");

  try {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        username: nameInput.value,
        password: passInput.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to sign up");
    }
  } catch (err) {
    console.log(err);
  }
};

document
  .querySelector("#signup-btn")
  .addEventListener("click", signupFormHandler);
