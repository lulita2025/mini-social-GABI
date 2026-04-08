document.addEventListener("DOMContentLoaded", function() {

const likeBtn = document.querySelector(".likeBtn");
const dislikeBtn = document.querySelector(".dislikeBtn");

const likeCountSpan = document.querySelector(".likeCount");
const dislikeCountSpan = document.querySelector(".dislikeCount");

let likeCount = 0;
let dislikeCount = 0;

let liked = false;
let disliked = false;

likeBtn.addEventListener("click", function() {

  if (!liked) {
    liked = true;
    likeBtn.classList.add("liked");
    likeCount++;

    if (disliked) {
      disliked = false;
      dislikeBtn.classList.remove("disliked");
      dislikeCount--;
    }

  } else {
    liked = false;
    likeBtn.classList.remove("liked");
    likeCount--;
  }

  likeCountSpan.textContent = likeCount;
  dislikeCountSpan.textContent = dislikeCount;
});

dislikeBtn.addEventListener("click", function() {

  if (!disliked) {
    disliked = true;
    dislikeBtn.classList.add("disliked");
    dislikeCount++;

    if (liked) {
      liked = false;
      likeBtn.classList.remove("liked");
      likeCount--;
    }

  } else {
    disliked = false;
    dislikeBtn.classList.remove("disliked");
    dislikeCount--;
  }

  likeCountSpan.textContent = likeCount;
  dislikeCountSpan.textContent = dislikeCount;
});

});