const newBlogHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;

  await fetch(`/api/blog`, {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { "Content-Type": "application/json" },
  })
  console.log("========================testing the dashboard location replace");
  document.location.replace("/dashboard");
};

document
  .querySelector("#new-blog-form")
  .addEventListener("submit", newBlogHandler);
