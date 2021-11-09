const blogId = document.querySelector("#blog-id").value;

const editFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector("#blog-title").value;
  const body = document.querySelector("#blog-body").value;
  await fetch(`/api/blog/${blogId}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
 m
  document.location.replace("/dashboard");
};

const deleteClickHandler = async function () {
  console.log("click!");
  await fetch(`/api/blog/${blogId}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};

document
  .querySelector("#edit-blog-form")
  .addEventListener("submit", editFormHandler);
document
  .querySelector("#delete-btn")
  .addEventListener("click", deleteClickHandler);
