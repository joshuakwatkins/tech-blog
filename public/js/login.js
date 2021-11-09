const loginFormHandler = async function (event) {
  event.preventDefault();

  const nameInput = document.querySelector("#user-name-input-login");
  const passInput = document.querySelector("#user-pass-input-login");

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      name: nameInput.value,
      password: passInput.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to login");
  }
};

document
  .querySelector("#login-inputs")
  .addEventListener("submit", loginFormHandler);
