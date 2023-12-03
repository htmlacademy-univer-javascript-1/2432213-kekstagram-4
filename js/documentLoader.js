document.addEventListener("DOMContentLoaded", function () {
  const commentsList = document.querySelector(".comments-list");
  const commentsShownCountElement = document.querySelector(".comments-shown-count");
  const totalCommentsCountElement = document.querySelector(".total-comments-count");
  const commentsLoader = document.querySelector(".comments-loader");

  const commentsData = [
    "Комментарий 1",
    "Комментарий 2",
    "Комментарий 3",
  ];

  const batchSize = 5;
  let currentIndex = 0;

  function showComments(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
      const commentElement = document.createElement("div");
      commentElement.classList.add("comment");
      commentElement.textContent = commentsData[i];
      commentsList.appendChild(commentElement);
    }
  }

  function loadMoreComments() {
    const nextIndex = currentIndex + batchSize;
    showComments(currentIndex, nextIndex);
    currentIndex = nextIndex;

    commentsShownCountElement.textContent = currentIndex;

    if (currentIndex >= commentsData.length) {
      commentsLoader.style.display = "none";
    }
  }

  totalCommentsCountElement.textContent = commentsData.length;
  loadMoreComments();

  commentsLoader.addEventListener("click", function () {
    commentsLoader.classList.add("loading");

    setTimeout(function () {
      loadMoreComments();
      commentsLoader.classList.remove("loading");
    }, 1000);
  });
});
