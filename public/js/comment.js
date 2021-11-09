const commentFormHandler = async function (event) {
  event.preventDefault();
  console.log("clicked!");

  const blog_id = document.querySelector("#blog-id").value;
  const body = document.querySelector("#comment-body").value;

  if (body) {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        blog_id,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.reload();
  }
};

document
  .querySelector("#submit-btn")
  .addEventListener("click", commentFormHandler);
